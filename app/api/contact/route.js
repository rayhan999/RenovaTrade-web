import nodemailer from 'nodemailer';

// Next.js App Router API route
export async function POST(req) {
  try {
    const body = await req.json();
    const { username = '', email = '', phone = '', company = '', subject = '', query = '' } = body || {};

    // Basic validation — both the contact form and the multi-step quote form
    // always send these three fields.
    if (!username.trim() || !email.trim() || !query.trim()) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Please provide a valid email address.' }), { status: 400 });
    }

    // Read SMTP credentials from environment variables.
    // .trim() guards against stray whitespace in .env values, which causes
    // silent SMTP auth failures.
    const SMTP_HOST = (process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com').trim();
    const SMTP_PORT = process.env.ZOHO_SMTP_PORT ? Number(String(process.env.ZOHO_SMTP_PORT).trim()) : 465;
    const SMTP_SECURE = process.env.ZOHO_SMTP_SECURE ? String(process.env.ZOHO_SMTP_SECURE).trim() === 'true' : true;
    const SMTP_USER = process.env.ZOHO_SMTP_USER?.trim();
    const SMTP_PASS = process.env.ZOHO_SMTP_PASS?.trim();

    if (!SMTP_USER || !SMTP_PASS) {
      return new Response(JSON.stringify({ error: 'SMTP credentials not configured' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Use the authenticated SMTP user as the From address to avoid "Relaying disallowed" errors.
    // Put the visitor email in Reply-To so replies go to them.
    const mailOptions = {
      from: SMTP_USER, // must be the SMTP authenticated identity or an allowed alias on the SMTP account
      replyTo: `${username} <${email}>`,
      to: 'info@renovatrade.fi',
      subject: subject || `Contact form submission from ${username}`,
      text: `Name: ${username}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nSubject: ${subject}\n\nMessage:\n${query}`,
      html: `<p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${query.replace(/\n/g, '<br/>')}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);

    // Return only the messageId — the full nodemailer info object leaks
    // server/transport details to the client.
    return new Response(JSON.stringify({ ok: true, messageId: info.messageId }), { status: 200 });
  } catch (err) {
    console.error('Error sending contact email', err);
    return new Response(JSON.stringify({ error: err.message || 'Unknown error' }), { status: 500 });
  }
}
