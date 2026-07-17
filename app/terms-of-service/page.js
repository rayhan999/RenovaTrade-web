import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions governing the use of the Renova Trade website and services.',
  openGraph: {
    title: 'Terms of Service - Renova Trade',
    description: 'Terms and conditions for using Renova Trade services.',
    url: 'https://renovatrade.fi/terms-of-service',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader title="Terms of Service" breadcrumbs={[{ label: "Terms of Service" }]} />
      <section className="section-padding bg-background">
        <div className="container-renova max-w-4xl">
          <div className="space-y-6 text-secondary leading-relaxed">
            <p className="text-sm text-secondary/70">Last updated: {new Date().getFullYear()}</p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Renova Trade website at{' '}
              <Link href="/" className="text-accent hover:underline">renovatrade.fi</Link> and any related services,
              you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">2. About Us</h2>
            <p>
              Renova Trade is a Finland-registered company engaged in international sourcing, procurement, trading, and
              export of metal scrap, heavy equipment, industrial machinery, and related products. Our registered office
              is in Finland.
            </p>
            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">3. Use of the Website</h2>
            <p>
              You may use this website for lawful business purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the site in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorised access to any part of the site or its systems.</li>
              <li>Copy, reproduce, or redistribute content without our prior written consent.</li>
              <li>Submit false or misleading information through any form on the site.</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">4. Quotations and Contracts</h2>
            <p>
              Information on this website, including product descriptions and indicative pricing, is provided for general
              information only. A binding contract is formed only upon written confirmation of an order and acceptance by
              Renova Trade. All shipments are subject to agreed Incoterms 2020, payment terms, and documentation requirements.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and graphics, is the property of Renova Trade or
              its licensors and is protected by copyright and other intellectual property laws. You may not use our
              trademarks or content without written permission.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">6. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, Renova Trade shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of, or inability to use, this website or our services. Our total liability in any
              claim shall be limited to the amount paid for the specific transaction giving rise to the claim.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">7. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided “as is” without warranties of any kind, either express or implied.
              We do not guarantee that the website will be error-free, uninterrupted, or free from harmful components.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">8. Links to Third-Party Sites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy
              practices, or terms of use of any third-party site.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">9. Privacy</h2>
            <p>
              Your use of this website is also governed by our{' '}
              <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>, which explains
              how we collect and process personal data.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">10. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of Finland. Any disputes
              arising under these terms shall be subject to the exclusive jurisdiction of the courts of Finland.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">11. Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Continued use of the website after changes are posted
              constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-heading font-semibold text-primary mb-2">12. Contact Us</h2>
            <p>
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:info@renovatrade.fi" className="text-accent hover:underline">info@renovatrade.fi</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
