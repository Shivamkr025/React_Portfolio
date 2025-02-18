import React, { useState } from 'react';
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light py-3">
            <div className="container">
                <span className="fs-4 nav-shivam" style={{ fontWeight: 'bold', marginLeft: '8px' }}>
                    Shivam Kumar
                </span>

                <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
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
                                onClick={closeNavbar} // Close navbar on click
                            >
                                <i className="bi bi-house nav-icon"></i> <span className='nav-titles'>𝐇𝐎𝐌𝐄</span>
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
                                onClick={closeNavbar} // Close navbar on click
                            >
                                <i className="bi bi-person nav-icon"></i> <span className='nav-titles'>𝐀𝐁𝐎𝐔𝐓</span>
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
                                onClick={closeNavbar} // Close navbar on click
                            >
                                <i className="bi bi-briefcase nav-icon"></i> <span className='nav-titles'> 𝐒𝐊𝐈𝐋𝐋</span>
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
                                onClick={closeNavbar} // Close navbar on click
                            >
                                <i className="bi bi-file-earmark-check nav-icon"></i><span className='nav-titles'>𝐏𝐑𝐎𝐉𝐄𝐂𝐓</span> 
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
                                onClick={closeNavbar} // Close navbar on click
                            >
                                <i className="bi bi-chat-text nav-icon"></i><span className='nav-titles'> 𝐂𝐎𝐍𝐓𝐀𝐂𝐓</span>
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
