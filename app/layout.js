import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/zefxa.css"
import "./globals.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { Space_Grotesk, Inter } from 'next/font/google'
import AppShell from "@/components/shell/AppShell"
import { PHONE, EMAIL, WEBSITE } from "@/lib/constants"

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
    description: 'Renova Trade is a Finland-based international sourcing, procurement, trading, and export company connecting European manufacturers with businesses across global industrial markets.',
    openGraph: {
        title: 'Renova Trade – International Sourcing & Metal Trading',
        description: 'Finland-based sourcing and export partner connecting European industry with global industrial markets. Metal scrap, heavy equipment, and procurement services.',
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
        description: 'Finland-based international sourcing and metal trading. Connecting European suppliers with global industrial buyers.',
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
                "telephone": PHONE,
                "contactType": "customer service",
                "email": EMAIL,
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
