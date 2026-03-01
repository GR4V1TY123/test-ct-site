function Footer() {
    const logoSrc = "data:image/png;base64,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";

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Rajdhani:wght@400;500;600;700&display=swap');

                /* ── Keyframe Animations ── */
                @keyframes footerFadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes lineDraw {
                    from { width: 0; }
                    to   { width: 100%; }
                }
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 4px 4px 0px #000, 0 0 10px rgba(255,165,0,0.3); }
                    50%       { box-shadow: 4px 4px 0px #000, 0 0 22px rgba(255,165,0,0.7); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50%       { transform: translateY(-5px); }
                }
                @keyframes dotBounce {
                    0%, 100% { transform: scale(1); }
                    50%       { transform: scale(1.6); }
                }
                @keyframes shimmer {
                    0%   { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes zap {
                    0%, 90%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
                    92%           { opacity: 0.4; transform: scale(1.3) rotate(-5deg); }
                    95%           { opacity: 1; transform: scale(0.9) rotate(3deg); }
                    97%           { opacity: 0.6; transform: scale(1.15) rotate(-2deg); }
                }
                @keyframes comicPop {
                    0%   { transform: scale(1); }
                    30%  { transform: scale(1.08) rotate(-1deg); }
                    60%  { transform: scale(0.97) rotate(0.5deg); }
                    100% { transform: scale(1); }
                }
                @keyframes stripeSlide {
                    0%   { background-position: 0 0; }
                    100% { background-position: 40px 0; }
                }
                @keyframes textFlicker {
                    0%, 95%, 100% { opacity: 1; }
                    96%           { opacity: 0.7; }
                    97%           { opacity: 1; }
                    98%           { opacity: 0.5; }
                }
                @keyframes borderPulse {
                    0%, 100% { border-color: #ffd700; }
                    50%      { border-color: #ff8c00; }
                }

                /* ── Footer Base ── */
                footer {
                    background: #111;
                    border-top: 4px solid #000;
                    position: relative;
                    overflow: hidden;
                    font-family: 'Rajdhani', sans-serif;
                }

                /* Halftone dot pattern overlay matching site aesthetic */
                footer::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, rgba(255,165,0,0.06) 1px, transparent 1px);
                    background-size: 20px 20px;
                    pointer-events: none;
                    z-index: 0;
                }

                /* Top orange accent stripe */
                footer::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #ff8c00, #ffd700, #ff8c00);
                    background-size: 200% auto;
                    animation: shimmer 3s linear infinite;
                }

                .footer-container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 80px 60px 60px;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1.2fr;
                    gap: 0;
                    column-gap: 0;
                    position: relative;
                    z-index: 1;
                    animation: footerFadeUp 0.7s ease both;
                }

                /* ── Brand Column ── */
                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                    padding-right: 60px;
                    border-right: 8px solid;
                    border-image: repeating-linear-gradient(
                        180deg,
                        #000 0px, #000 10px,
                        #ffd700 10px, #ffd700 20px
                    ) 8;
                }

                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    animation: float 4s ease-in-out infinite;
                }

                .footer-logo-icon {
                    width: 72px;
                    height: 72px;
                    flex-shrink: 0;
                    padding: 0;
                    background: transparent;
                    border: none;
                    box-shadow: none;
                    transition: transform 0.2s ease;
                    animation: borderPulse 2s ease-in-out infinite;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }

                /* Hexagon outline that hugs the logo shape */
                .footer-logo-icon::before {
                    content: '';
                    position: absolute;
                    inset: -3px;
                    background: #ffd700;
                    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
                    z-index: 0;
                    animation: borderPulse 2s ease-in-out infinite;
                }

                .footer-logo-icon::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: #000;
                    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
                    z-index: 1;
                }

                .footer-logo-icon:hover {
                    transform: translate(-2px, -2px);
                }

                .footer-logo-icon img {
                    width: 90%;
                    height: 90%;
                    object-fit: contain;
                    display: block;
                    position: relative;
                    z-index: 2;
                    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
                }

                .footer-logo-text {
                    font-family: 'Bangers', cursive;
                    font-size: 42px;
                    letter-spacing: 5px;
                    color: #ffd700;
                    text-transform: uppercase;
                    text-shadow: 3px 3px 0px #000, -1px -1px 0px #ff8c00;
                    line-height: 1;
                    animation: zap 4s ease-in-out infinite, textFlicker 7s ease-in-out infinite;
                }

                .footer-description {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.85;
                    color: #bba86a;
                    max-width: 400px;
                    margin: 0;
                    border-left: 4px solid #ffd700;
                    padding-left: 16px;
                }

                /* ── Social Icons ── */
                .footer-social {
                    display: flex;
                    gap: 16px;
                    margin-top: 4px;
                }

                .social-icon {
                    width: 54px;
                    height: 54px;
                    border: 3px solid #ffd700;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffd700;
                    text-decoration: none;
                    background: #000;
                    box-shadow: 4px 4px 0px #000;
                    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
                }

                .social-icon:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 7px 7px 0px #000;
                    background: #ffd700;
                    color: #111;
                    animation: comicPop 0.4s ease;
                }

                .social-icon svg {
                    width: 24px;
                    height: 24px;
                    fill: currentColor;
                }

                /* ── Section Headings ── */
                .footer-section {
                    animation: footerFadeUp 0.7s ease 0.15s both;
                    padding: 0 50px;
                    border-right: 8px solid;
                    border-image: repeating-linear-gradient(
                        180deg,
                        #000 0px, #000 10px,
                        #ffd700 10px, #ffd700 20px
                    ) 8;
                }

                .footer-section h3 {
                    font-family: 'Bangers', cursive;
                    font-size: 28px;
                    letter-spacing: 5px;
                    text-transform: uppercase;
                    color: #ffd700;
                    margin: 0 0 24px 0;
                    padding-bottom: 12px;
                    position: relative;
                    text-shadow: 2px 2px 0px #000;
                }

                .footer-section h3::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0;
                    height: 3px;
                    background: #ffd700;
                    border-radius: 2px;
                    animation: lineDraw 1s ease 0.5s both;
                    width: 100%;
                }

                /* ── Quick Links ── */
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .footer-links li a {
                    color: #bba86a;
                    text-decoration: none;
                    font-family: 'Rajdhani', sans-serif;
                    font-size: 19px;
                    font-weight: 600;
                    letter-spacing: 1px;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    position: relative;
                }

                .footer-links li a::before {
                    content: '';
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #ffd700;
                    border: 2px solid #000;
                    flex-shrink: 0;
                    transition: transform 0.2s ease;
                    animation: dotBounce 2s ease-in-out infinite;
                }

                .footer-links li a:hover {
                    color: #ffd700;
                    transform: translateX(5px);
                    text-shadow: 1px 1px 0px #000;
                    animation: comicPop 0.3s ease;
                }

                .footer-links li a:hover::before {
                    transform: scale(1.4);
                }

                /* ── Contact ── */
                .footer-contact {
                    animation: footerFadeUp 0.7s ease 0.3s both;
                    padding-left: 50px;
                }

                .footer-contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .footer-location {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: #bba86a;
                    text-decoration: none;
                    font-family: 'Rajdhani', sans-serif;
                    font-size: 19px;
                    font-weight: 600;
                    transition: color 0.2s ease, transform 0.2s ease;
                    letter-spacing: 0.5px;
                }

                .footer-location::before {
                    content: '📍';
                    font-size: 18px;
                }

                .footer-location:hover {
                    color: #ffd700;
                    transform: translateX(4px);
                }

                /* Email box — comic outlined button style */
                .footer-email {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    color: #111;
                    text-decoration: none;
                    font-family: 'Bangers', cursive;
                    font-size: 22px;
                    letter-spacing: 2px;
                    padding: 16px 24px;
                    background: #ffd700;
                    border: 3px solid #000;
                    border-radius: 10px;
                    box-shadow: 5px 5px 0px #000;
                    transition: transform 0.15s ease, box-shadow 0.15s ease;
                    animation: pulse-glow 3s ease-in-out infinite;
                    width: 100%;
                    box-sizing: border-box;
                    word-break: break-all;
                    text-align: center;
                }

                .footer-email:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 8px 8px 0px #000;
                    background: #ffb700;
                    animation: none;
                }

                /* ── Footer Bottom ── */
                .footer-bottom {
                    border-top: 3px solid #333;
                    text-align: center;
                    padding: 24px 60px;
                    font-family: 'Rajdhani', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    letter-spacing: 2px;
                    color: #666;
                    position: relative;
                    z-index: 1;
                    text-transform: uppercase;
                }

                .footer-bottom span {
                    color: #ffd700;
                }

                /* ── Responsive ── */
                @media (max-width: 900px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                        gap: 48px;
                        padding: 60px 32px 48px;
                    }
                    .footer-description { max-width: 100%; }
                    .footer-email { font-size: 17px; }
                }
            `}</style>

            <footer>
                <div className="footer-container">

                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <img src={logoSrc} alt="CodeTantra Logo" />
                            </div>
                            <div className="footer-logo-text">CODETANTRA</div>
                        </div>
                        <p className="footer-description">
                            TSEC Technical Committee's annual tech extravaganza — a celebration of innovation, creativity, and engineering excellence. Where legends are coded, champions are forged, and the future of technology takes shape.
                        </p>
                        <div className="footer-social">
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="ig-grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#f09433"/>
                                            <stop offset="50%" stopColor="#dc2743"/>
                                            <stop offset="100%" stopColor="#bc1888"/>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#ig-grad2)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            {/* Gmail */}
                            <a href="mailto:codetantra.tsec@gmail.com" className="social-icon" aria-label="Gmail">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#events">Events</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section footer-contact">
                        <h3>Contact Us</h3>
                        <div className="footer-contact-details">
                            <a
                                href="https://maps.google.com/?q=Thadomal+Shahani+Engineering+College+Mumbai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-location"
                            >
                                TSEC, Mumbai
                            </a>
                            <a href="mailto:codetantra.tsec@gmail.com" className="footer-email">
                                codetantra.tsec@gmail.com
                            </a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <span>TSEC Technical Committee</span> &copy; 2025
                </div>
            </footer>
        </>
    );
}

export default Footer;