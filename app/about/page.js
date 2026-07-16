'use client'

import PageHeader from "@/components/shell/PageHeader"
import { Check, ArrowRight, Shield, Globe, HeadphonesIcon } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import Button from "@/components/ui/Button"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Credibility from "@/components/sections/about/Credibility"
import Sustainability from "@/components/sections/home1/Sustainability"
import Cta from "@/components/sections/home1/Cta"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function AboutPage() {
    const { t } = useLanguage()
    const values = [
        { icon: Shield, title: t('page.about.values.transparency.title'), text: t('page.about.values.transparency.text') },
        { icon: Globe, title: t('page.about.values.global.title'), text: t('page.about.values.global.text') },
        { icon: HeadphonesIcon, title: t('page.about.values.communication.title'), text: t('page.about.values.communication.text') },
    ]
    const points = [
        t('home.about.point1'),
        t('home.about.point2'),
        t('home.about.point3'),
    ]

    return (
        <>
        <PageHeader title={t('nav.about')} breadcrumbs={[{ label: t('nav.about') }]} />
            <section className="section-padding bg-background">
                <div className="container-renova">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <AnimatedSection animation="fade-left" className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="/assets/images/resources/about_us.jpg"
                                    alt="Renova Trade industrial operations"
                                    className="w-full h-[400px] md:h-[500px] object-cover"
                                />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-right" delay={150} className="lg:pl-8">
                            <SectionTitle
                                tagline={t('home.about.tagline')}
                                title={t('home.about.title')}
                                align="left"
                                className="mb-8"
                            />
                            <p className="text-secondary leading-relaxed mb-6">
                                {t('home.about.body')}
                            </p>
                            <p className="text-secondary leading-relaxed mb-6">
                                {t('home.about.description')}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {points.map((point) => (
                                    <li key={point} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                                        </div>
                                        <span className="text-primary font-medium">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button href="/services" variant="primary">
                                    {t('home.service.title')}
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </Button>
                                <Button href="/contact" variant="secondary">
                                    {t('nav.contact')}
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-surface">
                <div className="container-renova">
                    <AnimatedSection animation="fade-up">
                        <SectionTitle
                            tagline={t('home.service.tagline')}
                            title={t('home.service.title')}
                            description={t('home.service.description')}
                        />
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <AnimatedSection
                                key={value.title}
                                animation="fade-up"
                                delay={index * 100}
                            >
                                <div className="bg-background rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                                        <value.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        {value.text}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <Credibility />
            <Sustainability />
            <Cta />
        </>
    )
}
