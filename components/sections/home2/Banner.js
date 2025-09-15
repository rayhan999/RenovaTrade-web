
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
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
        
        {/*Main Slider Start*/}
        <section className="main-slider-two">
            <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                <SwiperSlide>
                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-2-1.jpg)' }} ></div>
                    <div className="main-slider-two__shape-1 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">We Turn Ideas <br/> Into <span>Digital</span>
                                        <br/>
                                        Reality</h2>
                                    <p className="main-slider-two__text">We have 12+ year of experience for providing
                                        <br/>
                                        consulting services solutions.</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="contact" className="main-slider-two__btn thm-btn">Get Free
                                            Quote</Link>
                                    </div>
                                    <div className="main-slider-two__call">
                                        <div className="main-slider-two__call-icon">
                                            <img src="assets/images/icon/main-menu-two-comment-icon.png" alt=""/>
                                        </div>
                                        <div className="main-slider-two__call-number">
                                            <p>Call any time</p>
                                            <h5><Link href="tel:12987458741">+12-987458741</Link></h5>
                                        </div>
                                    </div>
                                    <div className="main-slider-two__arrow">
                                        <img src="assets/images/shapes/main-slider-two-arrow.png" alt=""
                                            className="float-bob-x"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-2-2.jpg)' }} ></div>
                    <div className="main-slider-two__shape-1 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">We Turn Ideas <br/> Into <span>Digital</span>
                                        <br/>
                                        Reality</h2>
                                    <p className="main-slider-two__text">We have 12+ year of experience for providing
                                        <br/>
                                        consulting services solutions.</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="contact" className="main-slider-two__btn thm-btn">Get Free
                                            Quote</Link>
                                    </div>
                                    <div className="main-slider-two__call">
                                        <div className="main-slider-two__call-icon">
                                            <img src="assets/images/icon/main-menu-two-comment-icon.png" alt=""/>
                                        </div>
                                        <div className="main-slider-two__call-number">
                                            <p>Call any time</p>
                                            <h5><Link href="tel:12987458741">+12-987458741</Link></h5>
                                        </div>
                                    </div>
                                    <div className="main-slider-two__arrow">
                                        <img src="assets/images/shapes/main-slider-two-arrow.png" alt=""
                                            className="float-bob-x"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-slider-two__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/slider-2-3.jpg)' }} ></div>
                    <div className="main-slider-two__shape-1 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shape-1.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-2 float-bob-y">
                        <img src="assets/images/shapes/main-slider-two-shape-2.png" alt=""/>
                    </div>
                    <div className="main-slider-two__shape-3 float-bob-x">
                        <img src="assets/images/shapes/main-slider-two-shape-3.png" alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">We Turn Ideas <br/> Into <span>Digital</span>
                                        <br/>
                                        Reality</h2>
                                    <p className="main-slider-two__text">We have 12+ year of experience for providing
                                        <br/>
                                        consulting services solutions.</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="contact" className="main-slider-two__btn thm-btn">Get Free
                                            Quote</Link>
                                    </div>
                                    <div className="main-slider-two__call">
                                        <div className="main-slider-two__call-icon">
                                            <img src="assets/images/icon/main-menu-two-comment-icon.png" alt=""/>
                                        </div>
                                        <div className="main-slider-two__call-number">
                                            <p>Call any time</p>
                                            <h5><Link href="tel:12987458741">+12-987458741</Link></h5>
                                        </div>
                                    </div>
                                    <div className="main-slider-two__arrow">
                                        <img src="assets/images/shapes/main-slider-two-arrow.png" alt=""
                                            className="float-bob-x"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination" id="main-slider-pagination"></div>
        </section>
        {/*Main Slider End*/}
        </>
    )
}
