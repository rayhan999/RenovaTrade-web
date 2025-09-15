'use client'
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

export default function Testimonial() {
    return (
        <>
        {/*Testimonial Three Start*/}
        <section className="testimonial-three">
            <div className="testimonial-three__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/testimonial-three-bg.jpg)' }} ></div>
            <div className="testimonial-three__shape-1 float-bob-y">
                <img src="assets/images/shapes/testimonial-three-shape-1.png" alt=""/>
            </div>
            <div className="testimonial-three__img-1 wow fadeInRight" data-wow-delay="100ms">
                <img src="assets/images/testimonial/testimonial-three-img-1.png" alt=""/>
                <div className="testimonial-three__shape-2 float-bob-x">
                    <img src="assets/images/shapes/testimonial-three-shape-2.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5">
                        <div className="testimonial-three__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Our Testimonials</span>
                                </div>
                                <h2 className="section-title__title">What They're Talking
                                    About Us?</h2>
                            </div>
                            <p className="testimonial-three__text">There are many varins of passages of Lorem Ipsum
                                available,
                                But majority have suffered There are many varins of passages</p>
                            <div className="testimonial-three__btn-box">
                                <Link href="testimonials" className="testimonial-three__btn thm-btn">View More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="testimonial-three__right">
                            <div className="testimonial-three__main-content">
                                <Swiper {...swiperOptions} className="swiper-container" id="testimonial-one__carousel">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="testimonial-three__single">
                                                <div className="testimonial-three__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-three__single-text">“ This is due their excellent
                                                    service, competitive pricing and
                                                    customer support. It's throughly refresing to get such a
                                                    personal touch. Duis aute lorem ipsum is simply free text
                                                    irure dolor in reprehenderit in esse nulla pariatur.</p>
                                                <div className="testimonial-three__client-info">
                                                    <div className="testimonial-three__client-img">
                                                        <img src="assets/images/testimonial/testimonial-3-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="testimonial-three__client-content">
                                                        <h3>Angela Hammack</h3>
                                                        <p>CO Founder </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* /.swiper-slide */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="testimonial-three__single">
                                                <div className="testimonial-three__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-three__single-text">“ This is due their excellent
                                                    service, competitive pricing and
                                                    customer support. It's throughly refresing to get such a
                                                    personal touch. Duis aute lorem ipsum is simply free text
                                                    irure dolor in reprehenderit in esse nulla pariatur.</p>
                                                <div className="testimonial-three__client-info">
                                                    <div className="testimonial-three__client-img">
                                                        <img src="assets/images/testimonial/testimonial-3-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="testimonial-three__client-content">
                                                        <h3>Angela Hammack</h3>
                                                        <p>CO Founder </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* /.swiper-slide */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="testimonial-three__single">
                                                <div className="testimonial-three__quote">
                                                    <span className="icon-quote"></span>
                                                </div>
                                                <p className="testimonial-three__single-text">“ This is due their excellent
                                                    service, competitive pricing and
                                                    customer support. It's throughly refresing to get such a
                                                    personal touch. Duis aute lorem ipsum is simply free text
                                                    irure dolor in reprehenderit in esse nulla pariatur.</p>
                                                <div className="testimonial-three__client-info">
                                                    <div className="testimonial-three__client-img">
                                                        <img src="assets/images/testimonial/testimonial-3-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="testimonial-three__client-content">
                                                        <h3>Angela Hammack</h3>
                                                        <p>CO Founder </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* /.swiper-slide */}
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial Three End*/}
            
        </>
    )
}
