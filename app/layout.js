import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/zefxa.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, manrope } from '@/lib/font'
export const metadata = {
    title: { default: 'Renova Trade', template: '%s | Renova Trade' },
    description: 'Renova Trade - International metal scrap trader: HMS, shredded scrap, non-ferrous scrap including copper, aluminum, and stainless steel. Reliable sourcing and prompt logistics.',
    keywords: ['metal scrap', 'HMS scrap', 'shredded scrap', 'aluminum scrap', 'copper scrap', 'stainless steel scrap', 'scrap trading', 'Renova Trade'],
    openGraph: {
        title: 'Renova Trade – Metal Scrap Trading',
        description: 'Renova Trade - Sourcing and trading ferrous and non-ferrous scrap globally. HMS, shredded scrap, copper, aluminum, stainless steel.',
        url: 'https://renovatrade.fi',
        siteName: 'Renova Trade',
        images: [
            {
                url: '/assets/images/logo/renova-og.png',
                width: 1200,
                height: 630,
                alt: 'Renova Trade',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Renova Trade',
        description: 'International metal scrap trading: HMS, shredded scrap, copper, aluminum, stainless steel.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
}

export default function RootLayout({ children }) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Renova Trade",
        "url": "https://renovatrade.fi",
        "logo": "https://renovatrade.fi/assets/images/logo/renova-logo.png",
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+358-XX-XXXXXXX",
                "contactType": "customer service",
                "email": "info@renovatrade.fi",
                "areaServed": "FI"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/renovatrade",
            "https://www.linkedin.com/company/renovatrade"
        ]
    }
    return (
        <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
            <body>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                {children}
            </body>
        </html>
    )
}
