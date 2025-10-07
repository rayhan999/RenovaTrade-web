import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/zefxa.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, manrope } from '@/lib/font'
export const metadata = {
    title: { default: 'Renova Trade', template: '%s | Renova Trade' },
    description: 'Renova Trade is a global metal scrap trading company and exporter, sourcing ferrous and non-ferrous scrap (HMS, shredded scrap, copper, aluminum, stainless steel, brass) and supplying international buyers. We offer reliable logistics, sustainable metal recycling, and export services across Asia and worldwide.',
    keywords: [
        'metal scrap trading company',
        'scrap metal exporter',
        'buy and sell metal scrap',
        'scrap trading company in Asia',
        'international metal scrap dealer',
        'Renova Trade scrap metal',
        'metal recycling and export',
        'global scrap trading company',
        'scrap metal supplier',
        'iron scrap exporter',
        'copper scrap trading company',
        'aluminum scrap supplier',
        'stainless steel scrap buyer',
        'brass scrap exporter',
        'heavy melting scrap supplier',
        'ferrous and non-ferrous scrap dealer',
        'scrap metal export to Asia',
        'Asia scrap metal market',
        'metal recycling company',
        'eco-friendly scrap trading',
        'industrial scrap recycling',
        'sustainable metal trade'
    ],
    openGraph: {
        title: 'Renova Trade – Metal Scrap Trading',
    description: 'Renova Trade - Global sourcing and export of ferrous and non-ferrous scrap including HMS, shredded scrap, copper, aluminum, stainless steel, and brass. Serving international buyers and supporting sustainable metal recycling and export to Asia.',
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
    description: 'International metal scrap trading and export — HMS, shredded scrap, copper, aluminum, stainless steel. Renova Trade supplies global buyers and focuses on sustainable recycling.',
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
