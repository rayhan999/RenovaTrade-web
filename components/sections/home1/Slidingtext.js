'use client'
import Link from "next/link"
export default function Slidingtext() {
    return (
        <>
        {/*Sliding Text Start*/}
        <section className="sliding-text">
            <div className="sliding-text__inner" style={{alignItems:'center', display:'flex', justifyContent:'center'}}>
                <ul className="sliding-text__list marquee_mode-1 list-unstyled">
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Environmentally friendly</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Fully accredited</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Quick payments </p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Top prices paid</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Quality optimization</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Contamination checks</p>
                    </li>
                </ul>
            </div>
        </section>
        {/*Sliding Text End*/}
        
            
        </>
    )
}
