'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Contact() {
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
        {/*Contact One Start*/}
        <section className="contact-one">
            <div className="contact-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/contact_form.jpg)' }} >
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="contact-one__from-shape-1">
                                <img src="assets/images/shapes/contact-one-form-shape-1.png" alt=""/>
                            </div>
                            <form className="contact-form-validated contact-one__form"
                                method="post" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="username" placeholder="Your Name" required/>
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-people"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="email" name="email" placeholder="Email Address" required/>
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-open-mail"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="phone" placeholder="Phone Number" required/>
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="company" placeholder="Company Name" /><div className="contact-one__input-box-icon">
                                                <span className="fa fa-building"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="subject" placeholder="Subject" required/>
                                            {/* <div className="contact-one__input-box-icon">
                                                <span className="icon-phone-call"></span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <textarea name="query" placeholder="Your Query" required rows={5} className="form-control" />
                                            {/* <div className="contact-one__input-box-icon">
                                                <span className="icon-phone-call"></span>
                                            </div> */}
                                        </div>
                                    </div>
                                    {/* <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-edit"></span>
                                            </div>
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select Subject">Subject</option>
                                                    <option>Select Subject 01</option>
                                                    <option>Select Subject 02</option>
                                                    <option>Select Subject 03</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-xl-12">
                                        <div className="contact-one__btn-box">
                                            <button type="submit" className="thm-btn contact-one__btn" disabled={loading}>{loading ? 'Sending...' : 'Submit Now'}</button>
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
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact-one__right">
                            <div className="contact-one__video-link wow zoomIn" data-wow-delay="100ms"
                                data-wow-duration="3500ms">
                                {/* <Link href="#" className="video-popup">
                                    <div className="contact-one__video-icon">
                                        <span className="icon-play-button"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </Link> */}
                                <h4 className="contact-one__video-text">Let's discuss about how we can help to

                                   make your business better</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact One End*/}
        </>
    )
}
