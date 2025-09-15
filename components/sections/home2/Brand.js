'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    
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
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 4,
            
        },
        1350: {
            slidesPerView: 4,
            
        },
    }



}
export default function Brands() {
    return (
        <>
        {/*Brand One Start*/}
        <section className="brand-one">
            <div className="brand-one__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/brand-one-bg.jpg)' }} ></div>
            <div className="container">
                <Swiper {...swiperOptions} className="thm-swiper__slider swiper-container">
                    <div className="swiper-wrapper">
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-1.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-2.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-3.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-4.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-1.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-2.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-3.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="assets/images/brand/brand-1-4.png" alt=""/>
                        </div>{/* /.swiper-slide */}
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
        {/*Brand One End*/}
        </>
    )
}
