import titleLogo from "@assets/imgs/index/logo_title.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Color1 from "@assets/imgs/index/color1.svg";
import Color2 from "@assets/imgs/index/color2.svg";
import Color3 from "@assets/imgs/index/color3.svg";
const TokenDistributions = () => {
  const hoverOutTimeout = useRef(null);

  useGSAP(() => {
    const segment1 = document.getElementById("segment1");
    const segment2 = document.getElementById("segment2");
    const segment3 = document.getElementById("segment3");

    const tl = gsap.timeline({
      // repeat: -1,
      scrollTrigger: {
        trigger: ".board7",
        toggleActions: "restart none none none", // Play the animation every time it enters the viewport
      },
    });

    tl.fromTo(
      segment1,
      { strokeDashoffset: 451 },
      { strokeDashoffset: 111, duration: 0.5, ease: "none" },
      "start",
    )
      .fromTo(
        segment2,
        { strokeDashoffset: 456 },
        { strokeDashoffset: 406, duration: 0.7, ease: "Power2.easeOut" },
        "start+=0.5",
      )
      .fromTo(
        segment3,
        { strokeDashoffset: 452 },
        { strokeDashoffset: 432, duration: 1.4, ease: "Power3.easeOut" },
        "start+=0.89",
      );
  }, []);

  const texts = [
    {
      text: "Uniswap LP: 85%",
      img: Color3,
    },
    {
      text: "Staking Emissions: 10%",
      img: Color2,
    },
    {
      text: "CEX Reserve: 5%",
      img: Color1,
    },
  ];

  const handleHoverIn = (e) => {
    if (hoverOutTimeout.current) {
      clearTimeout(hoverOutTimeout.current);
    }

    const tokenDescs = document.querySelectorAll(".token-desc");
    tokenDescs.forEach((item, index) => {
      const segment = document.getElementById(`segment${index + 1}`);
      if (index === e) {
        gsap.to(item, { opacity: 1, duration: 0.3,ease:"power1.easeInOut"});
        gsap.to(segment, { opacity: 1, duration: 0.5,ease:"power1.easeInOut"});   
      } else {
        gsap.to(item, { opacity: 0.3, duration: 0.3,ease:"power1.easeInOut"});
        gsap.to(segment, { opacity: 0.1, duration: 0.5,ease:"power1.easeInOut"});   
      }
    });
  };

  const handleHoverOut = () => {
    hoverOutTimeout.current = setTimeout(() => {
      const tokenDescs = document.querySelectorAll(".token-desc");
      tokenDescs.forEach((item, idx) => {
        const segment = document.getElementById(`segment${idx + 1}`);
        gsap.to(item, { opacity: 1, duration: 0.3,ease:"power1.easeInOut"});
        gsap.to(segment, { opacity: 1, duration: 0.3,ease:"power1.easeInOut"});
      });
    }, 300);
  };

  return (
    <>
      <div className="charts">
        <div className="skill">
          <div className="outer">
            <div className="inner">
              <img src={titleLogo} alt="logo" id="title-logo" />
              <p id="inner-text">Distributions</p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className="svg1"
          >
            <defs>
              <linearGradient id="GradientColor1">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#C1FF72" />
              </linearGradient>
            </defs>
            <circle
              id="segment1"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className="svg2"
          >
            <defs>
              <linearGradient id="GradientColor2">
                <stop offset="0%" stopColor="#C1FF72" />
                <stop offset="50%" stopColor="#64AFFA" />
                <stop offset="100%" stopColor="#70C1FA" />
              </linearGradient>
            </defs>
            <circle
              id="segment2"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
            className="svg3"
          >
            <defs>
              <linearGradient id="GradientColor3">
                <stop offset="42.28%" stopColor="#C1FF72" />
                <stop offset="0%" stopColor="#70C1FA" />
                <stop offset="100%" stopColor="#042F4E" />
              </linearGradient>
            </defs>
            <circle
              id="segment3"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="info">
        {texts.map((item, index) => (
          <div
            className="token-desc"
            key={index}
            onMouseEnter={() => handleHoverIn(index)}
            onMouseLeave={handleHoverOut}
          >
            <img src={item.img} alt="icon" />
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TokenDistributions;
