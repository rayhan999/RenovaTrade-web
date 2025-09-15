'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Faq">
                

        {/*Faq Page Start*/}
        <section className="faq-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__left">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>What is construction?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How long does project typically take?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What different of construction projects?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>What is the role of a construction manager?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="faq-page__right">
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                    <div className="accrodion-title">
                                        <h4>What is construction?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                    <div className="accrodion-title">
                                        <h4>How long does project typically take?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                    <div className="accrodion-title">
                                        <h4>What different of construction projects?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                    <div className="accrodion-title">
                                        <h4>What is the role of a construction manager?</h4>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                cras
                                                sed
                                                eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                sollicitudin dignissim habitant</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Faq Page End*/}

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