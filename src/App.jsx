import "./App.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/home/carousel";
import RandomizeText from "../components/home/RandomizeText";

import video from "./assets/vids/mac.mp4";
import chipVideo from "./assets/vids/chip-animation.webm";
import planetVideo from "./assets/vids/planet.mp4";

import Logo from "./assets/imgs/index/logo_title.svg";
import Board2_1 from "./assets/imgs/index/board2_1.svg";
import Board2_2 from "./assets/imgs/index/board2_2.svg";
import Board2_3 from "./assets/imgs/index/board2_3.svg";
import LeftImg from "./assets/imgs/index/left.svg";
import RightImg from "./assets/imgs/index/right.svg";
import Board4 from "./assets/imgs/index/board4.png";
import Token from "./assets/imgs/index/token.svg";
import About from "./assets/imgs/index/about.png";
import Charts from "./assets/imgs/index/charts.png";
import Color1 from "./assets/imgs/index/color1.svg";
import Color2 from "./assets/imgs/index/color2.svg";
import Color3 from "./assets/imgs/index/color3.svg";



function App() {

  const horizontalSectionRef = useRef(null);
  const bgVideoRef = useRef(null);
  const chipVideoRef = useRef(null);

  gsap.registerPlugin(ScrollToPlugin);


  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger,);

    const horizontalSection = horizontalSectionRef.current;
    let board2_items = gsap.utils.toArray(".board2_item");
    // const smoother= ScrollSmoother.create({
    //   smooth: 0.2,
    //   content:"#home" ,
    //   normalizeScroll: true
    // });
    // Update ScrollSmoother effect on resize
    // Set up horizontal scrolling in the designated section
    gsap.to(board2_items, {
      xPercent: -100 * (board2_items.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalSection,
        scrub: 1,
        pin: true,
        // markers: true,
        anticipatePin: true,
        // scroller: container, // Use this if your container is scrollable
      },
    });

    const mainDiv = document.querySelector("#first-vid-trigger");
    const videoElement = bgVideoRef.current;

    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
      // ScrollTrigger.create({
      //   trigger: videoElement,
      //   pin: true,
      //   start: "top top",
      //   end: "+=500000",
      //   markers: true
      // });

      //set a tween that animate the video's currentTime from 0s to 42s
      let videoTweenTmp = gsap.fromTo(
        videoElement,
        {
          currentTime: 0,
        },
        {
          currentTime: 42,
          duration: 10,
          ease: "none",
          paused: true,
        }
      );
      //create a tween that animates the video's currentTime from 0 to 1
      let videoTween = gsap.to(videoTweenTmp, {
        duration: 1,
        ease: "power2",
        paused: true,
      });

      //create a ScrollTrigger that will update the videoTween's progress based on the scroll position
      ScrollTrigger.create({
        trigger: mainDiv,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          //update the videoTween's progress to match the scroll position
          videoTween.vars.progress = self.progress * 1;
          //ensure the tween invalidates/refreshes on the next render for smooth scrubbing
          videoTween.invalidate().restart();
        },
        scrub: 0.1,
        markers: true,
      });
      const board4 = document.querySelector(".board4");

      // Fade-out the video
      gsap.to(videoElement, {
        opacity: 0,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: board4,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
    }

    const chipVideoElement = chipVideoRef.current;
    const board5 = document.querySelector(".board5");
    if (chipVideoElement) {
      chipVideoElement.pause();
      chipVideoElement.currentTime = 0;
      let videoTweenTmp = gsap.fromTo(
        chipVideoElement,
        {
          currentTime: 0,
        },
        {
          currentTime: 20,
          duration: 20,
          ease: "none",
          paused: true,
          // markers: true,
        }
      );
      let videoTween = gsap.to(videoTweenTmp, {
        duration: 1,
        ease: "power2",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: board5,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          videoTween.vars.progress = self.progress * 1;
          videoTween.invalidate().restart();
        },
        scrub: true,
        // markers: true,
      });

      gsap.to(chipVideoElement, {
        opacity: 1,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: board5,
          start: "top 50%",
          end: "50% bottom",
          scrub: true,
          // markers: true,
        },
      });

      const lastItem = document.querySelector(".keysItem-last");

      // Fade-out the video
      gsap.to(chipVideoElement, {
        opacity: 0,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: lastItem,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
    }


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
          autoKill: true
        },
        duration: 3
      });
    }
  };

  const tokenomicsRef = useRef(null);
  const scrollToTokenomics = () => {
    if (tokenomicsRef.current) {
      gsap.to(window, {
        scrollTo: {
          y: tokenomicsRef.current,
          autoKill: true
        },
        duration: 3
      });
    }
  };


  // const fadeInRef = useRef(null);
  // useEffect(() => {
  //  下方渐入效果
  //   gsap.from(fadeInRef.current, {
  //     y: 200,
  //     opacity: 0,
  //     duration: 2,
  //     ease: 'power3.out'
  //   });
  // }, []);




  return (
    <>
      <Header scrollToUseCases={scrollToUseCases} scrollToTokenomics={scrollToTokenomics}></Header>
      <div className="home" id="home">
        <div id="bg-video-container" className="bg-video-container"   >
          <video
            ref={bgVideoRef}
            loop
            muted
            className="bg-video"
            src={video}
            preload="auto"
            type="video/mp4"
          ></video>
        </div>
        <div id="chip-video-container" className="bg-video-container">
          <video
            ref={chipVideoRef}
            loop
            muted
            autoPlay
            className="chip-video"
            src={chipVideo}
            preload="auto"
            type="video/mp4"
          ></video>
        </div>
        <div id="first-vid-trigger">
          <div className="board1">
            <div className="top">
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
          <div
            ref={horizontalSectionRef}
            style={{ overflowY: "auto", height: "100vh" }}
            className="board2"
          >
            <div style={{ width: "170vw", display: "flex", gap: "120px" }}>
              <div className="board2_item">
                <div className="item_info">
                  <img src={Board2_1} alt="icon" />
                  <div>
                    <h2>RWA-Tokenized Model</h2>
                    <span>
                      The RWA-tokenized model provides new revenue streams for
                      PinLink compared with existing DePIN marketplace models.
                    </span>
                  </div>
                </div>
              </div>
              <div className="board2_item">
                <div className="item_info">
                  <img src={Board2_2} alt="icon" />
                  <div>
                    <h2>The First Fractionalized Liquidity Layer for DePIN</h2>
                    <span>
                      PinLink opens the door for a huge opportunity to tokenize
                      and trade various DePIN assets.
                    </span>
                  </div>
                </div>
              </div>
              <div className="board2_item">
                <div className="item_info">
                  <img src={Board2_3} alt="icon" />
                  <div>
                    <h2>Deep Learning AI Powered Platform</h2>
                    <span>
                      Analyzes the performance of the DePIN ecosystem, as well
                      as tokenized GPUs, nodes, and other decentralized physical
                      assets.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="board3">
            <div></div>
            <div>
              <RandomizeText originalText={"THE FIRST AI DRIVEN"} interval={200} />
              <RandomizeText color={"#C1FF72"} originalText={"DEPIN LIQUIDITY LAYER"} interval={200} />
              <RandomizeText originalText={"WITH A FRACTIONALIZED"} interval={200} />
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
          <img
            className="mainImg"
            src={Board4}
            alt="icon"
          />
        </div>
        <div className="board5">
          <div className="title" style={{ width: "600px" }}>
            <img className="left" src={LeftImg} alt="icon" />
            <h2>Key Features</h2>
            <img className="right" src={RightImg} alt="icon" />
          </div>
          <div className="keyList">
            <div className="keysItem">
              <div className="step">
                <p>RWA-Tokenized DePIN Marketplace</p>
                <span>
                  At the heart of PinLink’s innovation lies our DePIN
                  RWA-Tokenization model. The RWA-Tokenized model reduces costs
                  for DePIN service users, creates more flexible monetization
                  options for DePIN asset owners, and offers opportunities for
                  individuals who do not own DePIN assets to earn a passive
                  income stream.
                </span>
              </div>
              <div></div>
            </div>
            <div className="keysItem">
              <div className="step">
                <p>Fractionalization & ERC1155 Tokens</p>
                <span>
                  By selling fractions of their NFTs, DePIN asset owners can
                  unlock the capital needed to purchase new assets from which
                  they can generate additional rental income, thus creating an
                  asset accumulation flywheel.
                  <br />
                  By purchasing fractions of NFTs, individuals who do not own
                  DePIN assets gain access to a share of the revenue from these
                  assets.
                </span>
              </div>
              <div></div>
            </div>
            <div className="keysItem keysItem-last">
              <div className="step">
                <p>Service User Rebate Model</p>
                <span>
                  Developers can acquire customized, low-latency, highly
                  reliable, scalable compute power on PinLink not only
                  effectively but also cost-efficiently, thanks to PinLink
                  Service User Rebate Model. In this Model, NFT sales generate
                  upfront capital payments, which are then invested in
                  generative, yield-bearing activities. These activities create
                  new revenue sources for PinLink ecosystem and offer rebates to
                  end users to lower their cost burden.
                </span>
              </div>
              <div></div>
            </div>
          </div>
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
      <Footer scrollToUseCases={scrollToUseCases} scrollToTokenomics={scrollToTokenomics}></Footer>
    </>
  );
}

export default App;
