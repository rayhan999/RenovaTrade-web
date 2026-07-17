export const metadata = {
  title: 'Products',
  description: 'Metal scrap, heavy equipment, industrial machinery, and custom-sourced engineering products from vetted European suppliers.',
  openGraph: {
    title: 'Products - Renova Trade',
    description: 'Product categories sourced from Europe and delivered to South Asia.',
    url: 'https://renovatrade.fi/products',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

export default function ProductsLayout({ children }) {
  return children
}
