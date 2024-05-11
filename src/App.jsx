import "./App.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

import { useGSAP } from "@gsap/react";

import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/home/Carousel";
import RandomizeText from "../components/home/RandomizeText";

import planetVideo from "./assets/vids/planet.mp4";

import Logo from "./assets/imgs/index/logo_title.svg";

import LeftImg from "./assets/imgs/index/left.svg";
import RightImg from "./assets/imgs/index/right.svg";
import Board4 from "./assets/imgs/index/board4.png";
import Token from "./assets/imgs/index/token.svg";
import About from "./assets/imgs/index/about.png";
import Charts from "./assets/imgs/index/charts.png";
import Color1 from "./assets/imgs/index/color1.svg";
import Color2 from "./assets/imgs/index/color2.svg";
import Color3 from "./assets/imgs/index/color3.svg";
import { KeyFeatures } from "../components/home/KeyFeatures";
import { HorizontalFeat } from "../components/home/HorizontalFeat";
import { BackgroundVideo } from "../components/home/BackgroundVideo";

function App() {
  useEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin,
      ScrollSmoother,
      SplitText
    );

    ScrollSmoother.create({
      smooth: 0, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const useCasesRef = useRef(null);
  const scrollToUseCases = () => {
    if (useCasesRef.current) {
      gsap.to(window, {
        scrollTo: {
          y: useCasesRef.current,
          autoKill: true,
        },
        duration: 3,
      });
    }
  };

  const tokenomicsRef = useRef(null);
  const scrollToTokenomics = () => {
    if (tokenomicsRef.current) {
      gsap.to(window, {
        scrollTo: {
          y: tokenomicsRef.current,
          autoKill: true,
        },
        duration: 3,
      });
    }
  };
  const fadeInRef = useRef(null);

  useGSAP(() => {
    //下方渐入效果
    gsap.from(fadeInRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <>
      <Header
        scrollToUseCases={scrollToUseCases}
        scrollToTokenomics={scrollToTokenomics}
      ></Header>
      <div className="home" id="home">
        <BackgroundVideo />
        <div id="first-vid-trigger">
          <div className="board1">
            <div className="top" ref={fadeInRef}>
              <img src={Logo} alt="logo" />
              <p>
                Where DePIN and <br />
                RWA meet
              </p>
              <span>
                PinLink, the first RWA-Tokenized DePIN platform, boosts revenue
                by letting owners tokenize and rent out DePIN capacity, lowers
                costs for AI and blockchain developers, and allows 3rd parties
                to earn through fractional shares.
              </span>
              <div className="arrow-down"></div>
            </div>
          </div>

          <HorizontalFeat />

          <div className="board3">
            <div></div>
            <div>
              <RandomizeText
                originalText={"THE FIRST AI DRIVEN"}
                interval={200}
              />
              <RandomizeText
                color={"#C1FF72"}
                originalText={"DEPIN LIQUIDITY LAYER"}
                interval={200}
              />
              <RandomizeText
                originalText={"WITH A FRACTIONALIZED"}
                interval={200}
              />
              <RandomizeText originalText={"COMPUTE POWER"} interval={200} />
              <RandomizeText originalText={"MARKETPLACE"} interval={200} />
            </div>
          </div>
        </div>
        <div className="board4">
          <div className="title">
            <img className="left" src={LeftImg} alt="icon" />
            <h2>HOW DOES PINLINk WORK</h2>
            <img className="right" src={RightImg} alt="icon" />
          </div>
          <img className="mainImg" src={Board4} alt="icon" />
        </div>
        <div className="board5">
          <div className="title" style={{ width: "600px" }}>
            <img className="left" src={LeftImg} alt="icon" />
            <h2>Key Features</h2>
            <img className="right" src={RightImg} alt="icon" />
          </div>

          <KeyFeatures />
        </div>
        <div className="board6" ref={useCasesRef}>
          <div className="title" style={{ width: "600px" }}>
            <img className="left" src={LeftImg} alt="icon" />
            <h2>Use Cases</h2>
            <img className="right" src={RightImg} alt="icon" />
          </div>
          <p className="info">
            By bringing RWA-tokenization dynamics to the DePIN sector, PinLink
            achieves several key benefits
          </p>
          <div className="casesMain">
            <video
              loop
              muted
              autoPlay
              className="bg-video planet-video"
              src={planetVideo}
              preload="auto"
              type="video/mp4"
            ></video>
            <Carousel />
          </div>
        </div>
        <div className="board7" ref={tokenomicsRef}>
          <div className="title" style={{ width: "600px" }}>
            <img className="left" src={LeftImg} alt="icon" />
            <h2>Tokenomics</h2>
            <img className="right" src={RightImg} alt="icon" />
          </div>
          <div className="tokenomics">
            <div className="left">
              <div className="charts">
                <img src={Charts} alt="icon" />
              </div>
              <div className="info">
                <div>
                  <img src={Color1} alt="icon" />
                  Uniswap Pool: 70%
                </div>
                <div>
                  <img src={Color2} alt="icon" />
                  Staking Emissions: 20%
                </div>
                <div>
                  <img src={Color3} alt="icon" />
                  reasury: 10%
                </div>
              </div>
            </div>
            <div className="right">
              <div className="main">
                <div className="tokenBg">
                  <p>PINKLink</p>
                  <p>$Pin Token</p>
                </div>
                <img src={Token} alt="icon" />
              </div>
              <div className="info">
                <div>
                  <p>1</p>Ticker: $PIN
                </div>
                <div>
                  <p>2</p>Supply: 100,000,000
                </div>
                <div>
                  <p>3</p>Network: ERC20
                </div>
              </div>
            </div>
          </div>
          <div className="about">
            <div className="left">
              <p>
                Learn More About How PinLink Combines and Unleashes the Full
                Potential of RWA & DePIN.
              </p>
              <a href="" className="button green">
                {" "}
                Read Docs
              </a>
            </div>
            <div>
              <img src={About} alt="icon" />
            </div>
          </div>
        </div>
      </div>
      <Footer
        scrollToUseCases={scrollToUseCases}
        scrollToTokenomics={scrollToTokenomics}
      ></Footer>
    </>
  );
}

export default App;
