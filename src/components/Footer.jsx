function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div>
                    <div className="footer-logo">
                        <div className="footer-logo-icon">CT</div>
                        <div className="footer-logo-text">CODETANTRA</div>
                    </div>
                    <p className="footer-description">
                        TSEC Technical Committee's annual tech extravaganza.
                        Where legends are coded and champions are born!
                    </p>
                    <div className="footer-social">
                        <a href="#" className="social-icon">📘</a>
                        <a href="#" className="social-icon">📸</a>
                        <a href="#" className="social-icon">🐦</a>
                        <a href="#" className="social-icon">💼</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#">Schedule</a></li>
                        <li><a href="#">Sponsors</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Events</h3>
                    <ul className="footer-links">
                        <li><a href="#">Hackathon</a></li>
                        <li><a href="#">Code Hunt</a></li>
                        <li><a href="#">Robo Wars</a></li>
                        <li><a href="#">AI Challenge</a></li>
                        <li><a href="#">Design Battle</a></li>
                    </ul>
                </div>

                <div className="footer-section footer-contact">
                    <h3>Contact Us</h3>
                    <p>📍 TSEC, Mumbai</p>
                    <p>📞 +91 98765 43210</p>
                    <p>🕐 Mon–Fri: 9AM – 6PM</p>
                    <a href="mailto:tantra@tsec.edu" className="footer-email">
                        📧 tantra@tsec.edu
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                Made with <span className="footer-heart">❤️</span> by TSEC Technical Committee © 2025
            </div>
        </footer>
    );
}

export default Footer;
