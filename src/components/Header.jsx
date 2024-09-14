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
                <div
                    aria-expanded="false"
                    className="collapse"
                    id="searchform"
                >
                    <form
                        action="#/"
                        className="searchform form-inline"
                        method="get"
                        role="search"
                    >
                        <div className="form-group">
                            <div className="container-fluid">
                                <label>
                                    <span className="sr-only">
                                        Search for:
                                    </span>
                                    <input
                                        className="form-control default"
                                        defaultValue=""
                                        id="s"
                                        name="s"
                                        placeholder="Search Site"
                                        type="text"
                                    />
                                </label>
                                <span className="input-group-btn">
                                    <button
                                        className="btn searchGo"
                                        type="submit"
                                    >
                                        <i className="fa fa-arrow-right" />
                                        <span className="sr-only">
                                            {' '}Enter your search keywords here...{' '}
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header