import LeftImg from "../../src/assets/imgs/index/left.svg";
import LeftImgMobile from "../../src/assets/imgs/index/left_mobile.svg";
import RightImg from "../../src/assets/imgs/index/right.svg";
import RightImgMobile from "../../src/assets/imgs/index/right_mobile.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { MOBILE_BREAKPOINT } from "../../utils/constants";

export const Roadmap = () => {
  useEffect(() => {
    var canvas = document.body.querySelector("canvas"),
      ctx = canvas.getContext("2d", { willReadFrequently: true }),
      W = (canvas.width = window.innerWidth),
      H = (canvas.height = window.innerHeight),
      pixels = [];

    for (var x = -400; x < 400; x += 5) {
      for (var z = -250; z < 250; z += 5) {
        pixels.push({ x: x, y: 100, z: z });
      }
    }

    function render(ts) {
      var imageData = ctx.getImageData(0, 0, W, H),
        len = pixels.length,
        fov = 250,
        pixel,
        scale,
        x2d,
        y2d,
        c;

      for (var i = 0; i < len; i++) {
        pixel = pixels[i];
        scale = fov / (fov + pixel.z);
        x2d = pixel.x * scale + W / 2;
        y2d = pixel.y * scale + H / 2;
        if (x2d >= 0 && x2d <= W && y2d >= 0 && y2d <= H) {
          c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
          imageData.data[c] = 193;
          imageData.data[c + 1] = 255;
          imageData.data[c + 2] = 114;
          imageData.data[c + 3] = 255;
        }
        pixel.z -= 0.4;
        pixel.y = H / 14 + Math.sin((i / len) * 15 + ts / 450) * 10;
        if (pixel.z < -fov) pixel.z += 2 * fov;
      }
      ctx.putImageData(imageData, 0, 0);
    }

    (function drawFrame(ts) {
      requestAnimationFrame(drawFrame, canvas);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);
      render(ts);
    })();
  }, []);

  useGSAP(() => {
    const roadmapSections = gsap.utils.toArray(".roadmap-section");
    const progress = document.querySelector(".progress");
    const width = window.innerWidth;
    var canvas = document.body.querySelector("canvas");

    // Create a master timeline
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".roadmap",
        start: width < MOBILE_BREAKPOINT ? "top top+=220" : "top top+=100",
        end: () => "+=" + roadmapSections.length * window.innerHeight * 0.4,
        pin: true,
        scrub: true,
        //markers: true,
      },
    });

    let totalHeight = 0;

    roadmapSections.forEach((section, index) => {
      const sectionHeight = section.offsetHeight;
      if (index > 0) totalHeight += roadmapSections[index - 1].offsetHeight;

      // Create a timeline for each section
      const sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: index === 0 ? "bottom top-=200" : "bottom top-=100", // Make first section fade out earlier
          scrub: true,
          //markers: true
        },
      });

      // Move section up
      sectionTimeline.to(section, {
        y: -totalHeight,
        duration: 1,
      });

      // Fade out and move right the previous section
      if (index > 0) {
        sectionTimeline.to(
          roadmapSections[index - 1],
          {
            x: 300,
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
          },
          0
        ); // This makes the fade-out animation scrubbed as well
      }

      // Add section timeline to master timeline
      masterTimeline.add(sectionTimeline, index);
    });
    // Add progress bar animation to the master timeline
    masterTimeline.to(
      progress,
      {
        height: "100%",
        ease: "none",
        duration: roadmapSections.length, // Ensure it lasts the duration of all sections
      },
      0
    );
    gsap.from(
      canvas,
      {
        height: "0%",
        width: "80%",
        opacity: 0.3,
        scrollTrigger: {
          trigger: ".roadmap",
          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },
      },
      0
    );
  });

  const roadmaps = [
    {
      phase: 1,
      titles: ["Protocol-Owned DePIN Assets Accepted"],
      contents: [
        "GPU/TPU/CPU for AI developers",
        "GPU for blockchain miners",
        "Cloud computing capacity for App/dApp developers",
      ],
    },
    {
      titles: [
        "PinLink Platform Beta Launch",
        "Generate Profit and Prove MVP & Business Model",
        "Reinvest In More DePIN Assets to Grow the Network",
      ],
    },
    {
      phase: 2,
      titles: ["Activate Phase 2 Marketing Plans"],
    },
    {
      titles: ["Activate Phase 2 Marketing Plans"],
      contents: [
        "Decentralized sensors for IoT applications",
        "Wireless network capacity for consumers",
      ],
    },
  ];

  return (
    <div className="roadmap">
      <canvas id="bg-animation"></canvas>
      <div className="title">
        <img className="titleLeft" src={LeftImg} alt="icon" />
        <img className="titleLeftMobile" src={LeftImgMobile} alt="icon" />
        <h2>ROADMAP</h2>
        <img className="titleRight" src={RightImg} alt="icon" />
        <img className="titleRightMobile" src={RightImgMobile} alt="icon" />
      </div>
      <div className="roadmap-wrapper">
        <div className="progress-bar-container">
          <div className="circle start-circle">1</div>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="circle end-circle">2</div>
        </div>
        <div className="roadmap-sections">
          {roadmaps.map((roadmap, index) => {
            return (
              <div className="roadmap-section" key={index}>
                {roadmap.phase && (
                  <div className="roadmap-title">
                    <span>Phase {roadmap.phase}</span>
                  </div>
                )}
                {roadmap.titles.map((title, index) => {
                  return (
                    <div className="roadmap-subtitle" key={index}>
                      {title}
                    </div>
                  );
                })}
                <ul>
                  {roadmap.contents &&
                    roadmap.contents.map((content, index) => {
                      return (
                        <li className="roadmap-desc" key={index}>
                          {content}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
