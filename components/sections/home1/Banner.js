'use client'
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from "next/image"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
}

export default function Banner() {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.update()
    }
  }, [])

  return (
    <section className="main-slider">
      <Swiper ref={swiperRef} {...swiperOptions} className="swiper-container thm-swiper__slider">
        
        <SwiperSlide>
          {/* Background */}
          {/* <div
            className="main-slider__bg"
            style={{ backgroundImage: 'url(assets/images/backgrounds/idesco1.jpg)' }}
          /> */}
           <div className="main-slider-three__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/renova_banner_2.webp)' }} ></div>
          {/* <div className="main-slider__bg">
    <Image
      src="/assets/images/backgrounds/idesco1.jpg"
      alt=""
      fill
      priority
      style={{ objectFit: "cover" }}
    />
  </div> */}

          {/* Shapes */}
          <div className="main-slider__shape-bg"
            style={{ backgroundImage: 'url(assets/images/shapes/main-slider-shape-bg.png)' }}
          ></div>
          <div className="main-slider__shape-1 float-bob-y">
            <img src="assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="main-slider__shape-2 img-bounce">
            <img src="assets/images/shapes/main-slider-shape-2.png" alt="" />
          </div>
          <div className="main-slider__shape-3 float-bob-x">
            {/* <img src="assets/images/shapes/main-slider-shape-3_new.png" alt="" /> */}
    
          </div>

          {/* Content */}
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <h2 className="main-slider__title">
                    Rejuvenating  <br /> <span>the metal </span> <br />
                    to new life 

                  </h2>
                  <p className="main-slider__text">
                    Your all-in-one solution for metal scrap. Focus on your core business, while we take care of everything, from start to finish.
                  </p>
                  <div className="main-slider__btn-box">
                    <Link href="contact" className="main-slider__btn thm-btn">
                      Contact us
                    </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Pagination */}
        <div className="swiper-pagination" id="main-slider-pagination"></div>

      </Swiper>
    </section>
  )
}
