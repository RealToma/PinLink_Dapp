import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScreenWidth } from "@context/ScreenWidthContext";
export const KeyFeatures = () => {
  const { isMobile } = useScreenWidth();

  useGSAP(() => {

    const keysItems = gsap.utils.toArray(".keysItem");
    const board5 = document.querySelector(".board5");
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: board5,
          start: "top 10%",
          end: "bottom bottom-=40%",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      // Add 2 extra items to the top and bottom of the list
      const totalItems = keysItems.length + 2;
      const totalDuration = 10;

      // Move up animation
      tl.to(keysItems, {
        y: -1 * keysItems[0].offsetHeight * totalItems,
        duration: totalDuration,
      })

        // Fade up animation with stagger
        .to(
          keysItems,
          {
            opacity: 0,
            duration: 0.5,
            stagger: {
              each: (totalDuration / totalItems)+(0.8),
            },
          },
          0, // Ensure it starts at the same time as the move up animation
        );
    } else {
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
          .from(`#step-title-${i + 1}`, tween, "start")
          .from(`#step-desc-${i + 1}`, tween, "start+=0.2");
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
        At the heart of PinLink’s innovation lies our DePIN RWA-Tokenization model. The RWA-Tokenized model reduces costs for AI developers, creates more flexible monetization options for DePIN asset owners, and offers opportunities for individuals who do not own DePIN assets to earn a passive income stream.
        </span>
        <div></div>
      </div>
      <div className="keysItem" id="keyItems2">
        <p className="step-title" id="step-title-2">
        Fractionalized RWA NFTs Representing DePIn Asset Ownership
        </p>
        <span className="step-desc" id="step-desc-2">
        By selling fractions of their RWA NFTs, DePIN asset owners can unlock the capital needed to purchase new assets from which they can generate additional rental income, thus creating an asset accumulation flywheel.
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
        Sales of RWA NFTs generate upfront capital payments, which are then invested in generative, yield-bearing activities. These activities create new revenue sources for the PinLink ecosystem that are used to offer rebates to AI developers, lowering their cost burden.
        </span>
        <div></div>
      </div>
    </div>
  );
};
