// src/components/NavBar.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/NavBar.css'; // Corrected import path

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="aboutus.html">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="services.html">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contactus.html">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
