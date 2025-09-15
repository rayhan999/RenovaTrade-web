import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Page Not Found">
        {/*Error Page Start*/}
        <section className="error-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="error-page__inner">
                            <div className="error-page__title-box">
                                <h2 className="error-page__title">404</h2>
                            </div>
                            <h3 className="error-page__tagline">Sorry we can't find that page!</h3>
                            <p className="error-page__text">The page you are looking for was never existed.</p>
                            <form className="error-page__form">
                                <div className="error-page__form-input">
                                    <input type="search" placeholder="Search here"/>
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </div>
                            </form>
                            <Link href="/" className="thm-btn error-page__btn">Back to home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Error Page End*/}


        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="cta-one__inner">
                        <h3 className="cta-one__title">Let's discuss about how we can help
                            <br/> make your business better</h3>
                        <div className="cta-one__btn-box">
                            <Link href="#" className="cta-one__btn thm-btn">Let's Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
            </Layout>
        </>
    )
}
