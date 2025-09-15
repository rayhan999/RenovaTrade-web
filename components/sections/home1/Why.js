'use client'
import Link from "next/link"
export default function Why() {
    return (
        <>
        {/*Why We Are Start*/}
        <section className="why-we-are">
            <div className="why-we-are__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/why-we-are-bg.jpg)' }} >
            </div>
            <div className="why-we-are__bg-shape"
                style={{ backgroundImage: ' url(assets/images/shapes/why-we-are-bg-shape.png)' }} ></div>
            <div className="why-we-are__shape-1">
                <img src="assets/images/shapes/why-we-are-shape-1.png" alt=""/>
            </div>
            <div className="why-we-are__shape-2">
                <img src="assets/images/shapes/why-we-are-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="why-we-are__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Who We Are</span>
                                </div>
                                <h2 className="section-title__title">Work that Meet your
                                    <br/> Expectations</h2>
                            </div>
                            <p className="why-we-are__text">There are many variations of available but the majority have
                                suffered. Alteration in some form, lipsum is simply free text by
                                injected humou or randomised words even believable.</p>
                            <ul className="why-we-are__points-box list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-tiles"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Boost Your Sale</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit velit sagittis eu viverra
                                            pellentesque condimentum.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-analytics1"></span>
                                    </div>
                                    <div className="content">
                                        <h3>Data & Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit velit sagittis eu viverra
                                            pellentesque condimentum.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="why-we-are__right">
                            <div className="why-we-are__img wow slideInRight animated" data-wow-delay="0.1s"
                                data-wow-duration="1500ms">
                                <img src="assets/images/resources/why-we-are-img-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Why We Are End*/}
            
        </>
    )
}
