import nodemailer from 'nodemailer';

// Next.js App Router API route
export async function POST(req) {
  try {
    const body = await req.json();
  const { username, email, phone, company, subject, query } = body;

    // Read SMTP credentials from environment variables
    const SMTP_HOST = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
    const SMTP_PORT = process.env.ZOHO_SMTP_PORT ? Number(process.env.ZOHO_SMTP_PORT) : 465;
    const SMTP_SECURE = process.env.ZOHO_SMTP_SECURE ? process.env.ZOHO_SMTP_SECURE === 'true' : true;
    const SMTP_USER = process.env.ZOHO_SMTP_USER;
    const SMTP_PASS = process.env.ZOHO_SMTP_PASS;

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

    return new Response(JSON.stringify({ ok: true, info }), { status: 200 });
  } catch (err) {
    console.error('Error sending contact email', err);
    return new Response(JSON.stringify({ error: err.message || 'Unknown error' }), { status: 500 });
  }
}
