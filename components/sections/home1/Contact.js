'use client'

import { useState } from "react"
import Link from "next/link"
import { Send, Phone, Mail, MapPin, FileText, ArrowRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import { PHONE, EMAIL, ADDRESS } from "@/lib/constants"

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const { t } = useLanguage()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      username: fd.get("username") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      company: fd.get("company") || "",
      subject: fd.get("subject") || "",
      query: fd.get("query") || "",
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus({ type: "success", message: t('contact.success') })
        form.reset()
      } else {
        setStatus({ type: "error", message: json.error || t('contact.error') })
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message || t('contact.error') })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/contact_form.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" aria-hidden="true" />

      <div className="relative container-renova">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Form */}
          <AnimatedSection animation="fade-left" className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <SectionTitle
              tagline={t('contact.tagline')}
              title={t('contact.title')}
              align="left"
              className="mb-8"
            />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="sr-only">{t('contact.name.placeholder')}</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="username"
                    placeholder={t('contact.name.placeholder')}
                    required
                    className="input"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">{t('contact.email.placeholder')}</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder={t('contact.email.placeholder')}
                    required
                    className="input"
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="sr-only">{t('contact.phone.placeholder')}</label>
                  <input
                    id="contact-phone"
                    type="text"
                    name="phone"
                    placeholder={t('contact.phone.placeholder')}
                    required
                    className="input"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="sr-only">{t('contact.company.placeholder')}</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder={t('contact.company.placeholder')}
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="sr-only">{t('contact.subject.placeholder')}</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder={t('contact.subject.placeholder')}
                  required
                  className="input"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="contact-query" className="sr-only">{t('contact.message.placeholder')}</label>
                <textarea
                  id="contact-query"
                  name="query"
                  placeholder={t('contact.message.placeholder')}
                  required
                  rows={5}
                  className="input resize-none"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                {loading ? t('common.sending') : t('contact.submit')}
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
              {status && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}
            </form>
          </AnimatedSection>

          {/* Right: Info */}
          <AnimatedSection animation="fade-right" delay={150} className="text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {t('contact.h2')}
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t('contact.body')}
            </p>
            <div className="space-y-5">
              <a href={`tel:${PHONE.replace(/-/g, '')}`} className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t('contact.call')}</div>
                  <div className="font-semibold">{PHONE}</div>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-white/90 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t('contact.emailLabel')}</div>
                  <div className="font-semibold">{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-white/60">{t('contact.visit')}</div>
                  <div className="font-semibold">{ADDRESS}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-accent-light" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white">{t('contact.needPrice')}</h3>
                  <p className="mt-1 text-sm text-white/70">
                    {t('contact.needPrice.text')}
                  </p>
                  <Link href="/quote" className="mt-3 inline-flex items-center gap-2 text-accent-light font-semibold text-sm link-draw">
                    {t('common.requestQuote')}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
