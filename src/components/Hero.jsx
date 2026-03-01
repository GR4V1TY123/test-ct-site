import './hero.css';

function Hero() {
    return (
        <section className="hero" id="home">
            {/* Halftone overlays */}
            <div className="halftone-overlay halftone-main"></div>
            <div className="halftone-overlay halftone-cyan"></div>
            <div className="halftone-overlay halftone-magenta"></div>

            {/* Speed lines */}
            <div className="speed-lines"></div>

            {/* Burst background */}
            <div className="hero-burst"></div>

            {/* Action lines */}
            <div className="action-lines"></div>

            {/* Sound effect bursts */}
            <div className="comic-burst burst-1">POW!</div>
            <div className="comic-burst burst-2">WHAM!</div>
            <div className="comic-burst burst-3">BOOM!</div>
            <div className="comic-burst burst-zap">ZAP!</div>
            <div className="comic-burst burst-crack">CRACK!</div>

            {/* Mini floating effects */}
            <div className="mini-effect effect-whoosh">whoosh</div>
            <div className="mini-effect effect-zoom">zoom</div>

            {/* Floating code symbols */}
            <div className="code-symbol symbol-1">{"{}"}</div>
            <div className="code-symbol symbol-2">{"<>"}</div>

            {/* Energy sparks */}
            <div className="energy-spark spark-1"></div>
            <div className="energy-spark spark-2"></div>
            <div className="energy-spark spark-3"></div>

            {/* Floating stars */}
            <div className="floating-star star-1">★</div>
            <div className="floating-star star-2">★</div>
            <div className="floating-star star-3">★</div>
            <div className="floating-star star-4">★</div>

            {/* Main hero content — no box/border */}
            <div className="hero-content">
                {/* <div className="hero-badge"> TSEC TECHNICAL COMMITTEE</div> */}
                <div className="hero-subtitle">Welcome to</div>

                <div className="title-wrapper">
                    <div className="hero-title-shadow">CODETANTRA</div>
                    <h1 className="hero-title">CODETANTRA</h1>
                </div>

                <div className="hero-underline"></div>

                <p className="hero-description">
                    Empowering students through innovative workshops, competitive
                    hackathons, and programming excellence
                </p>

                <div className="hero-buttons">
                    <a href="https://tseccodetantra.com/NFC-4.0/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        <span className="btn-glow"></span>
                        NFC 4.0
                    </a>
                    <a href="#about" className="btn-secondary">
                        <span className="btn-glow"></span>
                        KNOW MORE
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
