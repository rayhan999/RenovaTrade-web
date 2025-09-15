import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>


        {/*Page Header Start*/}
        <section className="page-header">
            <div className="page-header__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/breadcrumb_bg.jpg)' }} >
            </div>
            <div className="page-header__shape-bg"
                style={{ backgroundImage: ' url(assets/images/shapes/page-header-shape-bg.png)' }} ></div>
            <div className="page-header__shape-1 float-bob-y">
                <img src="assets/images/shapes/page-header-shape-1.png" alt=""/>
            </div>
            <div className="page-header__shape-2 img-bounce">
                <img src="assets/images/shapes/page-header-shape-2.png" alt=""/>
            </div>
            <div className="page-header__shape-3 float-bob-x">
                <img src="assets/images/shapes/page-header-shape-3_new.png" alt=""/>
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <div className="thm-breadcrumb__box">
                        <div className="thm-breadcrumb__icon">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link href="/">Home</Link></li>
                            <li><span>-</span></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                    <h2>{breadcrumbTitle}</h2>
                </div>
            </div>
        </section>
        {/*Page Header End*/}
      

        </>
    )
}
