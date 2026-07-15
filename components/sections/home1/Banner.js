'use client'
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
  const bgRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.update()
    }
  }, [])

  useEffect(() => {
    let targetY = 0
    let currentY = 0

    const handleScroll = () => {
      targetY = window.scrollY * 0.25
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        currentY += (targetY - currentY) * 0.1
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${currentY}px) scale(1.1)`
        }
        rafRef.current = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="main-slider">
      <Swiper ref={swiperRef} {...swiperOptions} className="swiper-container thm-swiper__slider">
        
        <SwiperSlide>
          {/* Background */}
          <div
            ref={bgRef}
            className="main-slider-three__bg"
            style={{
              backgroundImage: ' url(assets/images/backgrounds/renova_banner_2.webp)',
            }}
          ></div>

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

          {/* Content */}
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-slider__content">
                  <h2 className="main-slider__title">
                    Connecting <br /> <span>European Industry</span> <br />
                    with South Asian Markets
                  </h2>
                  <p className="main-slider__text">
                    Finland-based international sourcing, procurement, trading, and export company connecting trusted European manufacturers with businesses across Bangladesh and South Asia.
                  </p>
                  <div className="main-slider__btn-box">
                    <Link href="contact" className="main-slider__btn thm-btn">
                      Request a Quote
                    </Link>
                    <Link href="/services" className="main-slider__btn thm-btn" style={{ marginLeft: '15px' }}>
                      Our Services
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
