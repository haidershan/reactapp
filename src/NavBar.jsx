import React from 'react'

const NavBar = () => {
    return (
        <>
            {/* MENU */}
            <nav className="navbar navbar-expand-sm navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="index.html" style={{color:'white'}}><i className="uil uil-user" /> Haider</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        <span className="navbar-toggler-icon" />
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a href="#about" className="nav-link"><span data-hover="About">About</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#project" className="nav-link"><span data-hover="Projects">Projects</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#Team" className="nav-link"><span data-hover="Team">Team</span></a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link"><span data-hover="Contact">Contact</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
