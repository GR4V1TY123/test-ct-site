import { useState } from "react";

// ✅ Import Hackathon Images
import hackathon1 from "../assets/hackathon1.jpg";
import hackathon2 from "../assets/hackathon2.jpg";
import hackathon3 from "../assets/hackathon3.jpg";
import hackathon4 from "../assets/hackathon4.jpg";

// ✅ Import Workshop Images
import WS1 from "../assets/WS1.jpeg";
import WS2 from "../assets/WS2.jpeg";
import WS3 from "../assets/WS3.jpeg";
import WS4 from "../assets/WS4.jpeg";

function Events() {
  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (card) => {
    setActiveCard((prev) => (prev === card ? null : card));
  };

  return (
    <section className="events" id="events">
      <div className="events-container">
        <h2 className="section-title">Our Events</h2>
        <div className="section-underline"></div>

                <p className="events-intro">
                    Choose your battle! From code wars to robot rumbles, we've got challenges
                    that'll push every tech warrior to their limits. 🔥
                </p>

        <div className="events-grid">

          {/* ================= HACKATHON ================= */}
          <div className={`event-card ${activeCard === "hackathon" ? "open" : ""}`}>
            <div
              className="event-click-area"
              onClick={() => handleToggle("hackathon")}
            >
              <div className="event-caption">EPISODE 1</div>

              <div className="event-icon-wrapper">
                <div className="event-icon">🏆</div>
              </div>

              <h3 className="event-title">Hackathons</h3>
              <p className="event-subtitle">NEED FOR CODE SERIES</p>

              <p className="event-description">
                Our Flagship Hackathon Series - Need For Code is a high-impact
                hackathon where students collaborate, innovate, and build
                real-world solutions. Participants tackle industry-relevant
                challenges, develop functional prototypes, and gain hands-on
                experience with modern technologies — all in an intense,
                fast-paced environment.
                <br /><br />
                More than just coding, it’s about teamwork, creativity, and
                turning ideas into reality.
              </p>
            </div>

            <div className="gallery-wrapper">
              <div className="polaroid-gallery">
                {[hackathon1, hackathon2, hackathon3, hackathon4].map(
                  (img, index) => (
                    <div
                      className="polaroid"
                      key={index}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img src={img} alt={`Hackathon ${index + 1}`} />
                      <p></p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ================= WORKSHOPS ================= */}
          <div className={`event-card ${activeCard === "workshop" ? "open" : ""}`}>
            <div
              className="event-click-area"
              onClick={() => handleToggle("workshop")}
            >
              <div className="event-caption">EPISODE 2</div>

              <div className="event-icon-wrapper">
                <div className="event-icon">💡</div>
              </div>

              <h3 className="event-title">Workshops</h3>
              <p className="event-subtitle">SKILL DEVELOPMENT</p>

              <p className="event-description">
                Through immersive technical events, we bridge the gap between
                theory and real-world application. Students engage in hands-on
                challenges, collaborate with peers, and learn from experienced
                mentors in a fast-paced, practical environment.
                <br /><br />
                More than just learning, it’s about building skills, gaining
                confidence, and turning knowledge into real impact. Where
                curiosity evolves into capability and ideas grow into tangible
                outcomes.
              </p>
            </div>

            <div className="gallery-wrapper">
              <div className="polaroid-gallery">
                {[WS1, WS2, WS3, WS4].map((img, index) => (
                  <div
                    className="polaroid"
                    key={index}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img src={img} alt={`Workshop ${index + 1}`} />
                    <p></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Events;
