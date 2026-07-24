import Link from "next/link"

// LEGACY menu — mirrors the active <Header /> structure so any future
// re-introduction of this component (e.g. a themable template variant)
// stays in sync. The "Services & Solutions" dropdown now carries only
// the three core services plus the renamed "Work approach" — overlapping
// product tiles were removed to deduplicate against /products.
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
                    <Link href="services">Services &amp; Solutions
                        <span className="main-menu-border"></span>
                    </Link>
                    <ul>
                        <li><Link href="services">All Services</Link></li>
                        <li><Link href="services/metal-scrap-trading">Metal Scrap Trading</Link></li>
                        <li><Link href="services/heavy-equipment">Heavy Equipment &amp; Industrial Machinery</Link></li>
                        <li><Link href="services/international-sourcing">International Sourcing &amp; Procurement</Link></li>
                        <li><Link href="how-we-work">Work approach</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="industries">Industries
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
