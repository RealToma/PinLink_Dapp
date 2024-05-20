import { useScreenWidth } from "@context/ScreenWidthContext";

const RandomizeText = ({
  color,
  originalText,
  interval,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#!$%^&*",
}) => {
  const [displayedText, setDisplayedText] = useState(originalText);
  const elementRef = useRef(null);
  const observerRef = useRef(null);
  const { isMobile } = useScreenWidth();

  useEffect(() => {
    if (!originalText||isMobile) return;
    setDisplayedText(generateRandomString(originalText.length, charset));
  }, [originalText, charset]);

  useEffect(() => {
    if (isMobile) return;
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
