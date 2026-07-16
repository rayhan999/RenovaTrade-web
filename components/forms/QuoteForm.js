'use client'

import { useState } from "react"
import { Recycle, Forklift, Cog, Search, ArrowLeft, ArrowRight, Send, CheckCircle2 } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function QuoteForm() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const reducedMotion = useReducedMotion()
  const { t } = useLanguage()

  const CATEGORIES = [
    { id: t('quote.step0.metalScrap'), icon: Recycle, text: t('quote.step0.metalScrap.desc') },
    { id: t('quote.step0.heavyEquipment'), icon: Forklift, text: t('quote.step0.heavyEquipment.desc') },
    { id: t('quote.step0.industrialMachinery'), icon: Cog, text: t('quote.step0.industrialMachinery.desc') },
    { id: t('quote.step0.customSourcing'), icon: Search, text: t('quote.step0.customSourcing.desc') },
  ]

  const INCOTERMS = ["FOB", "CFR", "CIF", t('common.error')]
  const STEPS = [t('quote.steps.category'), t('quote.steps.requirements'), t('quote.steps.contact')]

  const [data, setData] = useState({
    category: "",
    details: "",
    quantity: "",
    destination: "",
    incoterm: "FOB",
    timeline: "",
    name: "",
    company: "",
    email: "",
    phone: "",
  })

  const set = (key) => (e) => {
    const value = typeof e === "string" ? e : e.target.value
    setData((d) => ({ ...d, [key]: value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const validateStep = () => {
    const er = {}
    if (step === 0 && !data.category) er.category = t('quote.step0.error')
    if (step === 1) {
      if (!data.details.trim()) er.details = t('quote.step1.details.error')
      if (!data.destination.trim()) er.destination = t('quote.step1.destination.error')
    }
    if (step === 2) {
      if (!data.name.trim()) er.name = t('quote.step2.name.error')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) er.email = t('quote.step2.email.error')
      if (!data.phone.trim()) er.phone = t('quote.step2.phone.error')
    }
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const next = () => {
    if (!validateStep()) return
    setDirection(1)
    setStep((s) => Math.min(s + 1, 2))
  }

  const back = () => {
    setDirection(-1)
    setErrors({})
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validateStep()) return
    setLoading(true)
    setStatus(null)
    const payload = {
      username: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      subject: `Quote request — ${data.category}`,
      query: [
        `QUOTE REQUEST`,
        `Category: ${data.category}`,
        `Requirement: ${data.details}`,
        data.quantity && `Quantity / volume: ${data.quantity}`,
        `Destination: ${data.destination}`,
        `Preferred Incoterm: ${data.incoterm}`,
        data.timeline && `Target timeline: ${data.timeline}`,
      ].filter(Boolean).join("\n"),
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus({ type: "success" })
      } else {
        setStatus({ type: "error", message: json.error || t('quote.error.default') })
      }
    } catch (err) {
      setStatus({ type: "error", message: err.message || t('quote.error.default') })
    } finally {
      setLoading(false)
    }
  }

  if (status?.type === "success") {
    return (
      <div className="bg-surface rounded-2xl p-10 md:p-14 shadow-depth-lg text-center" role="status">
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-5" aria-hidden="true" />
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">{t('quote.success.title')}</h2>
        <p className="mt-3 text-secondary max-w-md mx-auto leading-relaxed">
          {t('quote.success.text', { name: data.name.split(" ")[0] })}
        </p>
      </div>
    )
  }

  const transitionClass = reducedMotion
    ? ""
    : "transition-all duration-300 ease-out"

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-surface rounded-2xl p-6 md:p-10 shadow-depth-lg">
      {/* Progress indicator */}
      <div className="mb-8">
        <ol className="flex items-center justify-between" aria-label="Form progress">
          {STEPS.map((label, i) => (
            <li key={label} className="flex-1 flex items-center gap-2 last:flex-none">
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 flex-shrink-0 ${
                  i < step
                    ? "bg-accent border-accent text-white"
                    : i === step
                      ? "border-accent text-accent bg-accent/5"
                      : "border-border text-secondary/60 bg-background"
                }`}
                aria-current={i === step ? "step" : undefined}
              >
                {i < step ? <CheckCircle2 className="w-5 h-5" aria-hidden="true" /> : i + 1}
              </span>
              <span className={`hidden sm:block text-sm font-medium ${i === step ? "text-primary" : "text-secondary/70"}`}>
                {label}
              </span>
              {i < STEPS.length - 1 && (
                <span className="flex-1 h-0.5 mx-2 bg-border relative overflow-hidden rounded" aria-hidden="true">
                  <span
                    className={`absolute inset-0 bg-accent origin-left ${transitionClass}`}
                    style={{ transform: `scaleX(${i < step ? 1 : 0})` }}
                  />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Step panels */}
      <div className="relative overflow-hidden">
        <div
          key={step}
          className={reducedMotion ? "" : `animate-none ${direction > 0 ? "quote-step-in-right" : "quote-step-in-left"}`}
          style={
            reducedMotion
              ? undefined
              : { animation: `${direction > 0 ? "quoteInRight" : "quoteInLeft"} 300ms ease-out both` }
          }
        >
          <style>{`
            @keyframes quoteInRight { from { opacity: 0; transform: translateX(2rem); } to { opacity: 1; transform: translateX(0); } }
            @keyframes quoteInLeft { from { opacity: 0; transform: translateX(-2rem); } to { opacity: 1; transform: translateX(0); } }
          `}</style>

          {step === 0 && (
            <fieldset>
              <legend className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                {t('quote.step0.legend')}
              </legend>
              <p className="text-secondary text-sm mb-6">{t('quote.step0.hint')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CATEGORIES.map((cat) => {
                  const selected = data.category === cat.id
                  return (
                    <label
                      key={cat.id}
                      className={`flex items-start gap-4 rounded-2xl border-2 p-5 cursor-pointer transition-all duration-200 ${
                        selected
                          ? "border-accent bg-accent/5 shadow-md"
                          : "border-border bg-background hover:border-secondary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={cat.id}
                        checked={selected}
                        onChange={() => set("category")(cat.id)}
                        className="sr-only"
                      />
                      <span className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${selected ? "bg-accent text-white" : "bg-primary/5 text-primary"}`}>
                        <cat.icon className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className={`block font-heading font-semibold ${selected ? "text-accent" : "text-primary"}`}>{cat.id}</span>
                        <span className="block text-sm text-secondary mt-0.5">{cat.text}</span>
                      </span>
                    </label>
                  )
                })}
              </div>
              {errors.category && <p className="mt-3 text-sm text-destructive" role="alert">{errors.category}</p>}
            </fieldset>
          )}

          {step === 1 && (
            <fieldset>
              <legend className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                {t('quote.step1.legend')}
              </legend>
              <p className="text-secondary text-sm mb-6">{t('quote.step1.hint')}</p>
              <div className="space-y-5">
                <div>
                  <label htmlFor="quote-details" className="block text-sm font-medium text-primary mb-1.5">
                    {t('quote.step1.details.label')} <span className="text-destructive" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="quote-details"
                    rows={4}
                    value={data.details}
                    onChange={set("details")}
                    placeholder={t('quote.step1.details.placeholder')}
                    className={`input resize-none ${errors.details ? "border-destructive" : ""}`}
                    aria-invalid={!!errors.details}
                    aria-describedby={errors.details ? "quote-details-error" : undefined}
                  />
                  {errors.details && <p id="quote-details-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.details}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-quantity" className="block text-sm font-medium text-primary mb-1.5">{t('quote.step1.quantity.label')}</label>
                    <input
                      id="quote-quantity"
                      type="text"
                      value={data.quantity}
                      onChange={set("quantity")}
                      placeholder={t('quote.step1.quantity.placeholder')}
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-destination" className="block text-sm font-medium text-primary mb-1.5">
                      {t('quote.step1.destination.label')} <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-destination"
                      type="text"
                      value={data.destination}
                      onChange={set("destination")}
                      placeholder={t('quote.step1.destination.placeholder')}
                      className={`input ${errors.destination ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.destination}
                      aria-describedby={errors.destination ? "quote-destination-error" : undefined}
                    />
                    {errors.destination && <p id="quote-destination-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.destination}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-incoterm" className="block text-sm font-medium text-primary mb-1.5">{t('quote.step1.incoterm.label')}</label>
                    <select id="quote-incoterm" value={data.incoterm} onChange={set("incoterm")} className="input cursor-pointer">
                      {INCOTERMS.map((term) => <option key={term} value={term}>{term}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-timeline" className="block text-sm font-medium text-primary mb-1.5">{t('quote.step1.timeline.label')}</label>
                    <input
                      id="quote-timeline"
                      type="text"
                      value={data.timeline}
                      onChange={set("timeline")}
                      placeholder={t('quote.step1.timeline.placeholder')}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="text-xl md:text-2xl font-heading font-bold text-primary mb-2">
                {t('quote.step2.legend')}
              </legend>
              <p className="text-secondary text-sm mb-6">{t('quote.step2.hint')}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-name" className="block text-sm font-medium text-primary mb-1.5">
                      {t('quote.step2.name.label')} <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      autoComplete="name"
                      value={data.name}
                      onChange={set("name")}
                      className={`input ${errors.name ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "quote-name-error" : undefined}
                    />
                    {errors.name && <p id="quote-name-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote-company" className="block text-sm font-medium text-primary mb-1.5">{t('quote.step2.company.label')}</label>
                    <input
                      id="quote-company"
                      type="text"
                      autoComplete="organization"
                      value={data.company}
                      onChange={set("company")}
                      className="input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="quote-email" className="block text-sm font-medium text-primary mb-1.5">
                      {t('quote.step2.email.label')} <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      autoComplete="email"
                      value={data.email}
                      onChange={set("email")}
                      className={`input ${errors.email ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "quote-email-error" : undefined}
                    />
                    {errors.email && <p id="quote-email-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-sm font-medium text-primary mb-1.5">
                      {t('quote.step2.phone.label')} <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      autoComplete="tel"
                      value={data.phone}
                      onChange={set("phone")}
                      placeholder={t('quote.step2.phone.placeholder')}
                      className={`input ${errors.phone ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                    />
                    {errors.phone && <p id="quote-phone-error" className="mt-1.5 text-sm text-destructive" role="alert">{errors.phone}</p>}
                  </div>
                </div>

                <div className="bg-background border border-border rounded-xl p-4 text-sm text-secondary">
                  <span className="font-semibold text-primary">{t('quote.step2.summary')}</span>{" "}
                  {data.category} — {data.details.slice(0, 120)}{data.details.length > 120 ? "…" : ""} → {data.destination} ({data.incoterm})
                </div>
              </div>
            </fieldset>
          )}
        </div>
      </div>

      {status?.type === "error" && (
        <div className="mt-6 p-4 rounded-lg text-sm bg-red-50 text-red-800 border border-red-200" role="alert" aria-live="polite">
          {status.message}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-colors cursor-pointer ${
            step === 0 ? "opacity-0 pointer-events-none" : "text-secondary hover:text-primary hover:bg-muted"
          }`}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          {t('quote.back')}
        </button>
        {step < 2 ? (
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark hover:shadow-accent-glow transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            {t('quote.continue')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark hover:shadow-accent-glow transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
          >
            {loading ? t('quote.submitting') : t('quote.submit')}
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </form>
  )
}
