'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Video One Start*/}
        <section className="video-one">
            <div className="video-one__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/video-one-bg.jpg)' }} ></div>
            <div className="video-one__shape-1 float-bob-y-2">
                <img src="assets/images/shapes/video-one-shape-1.png" alt=""/>
            </div>
            <div className="video-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/video-one-shape-2.png" alt=""/>
            </div>
            <div className="video-one__shape-3 float-bob-x">
                <img src="assets/images/shapes/video-one-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="video-one__inner">
                    <div className="video-one__video-link">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="video-one__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                        <h4 className="video-one__video-text">Services That Lead Creative Agency
                            <br/> For Your <span>Growth Business</span></h4>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End*/}  
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
