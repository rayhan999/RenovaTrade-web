export const metadata = {
  title: 'Request a Quote',
  description: 'Get a structured quotation for metal scrap, heavy equipment, industrial machinery, or custom sourcing from European suppliers.',
  openGraph: {
    title: 'Request a Quote - Renova Trade',
    description: 'Submit your sourcing requirement and receive a structured quotation within 3–5 business days.',
    url: 'https://renovatrade.fi/quote',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

export default function QuoteLayout({ children }) {
  return children
}
