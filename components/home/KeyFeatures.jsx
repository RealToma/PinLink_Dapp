import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {MOBILE_BREAKPOINT} from "../../utils/constants";
export const KeyFeatures = () => {
  useGSAP(() => {
    const width = window.innerWidth;

    const keysItems = gsap.utils.toArray(".keysItem");
    const board5 = document.querySelector(".board5");
    if(width<MOBILE_BREAKPOINT)
      {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: board5,
            start: "top 10%",
            end: "bottom bottom",
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        });

        // Add 2 extra items to the top and bottom of the list
        const totalItems=keysItems.length + 2
        const totalDuration = 12;
    
        // Move up animation
        tl.to(
          keysItems,
          {
            y: -1 * keysItems[0].offsetHeight * totalItems,
            duration:totalDuration
          }
        )
    
        // Fade up animation with stagger
        .to(
          keysItems,
          {
            opacity: 0,
            duration: 0.5,
            stagger: {
              each: totalDuration/totalItems,
            },
          },
          0 // Ensure it starts at the same time as the move up animation
        );
      
      }
      else
      {
        keysItems.forEach((item, i) => {
          const fadeInLeft = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              // markers: true,
              scrub: true,
            },
          });
          const tween = {
            opacity: 0,
            x: -100,
          };
          fadeInLeft
            .from(`#step-title-${i+1}`, tween, "start")
            .from(`#step-desc-${i+1}`, tween, "start+=0.2");
        });    
      }
   
    
  });
  return (
    <div className="keyList">
      <div className="keysItem" id="keyItems1">
        <p className="step-title" id="step-title-1">
          RWA-Tokenized DePIN Marketplace
        </p>
        <span className="step-desc" id="step-desc-1">
          At the heart of PinLink’s innovation lies our DePIN RWA-Tokenization
          model. The RWA-Tokenized model reduces costs for DePIN service users,
          creates more flexible monetization options for DePIN asset owners, and
          offers opportunities for individuals who do not own DePIN assets to
          earn a passive income stream.
        </span>
        <div></div>
      </div>
      <div className="keysItem" id="keyItems2">
        <p className="step-title" id="step-title-2">
          Fractionalization & ERC1155 Tokens
        </p>
        <span className="step-desc" id="step-desc-2">
          By selling fractions of their NFTs, DePIN asset owners can unlock the
          capital needed to purchase new assets from which they can generate
          additional rental income, thus creating an asset accumulation
          flywheel.
          <br />
          By purchasing fractions of NFTs, individuals who do not own DePIN
          assets gain access to a share of the revenue from these assets.
        </span>
        <div></div>
      </div>
      <div className="keysItem" id="keyItems3">
        <p className="step-title" id="step-title-3">
          Service User Rebate Model
        </p>
        <span className="step-desc" id="step-desc-3">
          Developers can acquire customized, low-latency, highly reliable,
          scalable compute power on PinLink not only effectively but also
          cost-efficiently, thanks to PinLink Service User Rebate Model. In this
          Model, NFT sales generate upfront capital payments, which are then
          invested in generative, yield-bearing activities. These activities
          create new revenue sources for PinLink ecosystem and offer rebates to
          end users to lower their cost burden.
        </span>
        <div></div>
      </div>
    </div>
  );
};
