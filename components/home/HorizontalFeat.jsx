import gsap from "gsap";

import Board2_1 from "@assets/imgs/index/board2_1.svg";
import Board2_2 from "@assets/imgs/index/board2_2.svg";
import Board2_3 from "@assets/imgs/index/board2_3.svg";
import {  useRef } from "react";
import { useGSAP } from "@gsap/react";
import {MOBILE_BREAKPOINT} from "../../utils/constants";


export const HorizontalFeat = () => {
  const horizontalSectionRef = useRef(null);

  useGSAP(() => {
    const horizontalSection = horizontalSectionRef.current;
    let board2_items = gsap.utils.toArray(".board2_item");
    const width = window.innerWidth;
    if(width<MOBILE_BREAKPOINT)
      {
       
        board2_items.forEach((item, index) => {
          gsap.set(item, {marginBottom:"100vh"});
          if(index===0)
            {
              gsap.set(item, {marginTop:"100vh"});
            }
          gsap.to(item, {
            opacity: 0,
            y:-item.innerHeight,
            scrollTrigger:{
              trigger:item,
              start: "top 50%",
              end: "top 0%",
              scrub:true,
            }
          });
        })

      }
      else
      {

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
    <div
      ref={horizontalSectionRef}
      className="board board2"
    >
      <div className="board2_items">
        <div className="board2_item">
          <div className="item_info">
            <img src={Board2_1} alt="icon" />
              <h2>RWA-Tokenized Model</h2>
              <span>
                The RWA-tokenized model provides new revenue streams for PinLink
                compared with existing DePIN marketplace models.
              </span>
            </div>
        </div>
        <div className="board2_item">
          <div className="item_info">
            <img src={Board2_2} alt="icon" />
              <h2>The First Fractionalized Liquidity Layer for DePIN</h2>
              <span>
                PinLink opens the door for a huge opportunity to tokenize and
                trade various DePIN assets.
              </span>
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
