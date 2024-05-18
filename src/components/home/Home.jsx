import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import { useGSAP } from "@gsap/react";

import Navbar from "@components/header/Navbar";
import Footer from "@components/footer";
import Carousel from "@components/home/Carousel";
import RandomizeText from "@components/home/RandomizeText";

import planetVideo from "@assets/vids/planet.mp4";

import Logo from "@assets/imgs/index/logo_title.svg";

import LeftImg from "@assets/imgs/index/left.svg";
import LeftImgMobile from "@assets/imgs/index/left_mobile.svg";
import RightImg from "@assets/imgs/index/right.svg";
import RightImgMobile from "@assets/imgs/index/right_mobile.svg";
import Board4 from "@assets/imgs/index/board4.png";
import Board4Mobile from "@assets/imgs/index/board4_mobile.png";
import { KeyFeatures } from "@components/home/KeyFeatures";
import { HorizontalFeat } from "@components/home/HorizontalFeat";
import { BackgroundVideo } from "@components/home/BackgroundVideo";
import { Tokennomics } from "@components/home/Tokennomics";
import { Loader } from "@components/shared/Loader";
import { Roadmap } from "@components/home/Roadmap";
import { MOBILE_BREAKPOINT } from "@utils/constants";
const Home = () => {
  const smoother = ScrollSmoother.get();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const useCasesRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const aboutRef = useRef(null);
  const featRef = useRef(null);

  const scrollTo = (ref, position = "top +=50") => {
    if (ref.current) {
      smoother.scrollTo(ref.current, 2, position);
    }
  };

  const scrollDown = () => {
    smoother.scrollTo(".board2", 15, "top -=10");
  };

  const fadeInRef = useRef(null);

  useGSAP(() => {
    const width = window.innerWidth;
    //下方渐入效果
    gsap.from(fadeInRef.current, {
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const titleElements = document.querySelectorAll(".title");

    titleElements.forEach((titleElement) => {
      const leftImg = titleElement.querySelector(
        width < MOBILE_BREAKPOINT ? ".titleLeftMobile" : ".titleLeft",
      );
      const rightImg = titleElement.querySelector(
        width < MOBILE_BREAKPOINT ? ".left" : ".titleRight",
      );
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

    const board4 = document.querySelector(".board4");
    const mainImg = document.querySelector(".mainImg");
    gsap.from(mainImg, {
      opacity: 0,
      scale: 0.3,
      scrollTrigger: {
        trigger: board4,
        start: "top bottom",
        end: "top 20%",
        scrub: true,
        //markers: true,
      },
    });

    const useCasesTitle = document.querySelector(".use-cases-title");
    const board6 = document.querySelector(".board6");
    const carouselItems = gsap.utils.toArray(
      ".react-responsive-3d-carousel__carousel__item.shadow",
    );

    gsap.from(useCasesTitle, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: board6,
        start: "top 20%",
        end: "top 0%",
        scrub: true,
      },
    });

    const planetVideoElement = document.querySelector(".planet-video");

    const board6TL = gsap.timeline({
      scrollTrigger: {
        trigger: board6,
        start: "top 40%",
        end: "top 15%",
        scrub: true,
      },
    });

    board6TL
      .from(
        planetVideoElement,
        {
          opacity: 0,
          scale: 0.8,
        },
        "start+=4",
      )
      .from(
        carouselItems,
        {
          opacity: 0,
          //x: -120,
          // scale: 0.6,
          stagger: 1.3,
        },
        "start",
      );
  });

  return (
    <>
     <Loader />
        <Navbar
          scrollToAbout={() => scrollTo(aboutRef)}
          scrollToFeatures={() => scrollTo(featRef, "top +=100")}
          scrollToUseCases={() => scrollTo(useCasesRef)}
          scrollToTokenomics={() => scrollTo(tokenomicsRef)}
        ></Navbar>
    <div id="smooth-wrapper">
      <div id="smooth-content">       
        <div className="home">
          <BackgroundVideo />
          <div id="first-vid-trigger">
            <div className="board board1">
              <div className="top" ref={fadeInRef}>
                <img src={Logo} alt="logo" className="pinlink-logo" />
                <p className="board1-title">The First RWA-Tokenized DePIN Marketplace</p>
                <span className="board1-desc">
                Driving Down Costs For AI Developers & Creating New Revenue Streams For DePIN Asset Owners
                </span>
                <div className="arrow-down" onClick={scrollDown}></div>
              </div>
              <div className="bottom">
                <div className="bottom-text">RWA-Fractionization</div>
                <div className="bottom-text">DePIN-Tokenization</div>
                <div className="bottom-text">Powered by AI</div>
              </div>
            </div>

            <HorizontalFeat />

            <div className="board board3">
              <div className="randomize-text-wrapper">
                <RandomizeText
                  originalText={"PinAI Suite optimizes"}
                  interval={200}
                />
                <RandomizeText
                  color={"#C1FF72"}
                  originalText={"resource management"}
                  interval={200}
                />             
                <RandomizeText originalText={"for high performance "} interval={200} />
                <RandomizeText originalText={"computing"} interval={200} />
                <RandomizeText originalText={"and cloud storage."} interval={200} />
              </div>
            </div>
          </div>
          <div className="board4" ref={aboutRef}>
            <div className="title">
              <img className="titleLeft" src={LeftImg} alt="icon" />
              <img className="titleLeftMobile" src={LeftImgMobile} alt="icon" />
              <h2>HOW DOES PINLINk WORK</h2>
              <img className="titleRight" src={RightImg} alt="icon" />
              <img
                className="titleRightMobile"
                src={RightImgMobile}
                alt="icon"
              />
            </div>
            <img className="mainImg" src={Board4} alt="icon" />
            <img className="mainImgMobile" src={Board4Mobile} alt="icon" />
          </div>
          <div className="board5" ref={featRef}>
            <div className="title">
              <img className="titleLeft" src={LeftImg} alt="icon" />
              <img className="titleLeftMobile" src={LeftImgMobile} alt="icon" />
              <h2>Key Features</h2>
              <img className="titleRight" src={RightImg} alt="icon" />
              <img
                className="titleRightMobile"
                src={RightImgMobile}
                alt="icon"
              />
            </div>

            <KeyFeatures />
          </div>
          <Roadmap />
          <div className="board6" ref={useCasesRef}>
            <div className="title">
              <img className="titleLeft" src={LeftImg} alt="icon" />
              <img className="titleLeftMobile" src={LeftImgMobile} alt="icon" />
              <h2>Key Benefits</h2>
              <img className="titleRight" src={RightImg} alt="icon" />
              <img
                className="titleRightMobile"
                src={RightImgMobile}
                alt="icon"
              />
            </div>
            <p className="info use-cases-title">
              By bringing RWA-tokenization dynamics to the DePIN sector, PinLink
              achieves several key benefits
            </p>
            <video
              loop
              muted
              autoPlay
              playsInline
              className="bg-video planet-video"
              src={planetVideo}
              preload="auto"
              type="video/mp4"
            >
              {" "}
              Your browser does not support the video tag.
            </video>
            <Carousel />
          </div>
          <div className="board7" ref={tokenomicsRef}>
            <div className="title">
              <img className="titleLeft" src={LeftImg} alt="icon" />
              <img className="titleLeftMobile" src={LeftImgMobile} alt="icon" />
              <h2>Tokenomics</h2>
              <img className="titleRight" src={RightImg} alt="icon" />
              <img
                className="titleRightMobile"
                src={RightImgMobile}
                alt="icon"
              />
            </div>
            <Tokennomics />
          </div>
        </div>
        <Footer
          scrollToAbout={() => scrollTo(aboutRef)}
          scrollToFeatures={() => scrollTo(featRef, "top +=100")}
          scrollToUseCases={() => scrollTo(useCasesRef)}
          scrollToTokenomics={() => scrollTo(tokenomicsRef)}
        ></Footer>
      </div>
    </div>
    </>
  );
};
export default Home;
