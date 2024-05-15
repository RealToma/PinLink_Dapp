import Token from "../../src/assets/imgs/index/token.svg";
import About from "../../src/assets/imgs/index/about.png";
import Charts from "../../src/assets/imgs/index/charts.png";
import Color1 from "../../src/assets/imgs/index/color1.svg";
import Color2 from "../../src/assets/imgs/index/color2.svg";
import Color3 from "../../src/assets/imgs/index/color3.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TokenDistributions from "./TokenDistributions";
import { MOBILE_BREAKPOINT } from "../../utils/constants";

export const Tokennomics = () => {
  useGSAP(() => {
    const width = window.innerWidth;
    const board7 = document.querySelector(".board7");
    const tokenImg = document.querySelector("#token-img");
    const chartImg = document.querySelector("#chart-img");
    const tokenDescs = gsap.utils.toArray(".token-desc");
    const chartDescs = gsap.utils.toArray(".chart-desc");
    const imgs = [chartImg, tokenImg];
    const texts = [chartDescs, tokenDescs];
    const tokenImgTl = gsap.timeline({
      scrollTrigger: {
        trigger: board7,
        start: width<MOBILE_BREAKPOINT?"top bottom":"top 50%",
        end: width<MOBILE_BREAKPOINT?"top 50%":"top 0%",
        scrub: true,
      },
    });
    imgs.forEach((img) => {
      tokenImgTl
        .from(img, {
          scale: 0.7,
          rotation: -15,
          opacity: 0,
        })
        .to(img, {
          scale: 1,
          rotation: 0,
          opacity: 1,
        })
        .to(img, {
          scale: 1.2,
          rotation: 25,
        })
        .to(img, {
          scale: 1,
          rotation: 0,
        });
    });

    const tokenTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: board7,
        start: "top 50%",
        end: "top 0%",
        scrub: true,
      },
    });

    texts.forEach((text) => {
      tokenTextTl.from(text, {
        opacity: 0,
        x: -50,
        stagger: 0.6,
      });
    });

    const aboutLeft = document.querySelector("#about-left");
    const aboutRight = document.querySelector("#about-right");
    const about = document.querySelector(".about");

    const aboutTrigger = {
      trigger: about,
      start: "top bottom",
        end: "bottom 70%",
      scrub: true,
    };

    gsap.from(aboutLeft, {
      opacity: 0,
      x: -100,
      scrollTrigger: aboutTrigger,
    });
    gsap.from(aboutRight, {
      opacity: 0,
      x: 100,
      scrollTrigger: aboutTrigger,
    });
  });

  return (
    <div  className="tokenomics-wrapper">
      <div className="tokenomics">
        <div className="left">
          <div className="charts">
             <img id="chart-img" src={Charts} alt="icon" />
             {/* <TokenDistributions/>  */}
          </div>
          <div className="info">
          <div className="chart-desc">
              <img src={Color3} alt="icon" />
              Uniswap LP: 85%
            </div>
            
            <div className="chart-desc">
              <img src={Color2} alt="icon" />
              Staking Emissions: 10%
            </div>
            <div className="chart-desc">
              <img src={Color1} alt="icon" />
              CEX Reserve: 5%
            </div>
          </div>
        </div>
        <div className="right">
          <div className="main">
            <div className="tokenBg">
              <p>PINKLink</p>
              <p>$Pin Token</p>
            </div>
            <img id="token-img" src={Token} alt="icon" />
          </div>
          <div className="info">
            <div className="token-desc">
              <p>1</p>Ticker: $PIN
            </div>
            <div className="token-desc">
              <p>2</p>Supply: 100,000,000
            </div>
            <div className="token-desc">
              <p>3</p>Network: Ethereum
            </div>
            <div className="token-desc">
              <p>4</p>Token Standard: ERC-20*
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-left" id="about-left">
          <p>
            Learn More About How PinLink Combines and Unleashes the Full
            Potential of RWA & DePIN.
          </p>
          <a href="https://pinlink.gitbook.io/pinlink" target="_blank" className="button green">
            Read Docs
          </a>
        </div>
        <img src={About} alt="icon"  className="about-right" id="about-right"/>
        
      </div>
    </div>
  );
};
