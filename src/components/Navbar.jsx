import { useState } from "react";
import './navbar.css';
import './navbar-enhancements.css';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <nav>
            {/* Comic corner decorations */}
            <div className="nav-corner corner-left">⚡</div>
            <div className="nav-corner corner-right">⚡</div>

            <div className="nav-container">

                <div className="logo">
                    <div className="logo-icon">
                        CT
                        <span className="logo-spark"></span>
                    </div>
                    <div className="logo-text">
                        CodeTantra
                        <span className="logo-underline"></span>
                    </div>
                </div>

                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li
                        onMouseEnter={() => setHoveredLink('home')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <a href="#home">
                            HOME
                            {hoveredLink === 'home' && <span className="link-burst">POP!</span>}
                        </a>
                    </li>
                    <li
                        onMouseEnter={() => setHoveredLink('about')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <a href="#about">
                            ABOUT
                            {hoveredLink === 'about' && <span className="link-burst">ZAP!</span>}
                        </a>
                    </li>
                    <li
                        onMouseEnter={() => setHoveredLink('events')}
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        <a href="#events">
                            EVENTS
                            {hoveredLink === 'events' && <span className="link-burst">BAM!</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-cta">
                            <span className="cta-icon">⚡</span>
                            NEED FOR CODE 4.0
                            <span className="cta-glow"></span>
                        </a>
                    </li>
                </ul>

                <div
                    className={`menu-toggle ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
