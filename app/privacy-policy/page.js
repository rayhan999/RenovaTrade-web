import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"

export const metadata = {
  title: 'Privacy Policy',
  description: 'Renova Trade privacy policy explains how we collect, use, and protect your personal data in compliance with GDPR and Finnish data protection law.',
  openGraph: {
    title: 'Privacy Policy - Renova Trade',
    description: 'How Renova Trade handles personal data.',
    url: 'https://renovatrade.fi/privacy-policy',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <section className="section-padding bg-background">
        <div className="container-renova max-w-4xl">
          <div className="space-y-6 text-secondary leading-relaxed">
            <p className="text-sm text-secondary/70">Last updated: {new Date().getFullYear()}</p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">1. Introduction</h2>
            <p>
              Renova Trade (“we”, “us”, or “our”) respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, store, and safeguard personal information when you visit
              our website <Link href="/" className="text-accent hover:underline">renovatrade.fi</Link> or contact us for
              sourcing, trading, and export services.
            </p>
            <p>
              We process personal data in accordance with the EU General Data Protection Regulation (GDPR) and the
              Finnish Data Protection Act.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">2. Data Controller</h2>
            <p>
              <strong>Renova Trade</strong><br />
              Finland<br />
              Email: <a href="mailto:info@renovatrade.fi" className="text-accent hover:underline">info@renovatrade.fi</a><br />
              Phone: <a href="tel:+358413171469" className="text-accent hover:underline">+358-413171469</a>
            </p>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">3. What Data We Collect</h2>
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact information:</strong> name, company name, email address, phone number.</li>
              <li><strong>Communication data:</strong> messages, enquiries, and quote requests submitted via forms or email.</li>
              <li><strong>Technical data:</strong> IP address, browser type, device information, pages visited, and time spent on the site.</li>
              <li><strong>Marketing data:</strong> preferences for receiving newsletters or marketing communications.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">4. How We Use Your Data</h2>
            <p>We use personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries and provide quotations.</li>
              <li>Manage business relationships and contracts.</li>
              <li>Improve our website and services.</li>
              <li>Send newsletters or market updates only where you have consented.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">5. Legal Basis for Processing</h2>
            <p>
              We process personal data on the basis of: performance of a contract, legitimate interests, compliance with
              legal obligations, or your explicit consent (for example, when subscribing to a newsletter).
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">6. Data Sharing and Transfers</h2>
            <p>
              We do not sell personal data. We may share data with trusted service providers (such as email and hosting
              services) who assist us in operating our business, under strict confidentiality obligations. Where data is
              transferred outside the EU/EEA, we ensure appropriate safeguards are in place.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">7. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary for the purposes outlined in this policy, or as required by
              law. Enquiry data is typically retained for the duration of the business relationship and up to a reasonable
              period thereafter.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">8. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Object to or restrict processing.</li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a complaint with the Finnish Data Protection Authority (Tietosuojavaltuutettu).</li>
            </ul>
            <p>
              To exercise your rights, contact us at{' '}
              <a href="mailto:info@renovatrade.fi" className="text-accent hover:underline">info@renovatrade.fi</a>.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">9. Cookies and Analytics</h2>
            <p>
              Our website may use essential cookies and analytics tools to understand visitor behaviour and improve the
              site. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be available on this page.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at{' '}
              <a href="mailto:info@renovatrade.fi" className="text-accent hover:underline">info@renovatrade.fi</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
