'use client'
import Link from "next/link"
export default function Service() {
    return (
        <>
        {/*Services One Start*/}
        <section className="services-one">
            <h3 className="services-one__big-text">Products</h3>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Products List</span>
                    </div>
                    <h2 className="section-title__title">Products Offered in metal scrap</h2>
                </div>
                <div className="row justify-center" style={{justifyContent:'center'}}>
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_1.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-coding"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="website-development">Shredded Scrap</Link></h3>
                                    <p className="services-one__text">Clean, high-density ferrous scrap processed through shredding machines, ideal for steel mills due to its efficient melting properties.

</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-curve"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="seo-content-writting">HMS 1 & 2</Link></h3>
                                    <p className="services-one__text">A mix of heavy melting steel scrap, categorized by thickness and purity, widely used in steel manufacturing and recycling industries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-creative"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="digital-marketing">Plate & Structure</Link></h3>
                                    <p className="services-one__text">Heavy steel scrap from structural beams, plates, and industrial components, preferred by steel mills for its strength and quality.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/services-1-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap">
                                <div className="services-one__icon">
                                    <span className="icon-productivity"></span>
                                </div>
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="digital-marketing">Marketing &
                                            Reporting</Link></h3>
                                    <p className="services-one__text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit,</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*Services One Single End*/}
                </div>
            </div>
        </section>
        {/*Services One End*/}

    
        </>
    )
}
