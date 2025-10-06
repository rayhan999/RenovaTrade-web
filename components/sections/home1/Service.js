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
                        <span className="section-title__tagline">Our Offers</span>
                    </div>
                    <h2 className="section-title__title">Ferrous Scraps</h2>
                </div>
                <div className="row justify-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent:'center' }}>
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_1.jpeg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-coding"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="website-development">Heavy Melting Steel</Link></h3>
                                    <p className="services-one__text">HMS-1 (high density/6mm, non-galvanized or blackened steel)  and HMS-2 (galvanized or blackened, 3mm)


</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-curve"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="seo-content-writting">Shredded Scrap
</Link></h3>
                                    <p className="services-one__text">Homogeneous furnace feeding, and magnetically separated auto or mixed scrap.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-creative"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="digital-marketing">Structural Steel Plate</Link></h3>
                                    <p className="services-one__text">Construction based structural steel plates, and steel angles of different shapes.  
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="900ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-productivity"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="digital-marketing">Tin Can/Plate 
</Link></h3>
                                    <p className="services-one__text">Beverage tin cans that are shredded and loose tin plates sheets.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1200ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                   <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                          <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-productivity"></span>
                                </div> */}
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="digital-marketing">Re-rollable scrap
</Link></h3>
                                    <p className="services-one__text">DBRL, ship propeller scrap, and structural rolling scrap.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1600ms">
                        <div className="services-one__single">
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                   <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-productivity"></span>
                                </div> */}
                                <div className="services-one__content">
                                    <h3 className="services-one__title"><Link href="digital-marketing">Railway Scrap
</Link></h3>
                                    <p className="services-one__text">Railway plates, axles, lines, wheels, and sleepers along with mix scraps.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    {/* <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Products List</span>
                    </div> */}
                    <h2 className="section-title__title">Non-Ferrous Scrap
</h2>
                </div>
                <div className="row justify-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent:'center' }}>
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-coding"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="website-development">Aluminum Scrap
</Link></h3>
                                    <p className="services-one__text">Different types of aluminum cast molds, automotive aluminum, and aluminum TT. 


</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                    <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-curve"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="seo-content-writting">Stainless steel
</Link></h3>
                                    <p className="services-one__text">Stainless steel from kitchenware, process plant stainless, production offcuts.
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    {/*Services One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms" style={{ display: 'flex' }}>
                        <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="services-one__img-box">
                                <div className="services-one__img">
                                   <img src="assets/images/services/service_3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                {/* <div className="services-one__icon">
                                    <span className="icon-creative"></span>
                                </div> */}
                                <div className="services-one__content" style={{ flex: 1 }}>
                                    <h3 className="services-one__title"><Link href="digital-marketing">Copper & Copper Aloys
</Link></h3>
                                    <p className="services-one__text">Copper from insulated wire, bare bright copper, copper turnings, brass castings, radiators etc. 
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Services One Single End*/}
                    
                </div>
            </div>
        </section>
        {/*Services One End*/}

    
        </>
    )
}
