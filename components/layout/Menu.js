import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                <li>
                    <Link href="about">About Us
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                <li className="dropdown">
                    <Link href="services">Services
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="services">All Services</Link></li>
                        <li><Link href="services/metal-scrap-trading">Metal Scrap Trading</Link></li>
                        <li><Link href="services/heavy-equipment">Heavy Equipment & Industrial Machinery</Link></li>
                        <li><Link href="services/international-sourcing">International Sourcing & Procurement</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="products">Products
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                <li>
                    <Link href="blog">Blog
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
                <li>
                    <Link href="contact">Contact Us
                        <span className="main-menu-border"></span>
                    </Link>
                </li>
            </ul>
        </>
    )
}
