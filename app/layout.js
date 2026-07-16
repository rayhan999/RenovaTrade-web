import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/zefxa.css"
import "./globals.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { Space_Grotesk, Inter } from 'next/font/google'
import AppShell from "@/components/shell/AppShell"

// Industrial-premium type pairing: Space Grotesk (tight-tracked grotesk headings)
// + Inter (highly readable body). Loaded via next/font — no render-blocking import.
const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter',
    display: 'swap',
})

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
                // TODO before launch: replace with a purpose-made 1200×630 OG image
                // (e.g. logo over a corridor/port photo) at /assets/images/og/renova-og.png
                url: '/assets/images/backgrounds/renova_banner_1.jpg',
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
    metadataBase: new URL('https://renovatrade.fi'),
}

export default function RootLayout({ children }) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Renova Trade",
        "url": "https://renovatrade.fi",
        "logo": "https://renovatrade.fi/assets/images/resources/renova_logo.png",
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
        <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
            <body className="font-body">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
                <AppShell>{children}</AppShell>
            </body>
        </html>
    )
}
