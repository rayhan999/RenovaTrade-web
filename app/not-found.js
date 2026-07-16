'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import { Home, FileText } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Error404() {
    const { t } = useLanguage()
    return (
        <>
        <PageHeader title={t('page.notFound.title')} breadcrumbs={[{ label: t('page.notFound.title') }]} />
            <section className="section-padding bg-background">
                <div className="container-renova">
                    <div className="max-w-xl mx-auto text-center">
                        <p className="text-7xl md:text-8xl font-heading font-bold text-primary/10 leading-none select-none" aria-hidden="true">
                            {t('page.notFound.code')}
                        </p>
                        <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-primary">
                            {t('page.notFound.title')}
                        </h2>
                        <p className="mt-4 text-secondary leading-relaxed">
                            {t('page.notFound.text')}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/" className="btn-primary">
                                <Home className="w-4 h-4" aria-hidden="true" />
                                {t('page.notFound.home')}
                            </Link>
                            <Link href="/quote" className="btn-secondary">
                                <FileText className="w-4 h-4" aria-hidden="true" />
                                {t('page.notFound.quote')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
