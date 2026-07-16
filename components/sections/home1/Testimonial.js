'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Quote } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import SampleTag from "@/components/ui/SampleTag"
import { ShapeField, Ring, Diamond } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

const testimonials = [
  {
    name: "Johan Bergström",
    role: "Procurement Director, Nordic Metals",
    image: "/assets/images/testimonial/testimonial-1-1.jpg",
    text: "[PLACEHOLDER — replace with real client quote] Renova Trade made our metal scrap sourcing from Europe straightforward. Their documentation and logistics support saved us weeks of coordination.",
  },
  {
    name: "Sarah Lindqvist",
    role: "Operations Manager, Baltic Logistics",
    image: "/assets/images/testimonial/testimonial-1-1.jpg",
    text: "[PLACEHOLDER — replace with real client quote] Professional team with excellent knowledge of European suppliers. They helped us find the right heavy equipment for our port operations.",
  },
  {
    name: "Mikael Virtanen",
    role: "CEO, Finnish Industrial Solutions",
    image: "/assets/images/testimonial/testimonial-1-1.jpg",
    text: "[PLACEHOLDER — replace with real client quote] Working with Renova Trade has been a game-changer for our international procurement. Reliable, transparent, and always responsive.",
  },
]

export default function Testimonial() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      <ShapeField variant="light" density="minimal" />
      <Ring className="w-24 h-24 right-[8%] top-16 hidden md:block" animate="animate-float" parallax={0.1} />
      <Diamond className="w-3 h-3 left-[8%] bottom-24 hidden md:block" animate="animate-bob-y" parallax={0.06} />

      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.testimonial.tagline')}
            title={t('home.testimonial.title')}
            description={t('home.testimonial.description')}
            accent
          />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={150}>
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-slider pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="h-full bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-10 h-10 text-accent/30" aria-hidden="true" />
                    <SampleTag />
                  </div>
                  <p className="text-secondary leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-secondary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </div>
    </section>
  )
}
