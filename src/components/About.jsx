function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">About TANTRA</h2>
                <div className="section-underline"></div>

                <div className="about-content">
                    <h3 className="about-heading">🚀 What is TANTRA?</h3>
                    <p className="about-text">
                        TANTRA is the annual technical festival of Thadomal Shahani Engineering College (TSEC),
                        organized by the TSEC Technical Committee. It's where brilliant minds come together
                        to innovate, compete, and collaborate on cutting-edge technology challenges.
                    </p>
                    <p className="about-text">
                        From hackathons and coding contests to robotics and AI challenges, TANTRA offers
                        an electrifying platform for students across Mumbai to showcase their technical prowess.
                    </p>
                    <div className="about-features">
                        <span className="feature-badge">🏆 Competitive Events</span>
                        <span className="feature-badge">🤝 Networking</span>
                        <span className="feature-badge">💡 Innovation Hub</span>
                    </div>
                </div>

                <div className="focus-grid">
                    <div className="focus-card highlight">
                        <div className="focus-icon">💻</div>
                        <div className="focus-title">Coding Challenges</div>
                        <p className="focus-description">
                            Test your programming skills in competitive coding rounds with problems
                            ranging from beginner to expert level.
                        </p>
                    </div>
                    <div className="focus-card">
                        <div className="focus-icon">🤖</div>
                        <div className="focus-title">Robotics</div>
                        <p className="focus-description">
                            Design, build and battle robots in adrenaline-pumping challenges that
                            test your engineering creativity.
                        </p>
                    </div>
                    <div className="focus-card">
                        <div className="focus-icon">🧠</div>
                        <div className="focus-title">AI & ML</div>
                        <p className="focus-description">
                            Dive into the world of artificial intelligence with hands-on projects
                            and model-building competitions.
                        </p>
                    </div>
                    <div className="focus-card">
                        <div className="focus-icon">🎨</div>
                        <div className="focus-title">Design</div>
                        <p className="focus-description">
                            Express your creativity in UI/UX design challenges and digital art
                            contests judged by industry experts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
