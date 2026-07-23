// Shared SMTP contact-mail logic for the Vercel Node function (api/contact.ts)
// and the local Vite dev middleware (vite.config.ts). Uses Nodemailer, which
// requires the Node.js runtime (not Edge).

import nodemailer from 'nodemailer';

export interface ContactFields {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export type ContactSource = 'get-started' | 'chatbot' | 'contact' | 'package-builder';

const sourceLabel: Record<ContactSource, string> = {
  'get-started': 'calderforge Get Started form',
  chatbot: 'calderforge AI assistant',
  contact: 'calderforge Contact form',
  'package-builder': 'calderforge Package Builder',
};

export interface SmtpEnv {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  CONTACT_TO_EMAIL?: string;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function sanitizeContactFields(value: unknown): ContactFields | null {
  if (!value || typeof value !== 'object') return null;
  const v = value as Record<string, unknown>;
  const str = (key: string, max = 4000) => (typeof v[key] === 'string' ? (v[key] as string).slice(0, max) : '');

  const fields: ContactFields = {
    name: str('name', 200),
    email: str('email', 320),
    company: str('company', 200),
    service: str('service', 200),
    budget: str('budget', 100),
    timeline: str('timeline', 100),
    message: str('message', 5000),
  };

  if (!fields.name.trim() || !isValidEmail(fields.email) || fields.message.trim().length < 10) return null;
  return fields;
}

export function sanitizeSource(value: unknown): ContactSource {
  return typeof value === 'string' && value in sourceLabel ? (value as ContactSource) : 'contact';
}

let cachedTransporter: { key: string; transporter: nodemailer.Transporter } | null = null;

function getTransporter(env: SmtpEnv) {
  const host = env.SMTP_HOST?.trim();
  const port = Number(env.SMTP_PORT?.trim() || '465');
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASS?.trim();
  const secure = (env.SMTP_SECURE?.trim() || 'true').toLowerCase() !== 'false';

  if (!host || !user || !pass) return null;

  const key = `${host}:${port}:${user}`;
  if (cachedTransporter?.key === key) return cachedTransporter.transporter;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
  cachedTransporter = { key, transporter };
  return transporter;
}

export interface SendContactEmailResult {
  ok: boolean;
  error?: string;
}

export async function sendContactEmail(
  fields: ContactFields,
  source: ContactSource,
  env: SmtpEnv,
): Promise<SendContactEmailResult> {
  const transporter = getTransporter(env);
  if (!transporter) {
    return { ok: false, error: 'Email is not configured.' };
  }

  const fromAddress = env.SMTP_USER!.trim();
  const toAddress = env.CONTACT_TO_EMAIL?.trim() || fromAddress;
  const label = sourceLabel[source];

  const textBody = [
    `New lead from ${label}`,
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company: ${fields.company || '—'}`,
    `Service: ${fields.service || '—'}`,
    `Budget: ${fields.budget || '—'}`,
    `Timeline: ${fields.timeline || '—'}`,
    '',
    'Project details:',
    fields.message,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `"calderforge Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: fields.email,
      subject: `New lead — ${fields.service || 'General'} (${label})`,
      text: textBody,
    });
    return { ok: true };
  } catch (error) {
    console.error('SMTP send failed:', error);
    return { ok: false, error: 'Failed to send the email.' };
  }
}
