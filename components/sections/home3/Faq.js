'use client'
import { useState } from 'react'
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
        {/*FAQ One Start*/}
        <section className="faq-one">
            <div className="faq-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/faq-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6"></div>
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                        <div className="faq-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Ask any Questions</span>
                                </div>
                                <h2 className="section-title__title">We Provide Advanced
                                    Frequency & Questions</h2>
                            </div>
                            <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                    <div className="accrodion-title">
                                        <h4>Human centred design to challenges</h4>
                                        <div className="faq-one__count"></div>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                    <div className="accrodion-title">
                                        <h4>How to Improve Your Business</h4>
                                        <div className="faq-one__count"></div>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                    <div className="accrodion-title">
                                        <h4>What Should be listed business card ?</h4>
                                        <div className="faq-one__count"></div>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                    <div className="accrodion-title">
                                        <h4>We help to create visual strategies</h4>
                                        <div className="faq-one__count"></div>
                                    </div>
                                    <div className="accrodion-content">
                                        <div className="inner">
                                            <p>There are many variations of passages the majority have suffered
                                                alteration in some fo injected humour, or randomised words believable.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*FAQ One End*/}

    
        </>
    )
}
