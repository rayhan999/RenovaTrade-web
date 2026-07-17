export const metadata = {
  title: 'News & Market Insights',
  description: 'Market trends, sourcing guides, compliance explainers, and delivery reports for procurement teams in metal scrap and industrial equipment.',
  openGraph: {
    title: 'News & Market Insights - Renova Trade',
    description: 'Industry insights and market updates from Renova Trade.',
    url: 'https://renovatrade.fi/blog',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

export default function BlogLayout({ children }) {
  return children
}
