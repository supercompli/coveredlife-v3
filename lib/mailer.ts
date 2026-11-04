import nodemailer from 'nodemailer';

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

function getFrom() {
  const address = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const name = process.env.SMTP_FROM_NAME;
  return name && address ? { name, address } : address;
}

export async function sendMail(options: { to: string; subject: string; text: string; html?: string; replyTo?: string }) {
  return getTransporter().sendMail({
    from: getFrom(),
    ...options,
  });
}
