import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

function ScrambleText({ text }) {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      const chars = text.split('');
      const charsElements = chars.map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        return span;
      });

      containerRef.current.innerHTML = '';
      charsElements.forEach(el => containerRef.current.appendChild(el));

      gsap.from(charsElements, {
        duration: 0.5,
        opacity: 0,
        x: () => 50 - Math.random() * 100,
        y: () => 25 - Math.random() * 50,
        ease: "power3.out",
        stagger: 0.02
      });
    }
  }, [inView, text]);

  return <div ref={ref} style={{ minHeight: '100vh' }}>
    <div ref={containerRef}></div>
  </div>;
}

export default ScrambleText;
