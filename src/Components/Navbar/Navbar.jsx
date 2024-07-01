import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-md navbar-light py-3">
            <div className="container">

                <span className="fs-4 nav-shivam" style={{ fontWeight: 'bold', marginLeft: '8px' }}>
                    <i class="bi bi-emoji-smile-fill nav-shivam"></i>
                    Shivam
                </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                                className="nav-link text-danger"
                            >
                                <i className="bi bi-house nav-icon"></i> 𝐇𝐎𝐌𝐄
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                                className="nav-link"
                            >
                                <i className="bi bi-person nav-icon"></i> 𝐀𝐁𝐎𝐔𝐓
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="skill"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                                className="nav-link"
                            >
                                <i class="bi bi-briefcase nav-icon"></i> 𝐒𝐊𝐈𝐋𝐋
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="project"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                                className="nav-link"
                            >
                                <i class="bi bi-file-earmark-check nav-icon"></i> 𝐏𝐑𝐎𝐉𝐄𝐂𝐓
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                                className="nav-link"
                            >
                                <i class="bi bi-chat-text nav-icon"></i> 𝐂𝐎𝐍𝐓𝐀𝐂𝐓
                            </Link>
                        </li>

                        <li className='nav-item nav-toggle'>
                            <Toggle />
 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
