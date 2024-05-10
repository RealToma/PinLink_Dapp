import React, { useState } from 'react';

const Carousel3D = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemAngle = 360 / items.length;

  const rotateCarousel = (direction) => {
    const newIndex = direction === 'next' ? (activeIndex + 1) % items.length : (activeIndex + items.length - 1) % items.length;
    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateZ(-288px) rotateY(${-activeIndex * itemAngle}deg)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            style={{ transform: `rotateY(${index * itemAngle}deg) translateZ(288px)` }}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={() => rotateCarousel('prev')}>&lt;</button>
      <button onClick={() => rotateCarousel('next')}>&gt;</button>
    </div>
  );
};

export default Carousel3D;
