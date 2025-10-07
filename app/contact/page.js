
import Layout from "@/components/layout/Layout"
import Cta from "@/components/sections/home1/Cta"
import ContactPageForm from '@/components/sections/home1/ContactPageForm'
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="contact-two__img-1 wow fadeInLeft" data-wow-delay="300ms">
                {/* <img src="assets/images/resources/blog-one-shape-1.png" alt="" className="float-bob-x"/> */}
            </div>
            <div className="contact-two__bg-shape"></div>
            <div className="contact-two__bg-shape-2"></div>
            <div className="contact-two__google-map">
               <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199411.80196934087!2d24.761404!3d60.169855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210f09%3A0x2607db3c01d69a0!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sus!4v1694525041515!5m2!1sen!2sus" 
  className="contact-two__map"
></iframe>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="contact-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Get in touch</span>
                                </div>
                                <h2 className="section-title__title">Contact us anytime
                                    </h2>
                            </div>
                            {/* <p className="team-details__bottom-left-text">Penatibus pulvinar hac lacinia interdum
                                    fermentum tortor aite montes aecenas pretiun dignissim facilisi top level vehicula.
                                </p> */}
                                <div className="team-details__bottom-left-points-box" style={{marginTop:'20px'}}>
                                    <ul className="team-details__bottom-left-points-list list-unstyled">
                                        <li>
                                            <div className="team-details__bottom-points-count"><i className="fa fa-building"></i></div>
                                            <div className="team-details__bottom-points-content">
                                                <h3>Renova Trade</h3>
                                                <p>Location: Keskussairaalantie 2, Jyväskylä</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="team-details__bottom-points-count"><i className="fa fa-life-ring"></i></div>
                                            <div className="team-details__bottom-points-content">
                                                <h3>Renova Helpline</h3>
                                                <p>Mail: <a href="mailto:info@renovatrade.fi">info@renovatrade.fi</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="team-details__bottom-points-count"><i className="fa fa-user"></i></div>
                                            <div className="team-details__bottom-points-content">
                                                <h3>Md Mahedi Hasan Refat</h3>
                                                <p>Founder &amp; Procurement Manager</p>
                                                <p>Contact: <a href="tel:+358413171469">+358 41 317 1469</a><br/>
                                                Mail: <a href="mailto:mahedi.refat@renovatrade.fi">mahedi.refat@renovatrade.fi</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        {/*Contact Two End*/}
<section className="contact-two contact-form-section">
            <div className="contact-two__img-1 wow fadeInLeft" data-wow-delay="300ms">
               
            </div>
            
            <div className="container" >
                <div className="row" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <div className="col-xl-8">
                        <div className="contact-two__left">
                            <div className="section-title text-center mb-4">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Contact Now</span>
                                </div>
                                <h2 className="section-title__title">Request for Our Free
                                    Consultation</h2>
                            </div>
                            
                            <ContactPageForm />
                            <p className="contact-two__centered-text">* After sending request. We’ll contact you for more
                                details about charter.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
     

        </Layout>
        </>
    )
}