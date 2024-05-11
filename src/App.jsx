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
import { KeyFeatures } from "../components/home/KeyFeatures";
import { HorizontalFeat } from "../components/home/HorizontalFeat";
import { BackgroundVideo } from "../components/home/BackgroundVideo";
import { Tokennomics } from "../components/home/Tokennomics";

function App() {
  useEffect(() => {
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
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin,
      ScrollSmoother,
      SplitText
    );
    ScrollSmoother.create({
      smooth: 1, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });

    //下方渐入效果
    gsap.from(fadeInRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const titleElements = document.querySelectorAll(".title");

    titleElements.forEach((titleElement) => {
      const leftImg = titleElement.querySelector(".left");
      const rightImg = titleElement.querySelector(".right");
      const title = titleElement.querySelector("h2");

      const textFadeInAnimationTrigger = {
        trigger: titleElement,
        start: "top 90%",
        end: "top 20%",
        scrub: true,
        // markers: true,
      };

      if (leftImg && rightImg && title) {

        //needs to wrap in try catch because of the SplitText.create wont work in the first render
        try {
          let mySplitText = new SplitText.create(title, {
            type: "chars",
          });
          let chars = mySplitText.chars;
      
          gsap.from(chars, {
            opacity: 0,
            ease: "power2.out",
            stagger: 0.04,
            scrollTrigger: textFadeInAnimationTrigger,
          });
        } catch (e) {
          return;
        }

        gsap.from(leftImg, {
          x: -100,
          opacity: 0,
          duration: 1,
          scrollTrigger: textFadeInAnimationTrigger,
        });
        gsap.from(rightImg, {
          x: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: textFadeInAnimationTrigger,
        });
      }
    });

    const useCasesTitle = document.querySelector(".use-cases-title");
    const board6 = document.querySelector(".board6");


    gsap.from(useCasesTitle, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: board6,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },

  });

  const planetVideoElement = document.querySelector(".planet-video");
  gsap.from(planetVideoElement, {
    opacity: 0,
    scale: 0.3,
      scrollTrigger: {
        trigger: board6,
        start: "top 50%",
        end: "top 20%",
        scrub: true,
      },
    });   

  });

  return (
<div id="smooth-wrapper">
  <div id="smooth-content">
      <Header
        scrollToUseCases={scrollToUseCases}
        scrollToTokenomics={scrollToTokenomics}
      ></Header>
      <div className="home">
        <BackgroundVideo />
        <div id="first-vid-trigger">
          <div className="board board1">
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

          <div className="board board3">
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
          <p className="info use-cases-title">
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
          <Tokennomics/>
        </div>
      </div>
      <Footer
        scrollToUseCases={scrollToUseCases}
        scrollToTokenomics={scrollToTokenomics}
      ></Footer>
    </div>
    </div>
  );
}

export default App;
