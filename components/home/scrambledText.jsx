import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';

function ScrambleText({ text }) {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,  // 触发一次后就不再触发
    threshold: 0.5      // 元素50%可见时触发
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

      // 创建打乱动画
      gsap.from(charsElements, {
        duration: 0.5,
        opacity: 0,
        x: () => 50 - Math.random() * 100, // 随机X轴位置
        y: () => 25 - Math.random() * 50,  // 随机Y轴位置
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
