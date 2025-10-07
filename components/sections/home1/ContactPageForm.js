'use client'
import { useState } from 'react'

export default function ContactPageForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      username: fd.get('username') || '',
      email: fd.get('email') || '',
      phone: fd.get('phone') || '',
      company: fd.get('company') || '',
      subject: fd.get('subject') || '',
      query: fd.get('query') || '',
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully.' })
        form.reset()
      } else {
        setStatus({ type: 'error', message: json.error || 'Failed to send message.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Failed to send message.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form className="contact-form-validated contact-two__form" method="post" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="contact-two__input-box">
              <input type="text" name="username" placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-two__input-box">
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-two__input-box">
              <input type="text" name="phone" placeholder="Phone Number" required />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-two__input-box">
              <input type="text" name="company" placeholder="Company Name" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-two__input-box">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="contact-one__input-box">
              <textarea name="query" placeholder="Your Query" required rows={5} className="form-control" />
            </div>
          </div>
          <div className="col-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <div className="contact-two__btn-box" style={{ textAlign: 'center' }}>
              <button type="submit" className="thm-btn contact-two__btn" disabled={loading}>{loading ? 'Sending...' : 'Submit Message'}</button>
            </div>
          </div>
        </div>
      </form>
      <div className="result">
        {status && (
          <div className={status.type === 'success' ? 'alert alert-success' : 'alert alert-danger'} role="alert">
            {status.message}
          </div>
        )}
      </div>
    </>
  )
}
