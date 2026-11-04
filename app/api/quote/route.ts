import { NextResponse } from 'next/server';
import { HubSpotError, isHubSpotConfigured, syncQuoteToHubSpot } from '@/lib/hubspot';
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
  if (!quoteTo || !isHubSpotConfigured()) {
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

  // Success is only reported once HubSpot has confirmed the contact was created or updated. The
  // notification email above has already gone out, so a HubSpot outage doesn't lose the lead.
  try {
    await syncQuoteToHubSpot(quote);
  } catch (error) {
    // Log status and correlation id only: never the submitted details.
    if (error instanceof HubSpotError) {
      console.error('Quote HubSpot sync failed', {
        message: error.message,
        status: error.status,
        category: error.category,
        correlationId: error.correlationId,
      });
    } else {
      console.error('Quote HubSpot sync failed unexpectedly', error instanceof Error ? error.name : 'unknown error');
    }
    return NextResponse.json({ error: 'Something went wrong saving your details. Please try again later.' }, { status: 502 });
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
