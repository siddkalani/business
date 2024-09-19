import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavList from './NavList';

export default function NavBar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu open/closed
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <nav
            className="navbar navbar-default"
            role="navigation"
        >


            <span className="menu-button" onClick={toggleMenu}>
                &#9776; 
            </span>

            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <span className="close-button" onClick={toggleMenu}>
                    &times; 
                </span>

                <ul className="nav-list" onClick={toggleMenu}>
                    <NavList label="Home" path="/" />
                    <NavList label="Services" path="/services" />
                    <NavList label="Industries" path="/industries" />
                    <li className="menu-item custom-menu">
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                    </li>
                </ul>
            </div>


            <div id="primary-navigation">
                <ul className="nav navbar-nav" id="menu-mega-menu">
                    <NavList label="Home" path="/" />
                    <NavList label="Services" path="/services" />
                    <NavList label="Industries" path="/industries" />
                    {/* <NavList label="About" path="/about" /> */}

                    {/* Contact Us button */}
                    <li className="btn btn-primary menu-item menu-item-type-post_type menu-item-object-page">
                        <NavLink
                            to="/about"
                            className=""
                        // activeClassName="active"
                        // target="_self"
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
