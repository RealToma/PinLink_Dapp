import React, { useState, useEffect, useRef } from "react";

const RandomizeText = ({
  color,
  originalText,
  interval,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#!$%^&*",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!originalText) return;
    setDisplayedText(generateRandomString(originalText.length, charset));
  }, [originalText, charset]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetAndStartAnimation();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const resetAndStartAnimation = () => {
    setDisplayedText(generateRandomString(originalText.length, charset)); 
    const timer = setInterval(() => {
      setDisplayedText((prev) => updateText(prev, originalText, charset));
    }, interval);

    setTimeout(() => clearInterval(timer), originalText.length * interval);
  };

  const generateRandomString = (length, chars) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const updateText = (currentText, targetText, chars) => {
    return currentText
      .split("")
      .map((char, index) => {
        if (char === targetText.charAt(index)) {
          return char;
        }
        return Math.random() > 0.5
          ? targetText.charAt(index)
          : chars.charAt(Math.floor(Math.random() * chars.length));
      })
      .join("");
  };

  return (
    <div ref={elementRef} style={{ color: color }}>
      {displayedText}
    </div>
  );
};

export default RandomizeText;
