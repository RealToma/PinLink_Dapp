import video from "../../src/assets/vids/gpu.mp4";
import chipVideo from "../../src/assets/vids/chip.mp4";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export const BackgroundVideo = () => {
  const bgVideoRef = useRef(null);
  const chipVideoRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const mainDiv = document.querySelector("#first-vid-trigger");
    const graphicVideoElement = bgVideoRef.current;

    if (graphicVideoElement) {
      ScrollTrigger.create({
        trigger: graphicVideoElement,
        pin: true,
        start: "top top",
        end: "+=50000",
      });

      ScrollTrigger.create({
        trigger: chipVideoRef.current,
        pin: true,
        start: "top top",
        end: "+=50000",
      });

      graphicVideoElement.pause();
      graphicVideoElement.currentTime = 0;

      let graphicCardVideoTL = gsap.timeline({
        scrollTrigger: {
          trigger: mainDiv,
          start: "top top",
          end: "bottom+=200% bottom",
          scrub: true,
          // markers: true,
        },
      });

      // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for long videos
      graphicVideoElement.onloadedmetadata = function () {
        graphicCardVideoTL.to(graphicVideoElement, {
          currentTime: graphicVideoElement.duration,
        });
      };
      let sections = gsap.utils.toArray(".board");
      //   // Fade-out the video
      gsap.to(graphicVideoElement, {
        opacity: 0,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: sections[sections.length - 1],
          start: "top top",
          end: "bottom 50%",
          scrub: true,
          // markers: true,
        },
      });
    }

    const chipVideoElement = chipVideoRef.current;
    const board5 = document.querySelector(".board5");
    if (chipVideoElement) {
      chipVideoElement.pause();
      chipVideoElement.currentTime = 0.3;
      let chipVideoTL = gsap.timeline({
        scrollTrigger: {
          trigger: board5,
          start: "top top",
          end: "bottom+=120% bottom",
          scrub: true,
          //markers: true,
        },
      });

      // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for long videos
      chipVideoElement.onloadedmetadata = function () {
        chipVideoTL.to(chipVideoElement, {
          currentTime: chipVideoElement.duration,
          repeat: 1,
          repeatDelay: 0,
        });
      };
      const fadeInOutTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: board5,
          start: "top 20%",
          end: "bottom 60%",
          scrub: true,
        },
      });
      fadeInOutTimeLine
        .to(chipVideoElement, { opacity: 1, x: 0 }, "start")
        .to(chipVideoElement, { opacity: 0, x: 100 }, "start+=5");
    }
  });
  return (
    <>
      <div id="bg-video-container" className="bg-video-container">
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
    </>
  );
};
