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

  // 初始化显示随机字符
  useEffect(() => {
    if (!originalText) return;
    setDisplayedText(generateRandomString(originalText.length, charset));
  }, [originalText, charset]);

  // IntersectionObserver 来观察元素是否出现在视口中
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
        threshold: 0.5, // 调整根据需要，0.5 表示元素一半以上可见时触发
      },
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

  // 重置并开始动画
  const resetAndStartAnimation = () => {
    setDisplayedText(generateRandomString(originalText.length, charset)); // 重新生成随机字符串
    const timer = setInterval(() => {
      setDisplayedText((prev) => updateText(prev, originalText, charset));
    }, interval);

    setTimeout(() => clearInterval(timer), originalText.length * interval); // 停止动画
  };

  // 生成随机字符串函数
  const generateRandomString = (length, chars) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // 更新文本函数
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
