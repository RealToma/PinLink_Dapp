import gsap from "gsap";

import Board2_1 from "@assets/imgs/index/board2_1.svg";
import Board2_2 from "@assets/imgs/index/board2_2.svg";
import Board2_3 from "@assets/imgs/index/board2_3.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useScreenWidth } from "@context/ScreenWidthContext";

export const HorizontalFeat = () => {
  const horizontalSectionRef = useRef(null);
  const { isMobile } = useScreenWidth();

  useGSAP(() => {
    const horizontalSection = horizontalSectionRef.current;
    let board2_items = gsap.utils.toArray(".board2_item");
    if (isMobile) {
      board2_items.forEach((item, index) => {
        gsap.set(item, { marginBottom: "0vh" });
        if (index === 0) {
          gsap.set(item, { marginTop: "50vh" });
        }
        gsap.to(item, {
          opacity: 0,
          y: -item.innerHeight,
          scrollTrigger: {
            trigger: item,
            start: "top 50%",
            end: "top 0%",
            scrub: true,
          },
        });
      });
    } else {
      gsap.set(board2_items, { xPercent: 10 * (board2_items.length - 1) });
      // Set up horizontal scrolling in the designated section
      gsap.to(board2_items, {
        xPercent: -300 * (board2_items.length - 1),
        scrollTrigger: {
          trigger: horizontalSection,
          start: "top -15%",
          scrub: true,
          pin: true,
          // markers: true,
          anticipatePin: true,
        },
      });
    }
  });
  return (
    <div ref={horizontalSectionRef} className="board board2">
      <div className="board2_items">
        <div className="board2_item">
          <div className="item_info">
            <img src={Board2_1} alt="icon" />
            <div>
              <h2>RWA Tokenized DePIN Model</h2>
              <span>
              The RWA-tokenized DePIN model drives down costs for AI developers
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
              Fractionalized ownership of DePIN assets creates more flexible revenue streams for DePIN asset owners
              </span>
            </div>
          </div>
        </div>
        <div className="board2_item">
          <div className="item_info">
            <img src={Board2_3} alt="icon" />
            <div>
              <div>
                <h2>PinAI Performance Optimization Suite</h2>
                <span>
                Applies machine learning tools to optimize the outputs of DePIN assets for AI Developers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
