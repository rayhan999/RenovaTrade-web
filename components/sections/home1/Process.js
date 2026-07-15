'use client'
export default function Process() {
    const steps = [
        { title: "Understand Requirements", text: "We start by understanding your product needs, specifications, and delivery expectations." },
        { title: "Identify Suppliers", text: "We identify qualified European manufacturers and suppliers that match your requirements." },
        { title: "Collect Quotations", text: "We gather detailed quotations and commercial terms from multiple suppliers." },
        { title: "Compare Offers", text: "We compare technical and commercial offers to find the best value for your business." },
        { title: "Finalize Procurement", text: "We finalize the procurement with clear terms, pricing, and delivery schedules." },
        { title: "Coordinate Export & Delivery", text: "We handle export documentation, logistics coordination, shipping, and ongoing support." }
    ]

    return (
        <>
        {/*Process One Start*/}
        <section className="process-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Our Process</span>
                    </div>
                    <h2 className="section-title__title">How We Work</h2>
                </div>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay={`${100 + (index * 100)}ms`} style={{ display: 'flex' }}>
                            <div className="process-one__single-inner" style={{ flex: 1 }}>
                                <div className="process-one__single-shape"></div>
                                <div className="process-one__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div className="process-one__icon">
                                        <span className="icon-check"></span>
                                    </div>
                                    <h3 className="process-one__title">{step.title}</h3>
                                    <p className="process-one__text">{step.text}</p>
                                    <div className="process-one__count">{index + 1}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/*Process One End*/}
        </>
    )
}
