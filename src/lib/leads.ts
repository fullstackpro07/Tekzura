import { supabase, type LeadInsert } from './supabase';
import { siteConfig } from '../content/site';
import { trackContactFormSubmission } from './analytics';

export interface LeadFields {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

export type LeadSource = 'get-started' | 'chatbot' | 'contact' | 'package-builder';

const contactEndpoint = '/api/contact';

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function toLeadInsert(fields: LeadFields, source: LeadSource): LeadInsert {
  return {
    name: fields.name.trim(),
    email: fields.email.trim(),
    company: fields.company.trim() || null,
    service: fields.service,
    budget: fields.budget || null,
    timeline: fields.timeline || null,
    message: fields.message.trim(),
    source,
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
  };
}

async function submitToSupabase(fields: LeadFields, source: LeadSource) {
  if (!supabase) return { skipped: true };
  const { error } = await supabase.from('leads').insert(toLeadInsert(fields, source));
  if (error) throw error;
  return { skipped: false };
}

async function submitToContactApi(fields: LeadFields, source: LeadSource) {
  const response = await fetch(contactEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields, source, botcheck: '' }),
  });

  const data = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || `Contact email request failed with status ${response.status}`);
  }

  return { skipped: false };
}

/** Open a prefilled email so a lead is never lost if both delivery channels fail. */
export function openMailtoFallback(fields: LeadFields) {
  const subject = `New project inquiry — ${fields.service || 'General'}`;
  const body = [
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
  window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export interface LeadSubmitResult {
  ok: boolean;
  usedFallback: boolean;
}

/**
 * Submit a lead via SMTP email (/api/contact) and Supabase storage in parallel.
 * Email delivery is required for success. If both channels fail, opens a
 * prefilled mailto as a last-resort fallback so a lead is never silently lost.
 */
export async function submitLead(fields: LeadFields, source: LeadSource): Promise<LeadSubmitResult> {
  const [emailResult, supabaseResult] = await Promise.allSettled([
    submitToContactApi(fields, source),
    submitToSupabase(fields, source),
  ]);

  if (emailResult.status === 'rejected') console.warn('Contact email failed:', emailResult.reason);
  if (supabaseResult.status === 'rejected') console.warn('Supabase lead insert failed:', supabaseResult.reason);

  const emailSucceeded = emailResult.status === 'fulfilled';
  const supabaseSucceeded = supabaseResult.status === 'fulfilled' && !supabaseResult.value.skipped;

  if (!emailSucceeded && !supabaseSucceeded) {
    openMailtoFallback(fields);
    return { ok: true, usedFallback: true };
  }

  if (emailSucceeded) trackContactFormSubmission(source);
  return { ok: emailSucceeded, usedFallback: false };
}

export interface PackageQuoteFields {
  reference: string;
  name: string;
  email: string;
  business: string;
  whatsapp: string;
  location: string;
  businessDescription: string;
  projectDetails: string;
  existingWebsite: string;
  budget: string;
  timeline: string;
  hearAbout: string;
  selectedServices: string[];
  quoteSummary: string;
  estimatedOneTimeTotal: string;
  monthlyTotal: string;
  attachmentName?: string;
}

export function buildPackageQuoteMessage(fields: PackageQuoteFields) {
  const lines = [
    `Reference: ${fields.reference}`,
    '',
    'Selected services:',
    ...fields.selectedServices.map((service) => `- ${service}`),
    '',
    fields.quoteSummary,
    '',
    `Estimated one-time total: ${fields.estimatedOneTimeTotal}`,
    `Monthly services total: ${fields.monthlyTotal}`,
    '',
    `Business: ${fields.businessDescription}`,
    '',
    fields.projectDetails,
    '',
    `Existing website: ${fields.existingWebsite || 'n/a'}`,
    `Budget: ${fields.budget}`,
    `Timeline: ${fields.timeline}`,
    `How they found us: ${fields.hearAbout}`,
    `Location: ${fields.location || 'n/a'}`,
    `WhatsApp: ${fields.whatsapp}`,
  ];
  if (fields.attachmentName) lines.push(`Attachment: ${fields.attachmentName}`);
  return lines.join('\n');
}

export async function submitPackageQuote(fields: PackageQuoteFields): Promise<LeadSubmitResult> {
  return submitLead(
    {
      name: fields.name,
      email: fields.email,
      company: fields.business || fields.location,
      service: fields.selectedServices.join(', '),
      budget: fields.budget,
      timeline: fields.timeline,
      message: buildPackageQuoteMessage(fields),
    },
    'package-builder',
  );
}
