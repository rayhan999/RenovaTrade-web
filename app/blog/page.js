import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'News & Market Insights - Renova Trade',
    description: 'Stay updated with Renova Trade news, market updates, product launches, equipment deliveries, sourcing insights, and metal market trends.',
    openGraph: {
        title: 'News & Market Insights - Renova Trade',
        description: 'Company news, market updates, and insights from Renova Trade.',
        url: 'https://renovatrade.fi/blog',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

export default function BlogPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News & Market Insights">
                <section className="blog-three">
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape">
                                    <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                </div>
                                <span className="section-title__tagline">Blog & News</span>
                            </div>
                            <h2 className="section-title__title">News & Market Insights</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="text-center section-title" style={{ padding: '80px 20px' }}>
                                    <h3 className="section-title__title">Coming Soon</h3>
                                    <p style={{ marginTop: '20px', marginBottom: '30px' }}>We are preparing company news, market updates, product launches, equipment deliveries, sourcing insights, supplier partnerships, and metal market trends.</p>
                                    <Link href="/" className="thm-btn">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Cta />
            </Layout>
        </>
    )
}
