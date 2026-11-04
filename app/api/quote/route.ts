import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { parseQuoteRequest } from '@/lib/quote';
import { renderQuoteConfirmationEmail } from '@/lib/emails/quote-confirmation';
import { renderQuoteNotificationEmail } from '@/lib/emails/quote-notification';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const quote = parseQuoteRequest(body);

  if (!quote) {
    return NextResponse.json({ error: 'Please check your details and try again.' }, { status: 400 });
  }

  const quoteTo = process.env.QUOTE_NOTIFICATION_EMAIL ?? process.env.LEAD_NOTIFICATION_EMAIL;
  if (!quoteTo) {
    return NextResponse.json({ error: 'The quote form is not configured yet.' }, { status: 500 });
  }

  const notification = renderQuoteNotificationEmail(quote);
  try {
    await sendMail({
      to: quoteTo,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
      replyTo: quote.email,
    });
  } catch (error) {
    console.error('Quote notification email failed', error);
    return NextResponse.json({ error: 'Something went wrong sending your details. Please try again later.' }, { status: 502 });
  }

  const confirmation = renderQuoteConfirmationEmail({ name: quote.fullName, products: quote.products });
  try {
    await sendMail({
      to: quote.email,
      subject: confirmation.subject,
      text: confirmation.text,
      html: confirmation.html,
    });
  } catch (error) {
    // The request was already delivered to the site owner; a failed confirmation email shouldn't fail it.
    console.error('Quote confirmation email failed', error);
  }

  return NextResponse.json({ ok: true });
}
