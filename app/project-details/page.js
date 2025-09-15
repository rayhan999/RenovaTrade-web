import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
        {/*Project Details Start*/}
        <section className="project-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="project-details__left">
                            <div className="project-details__img">
                                <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
                            </div>
                            <h3 className="project-details__title-1">Real Tech Solution</h3>
                            <p className="project-details__text-1">Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollanim id estise laborum. Sed ut perspiciatis unde
                                omnis
                                iste natus error voluptatem accusantium doloremque suppost laudantium, totam rem
                                aperiam
                            </p>
                            <p className="project-details__text-2">Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi commodon consequat. Duis<br/>
                                aute irure dolor in reprehenderit in voluptate velit</p>
                            <div className="project-details__content-and-img">
                                <div className="project-details__content-box">
                                    <h3 className="project-details__title-2">Financial Planning</h3>
                                    <p className="project-details__text-3">Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur.</p>
                                    <ul className="project-details__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-arrow"></span>
                                            </div>
                                            <p>Duis aute irure dolor in reprehenderit in voluptate </p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-arrow"></span>
                                            </div>
                                            <p>Voluptate velit esse cillum dolore eu fugiat nulla pari</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-right-arrow"></span>
                                            </div>
                                            <p>Kuis nostr exercitation ullamco laboris conse</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="project-details__content-img">
                                    <img src="assets/images/project/project-details-content-img-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="project-details__right">
                            <div className="project-details__project-information">
                                <h3 className="project-details__project-information-title">Portfolio Details</h3>
                                <ul className="project-details__project-information-list list-unstyled">
                                    <li>
                                        <p>Clients<span>:</span></p>
                                        <h4>Albert Buttler</h4>
                                    </li>
                                    <li>
                                        <p>Portfolio<span>:</span></p>
                                        <h4>Financial</h4>
                                    </li>
                                    <li>
                                        <p>Service<span>:</span></p>
                                        <h4>Corporate</h4>
                                    </li>
                                    <li>
                                        <p>Category<span>:</span></p>
                                        <h4>Marketing</h4>
                                    </li>
                                    <li>
                                        <p>Date<span>:</span></p>
                                        <h4>17 June 2024</h4>
                                    </li>
                                    <li>
                                        <p>Share<span>:</span></p>
                                        <h4>Fb Tw In Be</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Project Details End*/}

        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="cta-one__inner">
                        <h3 className="cta-one__title">Let's discuss about how we can help
                            <br/> make your business better</h3>
                        <div className="cta-one__btn-box">
                            <Link href="about" className="cta-one__btn thm-btn">Let's Start</Link>
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