import React from 'react';
import './ImageFlow.css';

import img24_25_1 from '../../assets/images/24-25.jpeg';
import img24_25_2 from '../../assets/images/24-25_2.jpeg';
import img25_26_1 from '../../assets/images/25-26_1.jpeg';
import img25_26_2 from '../../assets/images/25_26_2.jpeg';
import img25_26_3 from '../../assets/images/25_26_3.jpeg';

const flowingGallery = [
  { id: '25-1', year: '2025-26', image: img25_26_1 },
  { id: '25-3', year: '2025-26', image: img25_26_3 },
  { id: '24-1', year: '2024-25', image: img24_25_1 },
  { id: '24-2', year: '2024-25', image: img24_25_2 },
];

export default function ImageFlow() {
  const marqueeList = [...flowingGallery, ...flowingGallery, ...flowingGallery];

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">

        <h2 className="section-title">Our Gallery</h2>
        <div className="section-underline"></div>

        <p className="gallery-year-label">✦ 2025–26 Highlights</p>

        <div className="gallery-feature-wrapper">
          <div className="gallery-feature-card">
            <span className="gallery-feature-caption">★ FEATURED</span>
            <img src={img25_26_2} alt="Featured moment from 2025-26" />
            <span className="gallery-feature-badge">2025-26</span>
          </div>
        </div>

        <div className="gallery-marquee-wrapper">
          <div className="gallery-marquee-track">
            {marqueeList.map((item, index) => (
              <div key={`${item.id}-${index}`} className="gallery-card">
                <img src={item.image} alt={`Gallery item from ${item.year}`} />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-tag">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
