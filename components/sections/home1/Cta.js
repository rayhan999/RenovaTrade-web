'use client'
import Link from "next/link"
export default function Cta() {
    return (
        <>
        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/renova_banner_1.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="cta-one__inner">
                        <h3 className="cta-one__title">Ready to source smarter?
                            <br/> Let's discuss your requirements</h3>
                        <div className="cta-one__btn-box">
                            <Link href="contact" className="cta-one__btn thm-btn btn-3d">Request a Quote</Link>
                            <Link href="/services" className="cta-one__btn thm-btn btn-3d" style={{ marginLeft: '15px' }}>Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
        
            
        </>
    )
}
