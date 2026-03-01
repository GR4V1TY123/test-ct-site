function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">About TSEC CodeTantra</h2>
                <div className="section-underline"></div>

                <div className="about-content">
                    <h3 className="about-heading">Thadomal Shahani Engineering College</h3>
                    <p className="about-text">
                        Thadomal Shahani Engineering College (TSEC) is a premier educational institution located in the heart of Mumbai. Founded in 1983, TSEC has established itself as a beacon of academic excellence and holistic development. The college is recognized for its rigorous curriculum, state-of-the-art facilities, and a vibrant campus life that nurtures innovation. TSEC empowers its students to become leaders and pioneers in the ever-evolving world of technology and engineering.
                    </p>
                    <br />
                    <h3 className="about-heading">What is CodeTantra?</h3>
                    <p className="about-text">
                        CodeTantra is the official technical committee of TSEC. We are dedicated to growth and learning, providing a dynamic platform for students to explore, innovate, and master cutting-edge technologies.
                    </p>
                    <p className="about-text">
                        As a student-driven initiative, our committee organizes workshops, hackathons, and interactive tech sessions. We foster a culture of collaboration, where brilliant minds unite to build real-world solutions and push the boundaries of technical education.
                    </p>
                    <div className="about-features">
                        <span className="feature-badge">Growth & Learning</span>
                        <span className="feature-badge">Collaboration</span>
                        <span className="feature-badge">Innovation Hub</span>
                    </div>
                </div>

                <h3 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginTop: '4rem' }}>Our Departments</h3>
                <div className="section-underline" style={{ marginBottom: '3rem' }}></div>
                <div className="focus-grid">
                    <div className="focus-card highlight">
                        <div className="focus-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <div className="focus-title">Technical</div>
                        <p className="focus-description">
                            The backbone of CodeTantra, driving innovation through coding, development projects, and hands-on technical workshops.
                        </p>
                    </div>
                    <div className="focus-card">
                        <div className="focus-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
                        </div>
                        <div className="focus-title">Marketing</div>
                        <p className="focus-description">
                            Strategists who build our brand. We handle outreach, sponsorships, and digital campaigns to maximize CodeTantra's impact.
                        </p>
                    </div>
                    <div className="focus-card">
                        <div className="focus-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
                        </div>
                        <div className="focus-title">Design</div>
                        <p className="focus-description">
                            Creative minds shaping the visual identity of CodeTantra. From UI/UX layouts to digital art, we bring concepts to life.
                        </p>
                    </div>
                    <div className="focus-card">
                        <div className="focus-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                        </div>
                        <div className="focus-title">Editorial</div>
                        <p className="focus-description">
                            The voice of the committee. We craft compelling narratives, manage documentation, and curate engaging content for all our platforms.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
