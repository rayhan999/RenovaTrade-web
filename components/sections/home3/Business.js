'use client'
export default function Business() {
    return (
        <>
        {/*Business Growth Start*/}
        <section className="business-growth">
            <div className="business-growth__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/business-growth-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="business-growth__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Business Growth</span>
                                </div>
                                <h2 className="section-title__title">We're Solve Revolutionary
                                    for your Company</h2>
                            </div>
                            <p className="business-growth__text">On the other hand denounce with rightous indignation
                                dislike men
                                who are beguiled and demoralized by the charms pleasure moment,
                                so blinded by desire that they cannot foresee</p>
                            
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="business-growth__right wow slideInRight" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="business-growth__img">
                                <img src="assets/images/resources/business-growth-img-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Business Growth End*/}

    
        </>
    )
}
