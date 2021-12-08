import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand text-dark" to="/">Rick & Morty APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link  text-dark btn btn-outline-primary" to="/">CHARACTERS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark btn btn-outline-primary" to="/episode">EPISODE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark btn btn-outline-primary" to="/location">LOCATION</Link>
                        </li>
                    </ul>
                    {/*  <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                </div>
            </div>
        </nav>
    )
}

export default Nav;
