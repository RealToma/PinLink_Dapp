import gsap from "gsap";

import Board2_1 from "../../src/assets/imgs/index/board2_1.svg";
import Board2_2 from "../../src/assets/imgs/index/board2_2.svg";
import Board2_3 from "../../src/assets/imgs/index/board2_3.svg";
import { useEffect, useRef } from "react";
export const HorizontalFeat = () => {
  const horizontalSectionRef = useRef(null);

  useEffect(() => {
    const horizontalSection = horizontalSectionRef.current;
    let board2_items = gsap.utils.toArray(".board2_item");

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
  }, []);
  return (
    <div
      ref={horizontalSectionRef}
      style={{ overflowY: "auto", height: "100vh" }}
      className="board board2"
    >
      <div style={{ width: "170vw", display: "flex", gap: "120px" }}>
        <div className="board2_item">
          <div className="item_info">
            <img src={Board2_1} alt="icon" />
            <div>
              <h2>RWA-Tokenized Model</h2>
              <span>
                The RWA-tokenized model provides new revenue streams for PinLink
                compared with existing DePIN marketplace models.
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
                PinLink opens the door for a huge opportunity to tokenize and
                trade various DePIN assets.
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
                Analyzes the performance of the DePIN ecosystem, as well as
                tokenized GPUs, nodes, and other decentralized physical assets.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
