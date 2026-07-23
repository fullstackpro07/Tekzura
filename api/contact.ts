// Vercel Node Serverless Function: /api/contact
//
// Sends contact/lead form submissions via SMTP (Hostinger). Runs on the
// Node.js runtime (not Edge) because Nodemailer needs Node's net/tls modules.
//
// Required in Vercel -> Settings -> Environment Variables:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Optional:
//   SMTP_SECURE (defaults to "true" for port 465)
//   CONTACT_TO_EMAIL (defaults to SMTP_USER)
//   ALLOWED_ORIGINS (comma-separated; leave unset for same-origin only)

import type { IncomingMessage, ServerResponse } from 'node:http';
import { sanitizeContactFields, sanitizeSource, sendContactEmail } from './lib/mailer';

function readAllowedOrigins() {
  return (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function corsHeaders(origin: string | undefined, allowedOrigins: string[]) {
  const allow =
    allowedOrigins.length === 0 || (origin && allowedOrigins.includes(origin))
      ? origin || '*'
      : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type',
    Vary: 'Origin',
  };
}

async function readBody(req: IncomingMessage): Promise<string> {
  let raw = '';
  for await (const chunk of req) raw += chunk;
  return raw;
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const origin = req.headers.origin as string | undefined;
  const allowedOrigins = readAllowedOrigins();
  const headers = corsHeaders(origin, allowedOrigins);

  function send(status: number, body: unknown) {
    res.writeHead(status, { 'Content-Type': 'application/json', ...headers });
    res.end(JSON.stringify(body));
  }

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }
  if (req.method !== 'POST') return send(405, { error: 'Method not allowed' });
  if (allowedOrigins.length > 0 && origin && !allowedOrigins.includes(origin)) {
    return send(403, { error: 'Origin not allowed.' });
  }

  let payload: { fields?: unknown; source?: unknown; botcheck?: unknown };
  try {
    payload = JSON.parse((await readBody(req)) || '{}');
  } catch {
    return send(400, { error: 'Invalid JSON body.' });
  }

  if (String(payload.botcheck || '').trim()) {
    return send(200, { ok: true });
  }

  const fields = sanitizeContactFields(payload.fields);
  if (!fields) return send(400, { error: 'Missing or invalid required fields.' });

  const result = await sendContactEmail(fields, sanitizeSource(payload.source), process.env);

  return send(result.ok ? 200 : 502, result);
}
