'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,    
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Testimonials">
        {/*Testimonial Two Start*/}
        <section className="testimonial-two testimonial-four">
            <div className="testimonial-two__right-img wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="assets/images/testimonial/testimonial-two-right-img.png" alt=""/>
            </div>
            <div className="testimonial-two__shape-1 float-bob-x">
                <img src="assets/images/shapes/testimonial-two-shape-1.png" alt=""/>
            </div>
            <div className="testimonial-two__shape-2 float-bob-x">
                <img src="assets/images/shapes/testimonial-two-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-two__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Our Testimonials</span>
                                </div>
                                <h2 className="section-title__title">What They're Talking
                                    <br/> About us.</h2>
                            </div>
                            <div className="testimonial-two__left-bottom">
                                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                        {/*Testimonial Two Single Start*/}
                                        <div className="swiper-slide">
                                            <div className="testimonial-two__single">
                                                <div className="testimonial-two__single-shape-1"></div>
                                                <div className="testimonial-two__client-and-ratting">
                                                    <div className="testimonial-two__client-info">
                                                        <div className="testimonial-two__client-img">
                                                            <img src="assets/images/testimonial/testimonial-2-1.jpg"
                                                                alt=""/>
                                                        </div>
                                                        <div className="testimonial-two__client-content">
                                                            <h3>Kendra Pual</h3>
                                                            <p>Web Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-two__ratting">
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </div>
                                                <p className="testimonial-two__text">There are many variations of available
                                                    but the majority have
                                                    suffered. Alteration in some form, lipsum is simply free text by
                                                    injected humou or randomised words even believable.</p>
                                            </div>
                                        </div>
                                        {/*Testimonial Two Single End*/}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        {/*Testimonial Two Single Start*/}
                                        <div className="swiper-slide">
                                            <div className="testimonial-two__single">
                                                <div className="testimonial-two__single-shape-1"></div>
                                                <div className="testimonial-two__client-and-ratting">
                                                    <div className="testimonial-two__client-info">
                                                        <div className="testimonial-two__client-img">
                                                            <img src="assets/images/testimonial/testimonial-2-2.jpg"
                                                                alt=""/>
                                                        </div>
                                                        <div className="testimonial-two__client-content">
                                                            <h3>Adam Smith</h3>
                                                            <p>Web Designer</p>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-two__ratting">
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                        <span className="icon-star"></span>
                                                    </div>
                                                </div>
                                                <p className="testimonial-two__text">There are many variations of available
                                                    but the majority have
                                                    suffered. Alteration in some form, lipsum is simply free text by
                                                    injected humou or randomised words even believable.</p>
                                            </div>
                                        </div>
                                        {/*Testimonial Two Single End*/}
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-two__right">
                            <form className="contact-form-validated testimonial-two__form"
                                method="post" >
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="testimonial-two__input-box">
                                            <input type="text" name="username" placeholder="Your Name" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="testimonial-two__input-box">
                                            <input type="text" name="phone" placeholder="Your Phone" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="testimonial-two__input-box">
                                            <input type="email" name="email" placeholder="Your Email" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="testimonial-two__input-box">
                                            <input type="text" name="phone" placeholder="Your Address" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="testimonial-two__input-box">
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select baggage">Subject</option>
                                                    <option>Select Subject 01</option>
                                                    <option>Select Subject 02</option>
                                                    <option>Select Subject 03</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="testimonial-two__btn-box">
                                            <button type="submit" className="thm-btn testimonial-two__btn">See More<span
                                                    className="fas fa-angle-right"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial Two End*/}

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