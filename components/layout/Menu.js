import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>
            <ul className="main-menu__list">
                {/* <li className="dropdown">
                    <Link href="/">Home
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="about">About</Link></li>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonials">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Services
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="digital-marketing">Digital Marketing</Link></li>
                        <li><Link href="ui-ux-designing">UI/UX Designing</Link></li>
                        <li><Link href="app-development">App Development</Link></li>
                        <li><Link href="graphic-designing">Graphic Designing</Link></li>
                        <li><Link href="website-development">Website Development</Link></li>
                        <li><Link href="seo-content-writting">SEO & Content Writting</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Projects
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="projects">Projects</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li> */}
                <li>
                    <Link href="">Home
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                <li>
                    <Link href="about">Who we are
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                 {/* <li className="dropdown">
                    <Link href="#">Misc
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="blog">Connect with us</Link></li>
                        <li><Link href="blog">History</Link></li>
                        <li><Link href="blog-details">By Laws</Link></li>
                        <li><Link href="blog-details">Covid19 Guidelines</Link></li>
                    </ul>
                </li> */}
                <li>
                    <Link href="services">Products
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                {/* <li>
                    <Link href="#">The Board
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                <li>
                    <Link href="#">NewsLetter
                        <span className="main-menu-border"></span>
                    </Link>
                </li> */}
                <li>
                    <Link href="contact">Contact Us
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
               
            </ul>
        </>
    )
}
