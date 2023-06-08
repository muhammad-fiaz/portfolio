import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './../../assets/css/navbar.css'; // Import the custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <span>Muhammad Fiaz</span>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navcol-1"
                        aria-controls="navcol-1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navcol-1"> {/* Remove the center class */}
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="index.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about.html">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services.html">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="projects.html">
                                    Projects
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="contacts.html">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                        <div className="d-md-flex align-items-center mt-3 mt-md-0"> {/* Updated the class */}
                            <div className="search">
                                <input type="text" className="search-input" placeholder="Search" />
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            </div>
                            <div className="text-center mt-3 mt-md-0"> {/* Updated the class */}
                                <Button size="medium" variant="contained" className="signin ms-2 rounded-pill">
                                    Signin
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <header className="bg-primary-gradient"></header>
            <section></section>
            <section></section>
        </div>
    );
};

export default Navbar;
