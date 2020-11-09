import React from 'react'
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {

    const [isActive, setisActive] = React.useState(false);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a
                    onClick={() => {
                    setisActive(!isActive);
                    }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >
                <div className="navbar-start">
                    <Link className="navbar-item" to="/randomquote">Random Quote</Link>
                    <Link className="navbar-item" to="/yellinggreeting">Yelling Greeting</Link>
                    <Link className="navbar-item" to="/comment">Comment</Link>
                    <Link className="navbar-item" to="/bitcointracker">Bitcoin Tracker</Link>
                    <Link className="navbar-item" to="/hooks">Hooks</Link>
                    <Link className="navbar-item" to="/calculator">Calculator</Link>
                    <Link className="navbar-item" to="/currencyconverter">Currency Converter</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
