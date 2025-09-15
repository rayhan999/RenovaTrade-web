
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

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



}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        
        {/*Main Slider Start*/}
        <section className="main-slider-three">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <SwiperSlide>
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-3-1.jpg)' }} ></div>
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2 float-bob-y"></div>
                    <div className="main-slider-three__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-three__content">
                                    <h2 className="main-slider-three__title">Provide Massive <br/> <span>Business</span>
                                        Solutions</h2>
                                    <p className="main-slider-three__text">We have 12+ year of experience for providing
                                        <br/>
                                        consulting services solutions.</p>
                                    <div className="main-slider-three__btn-box">
                                        <Link href="contact" className="main-slider-three__btn-1 thm-btn">Get Free
                                            Quote</Link>
                                        <Link href="about" className="main-slider-three__btn-2 thm-btn">Read More</Link>
                                    </div>
                                    <div className="main-slider-three__video-link">
                                        <div className="main-slider-three__video-shape-1">
                                            <img src="assets/images/shapes/main-slider-three-video-shape-1.png"
                                                alt=""/>
                                        </div>
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="main-slider-three__video-icon">
                                                <span className="icon-play-button"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-3-2.jpg)' }} ></div>
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2 float-bob-y"></div>
                    <div className="main-slider-three__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-three__content">
                                    <h2 className="main-slider-three__title">Provide Massive <br/> <span>Business</span>
                                        Solutions</h2>
                                    <p className="main-slider-three__text">We have 12+ year of experience for providing
                                        <br/>
                                        consulting services solutions.</p>
                                    <div className="main-slider-three__btn-box">
                                        <Link href="contact" className="main-slider-three__btn-1 thm-btn">Get Free
                                            Quote</Link>
                                        <Link href="about" className="main-slider-three__btn-2 thm-btn">Read More</Link>
                                    </div>
                                    <div className="main-slider-three__video-link">
                                        <div className="main-slider-three__video-shape-1">
                                            <img src="assets/images/shapes/main-slider-three-video-shape-1.png"
                                                alt=""/>
                                        </div>
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="main-slider-three__video-icon">
                                                <span className="icon-play-button"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-3-3.jpg)' }} ></div>
                    <div className="main-slider-three__shape-1"></div>
                    <div className="main-slider-three__shape-2 float-bob-y"></div>
                    <div className="main-slider-three__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-three-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-three__content">
                                    <h2 className="main-slider-three__title">Provide Massive <br/> <span>Business</span>
                                        Solutions</h2>
                                    <p className="main-slider-three__text">We have 12+ year of experience for providing
                                        <br/>
                                        consulting services solutions.</p>
                                    <div className="main-slider-three__btn-box">
                                        <Link href="contact" className="main-slider-three__btn-1 thm-btn">Get Free
                                            Quote</Link>
                                        <Link href="about" className="main-slider-three__btn-2 thm-btn">Read More</Link>
                                    </div>
                                    <div className="main-slider-three__video-link">
                                        <div className="main-slider-three__video-shape-1">
                                            <img src="assets/images/shapes/main-slider-three-video-shape-1.png"
                                                alt=""/>
                                        </div>
                                        <a onClick={() => setOpen(true)} className="video-popup">
                                            <div className="main-slider-three__video-icon">
                                                <span className="icon-play-button"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="main-slider-three__nav">
                <div className="swiper-button-prev srp" id="main-slider__swiper-button-next">
                    <i className="icon-left-arrow"></i>
                </div>
                <div className="swiper-button-next srn" id="main-slider__swiper-button-prev">
                    <i className="icon-right-arrow"></i>
                </div>
            </div>
        </section>
        {/*Main Slider End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
