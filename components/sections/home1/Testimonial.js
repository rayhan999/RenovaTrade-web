'use client'
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
        {/*Testimonial One Start*/}
        <section className="testimonial-one">
            <div className="container">
                <div className="testimonial-one__inner">
                    <div className="testimonial-one__top">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <div className="section-title__tagline-shape">
                                    <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                </div>
                                <span className="section-title__tagline">Our Testimonials</span>
                            </div>
                            <h2 className="section-title__title">What they’re talking
                                <br/> about us</h2>
                        </div>
                    </div>
                    <div className="testimonial-one__main-content">
                        <Swiper {...swiperOptions} className="swiper-container">
                            <SwiperSlide>
                                <div className="testimonial-one__main-content-inner">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="testimonial-one__left">
                                                <div className="testimonial-one__img-box">
                                                    <img src="assets/images/testimonial/testimonial-one-img-1.jpg"
                                                        alt=""/>
                                                    <div className="testimonial-one__shape-1">
                                                        <img src="assets/images/shapes/testimonial-one-shape-1.png"
                                                            alt=""/>
                                                    </div>
                                                    <div className="testimonial-one__shape-2">
                                                        <img src="assets/images/shapes/testimonial-one-shape-2.png"
                                                            alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5">
                                            <div className="testimonial-one__right">
                                                <div className="testimonial-one__single">
                                                    <div className="testimonial-one__client-info-box">
                                                        <div className="testimonial-one__client-img">
                                                            <img src="assets/images/testimonial/testimonial-1-1.jpg"
                                                                alt="Client testimonial"/>
                                                        </div>
                                                        <div className="testimonial-one__client-content">
                                                            <h5 className="testimonial-one__client-name">Johan Bergström
                                                            </h5>
                                                            <p className="testimonial-one__client-sub-title">Procurement Director, Nordic Metals</p>
                                                        </div>
                                                    </div>
                                                    <p className="testimonial-one__text">Renova Trade made our metal scrap sourcing from Europe straightforward. Their documentation and logistics support saved us weeks of coordination.</p>
                                                    <div className="testimonial-one__quote">
                                                        <span className="icon-quotes"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        {/*Testimonial One End*/}
            
        </>
    )
}
