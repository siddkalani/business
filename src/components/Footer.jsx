import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <section
                    className="footer-section"
                    id="footer-cities"
                >
                    <div className="wrapper">
                        <ul className="city-list">
                            <li className="city-list__single">
                                <a href="#/locations/boston/">
                                    India{' '}
                                </a>
                            </li>



                            <li className="city-list__single">
                                <a href="#/locations/cleveland/">
                                    China{' '}
                                </a>
                            </li>
                            <li className="city-list__single">
                                <a href="#/locations/columbus/">
                                    Nepal{' '}
                                </a>
                            </li>
                            <li className="city-list__single">
                                <a href="#/locations/detroit/">
                                    Spain{' '}
                                </a>
                            </li>
                            <li className="city-list__single">
                                <a href="#/locations/india/">
                                    Russia{' '}
                                </a>
                            </li>

                        </ul>
                    </div>
                </section>
                <section
                    className="footer-section"
                    id="footer-links"
                >
                    <div className="wrapper">
                        <div className="row">
                            <div className="logo">

                                <div className="row">
                                    <div className="text">
                                        Join other people and get the latest updates on business, technology and digital                                to help improve your business.{' '}
                                    </div>
                                    <div className="button-wrap">
                                        <a
                                            className="button"
                                            href="#/sign-up-for-newsletter/"
                                        >
                                            Get in touch{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <nav className="menus">
                                <div className="row">
                                    <div className="footer-menu-wrap">
                                        <span className="footer-menu--title">
                                            Home
                                        </span>
                                        <div
                                            className="menu-footer-menu-one-container"
                                            id="footer-menu-one"
                                        >
                                            <ul
                                                className="menu"
                                                id="menu-footer-menu-one"
                                            >
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-8261 current_page_item menu-item-14902"
                                                    id="menu-item-14902"
                                                >
                                                    <Link
                                                        aria-current="page"
                                                        data-ps2id-api="true"
                                                        // href="#/business-consulting/"
                                                        to='/services'
                                                    >
                                                        Services
                                                    </Link>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14905"
                                                    id="menu-item-14905"
                                                >
                                                    <Link
                                                        data-ps2id-api="true"
                                                        // href="#/technology-solutions/"
                                                        to='/industries'
                                                    >
                                                        Industries
                                                    </Link>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20320"
                                                    id="menu-item-20320"
                                                >
                                                    <Link
                                                        data-ps2id-api="true"
                                                        // href="#/digital-transformation-consulting/"
                                                        to='/about'
                                                    >
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14904"
                                                    id="menu-item-14904"
                                                >
                                                    <Link to=''
                                                        data-ps2id-api="true"
                                                        href="#/industries/"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-menu-wrap">
                                        <span className="footer-menu--title">
                                            Insights
                                        </span>
                                        <div
                                            className="menu-footer-menu-two-container"
                                            id="footer-menu-two"
                                        >
                                            <ul
                                                className="menu"
                                                id="menu-footer-menu-two"
                                            >
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20325"
                                                    id="menu-item-20325"
                                                >
                                                    <a
                                                        data-ps2id-api="true"
                                                        href="#/blog/"
                                                    >
                                                        Insights
                                                    </a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type_archive menu-item-object-case-studies menu-item-20323"
                                                    id="menu-item-20323"
                                                >
                                                    <a
                                                        data-ps2id-api="true"
                                                        href="#/client-stories/"
                                                    >
                                                        Client Stories
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-menu-wrap">
                                        <span className="footer-menu--title">
                                            Company
                                        </span>
                                        <div
                                            className="menu-footer-menu-three-container"
                                            id="footer-menu-three"
                                        >
                                            <ul
                                                className="menu"
                                                id="menu-footer-menu-three"
                                            >
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14908"
                                                    id="menu-item-14908"
                                                >
                                                    <a
                                                        data-ps2id-api="true"
                                                        href="#/about-us/careers/"
                                                    >
                                                        Careers
                                                    </a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7982"
                                                    id="menu-item-7982"
                                                >
                                                    <a
                                                        data-ps2id-api="true"
                                                        href="#/news-and-events/"
                                                    >
                                                        News & Events
                                                    </a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-21847"
                                                    id="menu-item-21847"
                                                >
                                                    <a
                                                        data-ps2id-api="true"
                                                        href="#/locations/"
                                                    >
                                                        Locations
                                                    </a>
                                                </li>
                                                <li
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14910"
                                                    id="menu-item-14910"
                                                >
                                                    <a
                                                        data-ps2id-api="true"
                                                        href="#/contact/"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="social-media footer-menu-wrap">
                                        <span className="footer-menu--title">
                                            Follow Us
                                        </span>
                                        <ul>
                                            <li>
                                                <a
                                                    href="#"
                                                // target="_blank"
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className="icon"
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            className="fa fa-classic fa-brands fa-facebook-square"
                                                        />
                                                    </span>
                                                    <span className="name">
                                                        Facebook
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                // target="_blank"
                                                >
                                                    <span className="x-icon">
                                                        <svg
                                                            color="currentColor"
                                                            height="300pt"
                                                            preserveAspectRatio="xMidYMid meet"
                                                            viewBox="0 0 300 300"
                                                            width="300pt"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="m33 2953c19-27 274-390 567-808s541-772 552-787l19-28-573-652c-316-359-577-659-582-665-6-10 21-13 122-13h129l509 579c279 319 511 578 515 575 4-2 188-263 410-579l404-575h442c244 0 443 3 443 6s-268 388-596 856c-328 467-597 856-598 863 0 7 233 280 520 607 286 326 535 610 553 631l33 37-133-1h-134l-480-549c-264-302-482-549-485-549-3-1-178 246-390 549l-385 549-448 1h-449zm1663-1450c509-713 928-1303 931-1310 4-10-34-13-194-13h-200l-929 1302c-511 716-930 1305-932 1310-2 4 87 8 197 8h200z"
                                                                transform="matrix(.1 0 0 -.1 0 300)"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="name">
                                                        Twitter
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                // target="_blank"
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className="icon"
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            className="fa fa-classic fa-brands fa-linkedin"
                                                        />
                                                    </span>
                                                    <span className="name">
                                                        Linkedin
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                // target="_blank"
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className="icon"
                                                    >
                                                        <i
                                                            aria-hidden="true"
                                                            className="fa fa-classic fa-brands fa-instagram"
                                                        />
                                                    </span>
                                                    <span className="name">
                                                        Instagram
                                                    </span>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            <div className="tag">
                                Unmatched Experiences{' '}
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="footer-section"
                    id="footer-copyright"
                >
                    <div className="wrapper">
                        <div className="copyright">
                            <p>
                                © 2024 A&K
                            </p>
                        </div>
                        <div className="copyright-menu-wrap">
                            <div
                                className="menu-copyright-menu-container"
                                id="copyright-menu"
                            >
                                <ul
                                    className="menu"
                                    id="menu-copyright-menu"
                                >
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14918"
                                        id="menu-item-14918"
                                    >
                                        <a
                                            data-ps2id-api="true"
                                            href="#/privacy-policy/"
                                        >
                                            Privacy                                    Policy
                                        </a>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-14917"
                                        id="menu-item-14917"
                                    >
                                        <a
                                            data-ps2id-api="true"
                                            href="#/terms-of-use/"
                                        >
                                            Terms of                                    Use
                                        </a>
                                    </li>
                                    <li
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23083"
                                        id="menu-item-23083"
                                    >
                                        <a
                                            data-ps2id-api="true"
                                            href="#/site-feedback/"
                                        >
                                            Site                                    Feedback
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer