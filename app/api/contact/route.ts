import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { renderContactConfirmationEmail } from '@/lib/emails/contact-confirmation';
import { renderContactNotificationEmail } from '@/lib/emails/contact-notification';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim().slice(0, 200);
  const email = String(body.email ?? '').trim().slice(0, 200);
  const message = String(body.message ?? '').trim().slice(0, 5000);

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid name, email and message.' }, { status: 400 });
  }

  const contactTo = process.env.CONTACT_TO_EMAIL ?? process.env.LEAD_NOTIFICATION_EMAIL;
  if (!contactTo) {
    return NextResponse.json({ error: 'Contact form is not configured yet.' }, { status: 500 });
  }

  const notification = renderContactNotificationEmail({ name, email, message });
  try {
    await sendMail({
      to: contactTo,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
      replyTo: email,
    });
  } catch {
    return NextResponse.json({ error: 'Something went wrong sending your message. Please try again later.' }, { status: 502 });
  }

  const confirmation = renderContactConfirmationEmail({ name });
  try {
    await sendMail({
      to: email,
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });
  } catch {
    // The enquiry was already delivered to the site owner; a failed confirmation email shouldn't fail the request.
  }

  return NextResponse.json({ ok: true });
}
