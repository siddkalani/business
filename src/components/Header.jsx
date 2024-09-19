import React from 'react'
import NavBar from './screens/NavBar'

const Header = () => {
    return (
        <>
            <header
                className="site-header"
                id="masthead"
                role="banner"
            >
                <NavBar/>
            </header>
        </>
    )
}

export default Header