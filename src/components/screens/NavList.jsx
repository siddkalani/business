import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavList({ label, path }) {
    return (
        <li className="custom-menu menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item current_page_item menu-item-has-children dropdown"> 
            <NavLink
                to={path}
                className="nav-link"
                // activeClassName="active"
                // aria-expanded="false"
                // aria-haspopup="true"
                role="button"
                tabIndex="0"
                data-toggle="dropdown"
            >
                {label}
            </NavLink>
        </li>
    )
}
