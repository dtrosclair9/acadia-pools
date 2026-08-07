/**
 * Outbound messaging. One place that talks to the network, so no caller can
 * forget the timeout.
 *
 * Every channel is best-effort and INDEPENDENT: a Telegram outage must not
 * swallow the email, and a Resend outage must not swallow the alert. Each
 * function returns a boolean rather than throwing, and the route decides what
 * the combination means.
 */

import { customerEmail, ownerEmail, telegramMessage } from './lead-email'
import type { Lead } from './lead'

/** A hanging third party must never hold the visitor's submit open. */
const TIMEOUT_MS = 6000

const OWNER_EMAIL = 'acadiapools@gmail.com'

/**
 * Replies have to land somewhere a human reads.
 *
 * acadiapools.com has NO MX records — the domain sends but cannot receive. A
 * reply to quotes@acadiapools.com bounces into nowhere, so a customer answering
 * the confirmation would be answering into a hole and the silence would look
 * like being ignored. Every message routes replies to the Gmail account that
 * actually exists.
 */
const FROM = 'Acadia Pools <quotes@acadiapools.com>'
const REPLY_TO = OWNER_EMAIL

async function postJson(url: string, body: unknown, headers: Record<string, string> = {}) {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  })
}

/**
 * The primary alert.
 *
 * Email is the channel that already failed — the owner does not read it
 * reliably, which is the entire reason this exists. Telegram is a chat app: it
 * pushes, and it keeps an unread badge on the app icon until he opens it.
 */
export async function alertOwner(lead: Lead): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return false // not configured (e.g. local dev) — skip, never throw
  try {
    const res = await postJson(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: telegramMessage(lead),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    })
    return res.ok
  } catch {
    return false
  }
}

async function sendEmail(
  to: string,
  msg: { subject: string; html: string; text: string },
  replyTo: string,
): Promise<boolean> {
  const key = process.env.RESEND_API_KEY
  if (!key) return false // not configured — skip, never throw
  try {
    const res = await postJson(
      'https://api.resend.com/emails',
      {
        from: FROM,
        reply_to: replyTo,
        to: [to],
        subject: msg.subject,
        html: msg.html,
        text: msg.text,
      },
      { Authorization: `Bearer ${key}` },
    )
    return res.ok
  } catch {
    return false
  }
}

/** The durable record. Outlives the alert; carries every field. */
export function emailOwner(lead: Lead): Promise<boolean> {
  // Reply goes to the CUSTOMER here — hitting reply on a lead should start the
  // conversation, not send mail to himself.
  return sendEmail(OWNER_EMAIL, ownerEmail(lead), lead.email)
}

/** Courtesy confirmation. Never part of whether the submission succeeded. */
export function emailCustomer(lead: Lead): Promise<boolean> {
  return sendEmail(lead.email, customerEmail(lead), REPLY_TO)
}
