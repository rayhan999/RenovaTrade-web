
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
        {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src="assets/images/blog/blog-details-img-1.jpg" alt=""/>
                            </div>
                            <div className="blog-details__content">
                                <ul className="blog-details__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-user"></span>Admin</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <h3 className="blog-details__title">Basic rules of running best Marketing Services</h3>
                                <p className="blog-details__text-1">There’re many variation of passages of Lorem Ipsum
                                    available, but the majority have suffer alteration in
                                    some form, by injected humour, or randomised word which don't look even slightly
                                    believable. If you’re
                                    going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                                    embarrassing hidden
                                    in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                                    predefined chunks
                                    as necessary, making this the first true generator on the Internet. It uses a
                                    dictionary of over 200 Latin
                                    words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                                    which looks
                                    reasonable. The generated Lorem Ipsum is therefore always free from repetition,
                                    injected humour, or
                                    non-characteristic words etc.</p>
                                <p className="blog-details__text-2">It is a long established fact that a reader will be
                                    distracted by the readable content of a page when
                                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                    normal distribution
                                    of letters, as opposed to using 'Content here, content here', making it look like
                                    readable English. Many
                                    desktop publishing packages and web page editors now use Lorem Ipsum as their
                                    default model text,
                                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    Various versions have
                                    evolved over the years, sometimes by accident, sometimes on purpose injected humour
                                    and the like.</p>
                            </div>
                            <div className="blog-details__comment-box">
                                <h3 className="blog-details__comment-title-top">2 Comments</h3>
                                <div className="blog-details__comment">
                                    <div className="blog-details__comment-single">
                                        <div className="blog-details__comment-img">
                                            <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="blog-details__single-content">
                                            <h3 className="blog-details__comment-title">Robert Jonson</h3>
                                            <p className="blog-details__comment-text">Lorem Ipsum is simply dummy text
                                                of the printing
                                                <br/> and typesetting industry.</p>
                                            <div className="blog-details__comment-btn-box">
                                                <Link href="#" className="blog-details__comment-btn thm-btn">Reply More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-details__comment-single">
                                        <div className="blog-details__comment-img">
                                            <img src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="blog-details__single-content">
                                            <h3 className="blog-details__comment-title">Robert Jonson</h3>
                                            <p className="blog-details__comment-text">Lorem Ipsum is simply dummy text
                                                of the printing
                                                <br/> and typesetting industry.</p>
                                            <div className="blog-details__comment-btn-box">
                                                <Link href="#" className="blog-details__comment-btn thm-btn">Reply More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search Here"/>
                                    <button type="submit"><i className="icon-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Latest Posts</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3><Link href="blog-details">Experiences That Connect
                                                    With People</Link></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3><Link href="blog-details">We Build and Active Brands
                                                    Insight</Link></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3><Link href="blog-details">A Deep Understanding Of
                                                    Our Audience</Link></h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Categories</h3>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li><Link href="blog-details">Business<span className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li><Link href="blog-details">Introductions<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li><Link href="blog-details">One Page Template<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li><Link href="blog-details">Parallax Effects<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li><Link href="blog-details">Technologies<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li><Link href="blog-details">Video Backgrounds<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Tags</h3>
                                <div className="sidebar__tags-list">
                                    <Link href="#">Business,</Link>
                                    <Link href="#">Agency,</Link>
                                    <Link href="#">Technology,</Link>
                                    <Link href="#">Parallax,</Link>
                                    <Link href="#">Innovative,</Link>
                                    <Link href="#">Professional,</Link>
                                    <Link href="#">Experience,</Link>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__comments">
                                <h3 className="sidebar__title">Comments</h3>
                                <ul className="sidebar__comments-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-comment"></span>
                                        </div>
                                        <p>A Wordpress Commenter on
                                            Launch New Mobile App</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-comment"></span>
                                        </div>
                                        <p>Robert Jonson on Template: <span>Comments</span></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-comment"></span>
                                        </div>
                                        <p>A Wordpress Commenter on
                                            Launch New Mobile App</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-comment"></span>
                                        </div>
                                        <p>Jessica Brown on Template: <span>Comments</span></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog Details End*/}


        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="cta-one__inner">
                        <h3 className="cta-one__title">Let's discuss about how we can help
                            <br/> make your business better</h3>
                        <div className="cta-one__btn-box">
                            <Link href="about" className="cta-one__btn thm-btn">Let's Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}

            </Layout>
        </>
    )
}