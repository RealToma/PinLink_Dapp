import LeftImg from "@assets/imgs/index/left.svg";
import LeftImgMobile from "@assets/imgs/index/left_mobile.svg";
import RightImg from "@assets/imgs/index/right.svg";
import RightImgMobile from "@assets/imgs/index/right_mobile.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { useScreenWidth } from "@context/ScreenWidthContext";

export const Roadmap = () => {
  const { isMobile } = useScreenWidth();

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
          imageData.data[c] = 145;
          imageData.data[c + 1] = 191;
          imageData.data[c + 2] = 86;
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
        start: isMobile? "top top+=42%" : "top top+=100",
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
          anticipatePin:2,
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
          0,
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
      0,
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
      0,
    );
  });

  const roadmaps = [
    {
      phase: 1,
      titles: ["Only Protocol-Owned DePIN Assets Accepted"],
    },
    {
      contents:
        "Initially, only protocol-owned DePIN assets will be accepted on the PinLink marketplace. This serves two purposes. Firstly, it allows PinLink to prove out and optimize the unique RWA-tokenized DePIN marketplace model so that 3rd party DePIN asset owners can use it with confidence. Secondly, it ensures that the process of ensuring all assets are enterprise-grade and scalable easier during the onboarding of initial clients.",
    },
    {
      phase: 2,
      titles: ["Opening Up PinLink To Third Party DePIN Asset Owners"],
    },
    {
      contents:
        "Once the model has been proven out and PinLink has a detailed understanding of Service User technical requirements, Stage 2 will involve allowing third party DePIN asset owners to connect their devices to the PinLink network. 3rd party DePIN asset owners will need to pass PinLink’s in-depth asset vetting process to ensure that the asset is enterprise grade and meets the specific present need of the PinLink client base.",
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
                {roadmap.titles&&roadmap.titles.map((title, index) => {
                  return (
                    <div className="roadmap-subtitle" key={index}>
                      {title}
                    </div>
                  );
                })}

                {roadmap.contents && (
                  <span className="roadmap-desc">{roadmap.contents}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
