import gpuVideo from "@assets/vids/gpu.mp4";
import gpuVideoMobile from "@assets/vids/gpu_mobile.mp4";
import chipVideo from "@assets/vids/chip.mp4";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {MOBILE_BREAKPOINT} from "../../utils/constants";


export const BackgroundVideo = () => {
  const chipVideoRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const width = window.innerWidth;
    const mainDiv = document.querySelector("#first-vid-trigger");
    const pcVideo = document.querySelector(".bg-video.pc");
    const mobileVideo = document.querySelector(".bg-video.mobile");

    let graphicVideoElement
    if(width<MOBILE_BREAKPOINT){
      graphicVideoElement=mobileVideo
      pcVideo.style.display = "none";
    }
    else{
      graphicVideoElement=pcVideo
      mobileVideo.style.display = "none";

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

    }
    if (graphicVideoElement) {
 
      graphicVideoElement.play().then(() => {
        graphicVideoElement.pause();
        graphicVideoElement.currentTime = 0;
      })


      let graphicCardVideoTL = gsap.timeline({
        scrollTrigger: {
          trigger: mainDiv,
          start: "top top",
          end: width<MOBILE_BREAKPOINT?"bottom+=50% bottom":"bottom+=200% bottom",
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
          //markers: true,
        },
      });
    }

    const chipVideoElement = chipVideoRef.current;
    const board5 = document.querySelector(".board5");
    if (chipVideoElement &&!(width<MOBILE_BREAKPOINT)) {
      chipVideoElement.play().then(() => {
        chipVideoElement.pause();
        chipVideoElement.currentTime = 0;
      })

      let chipVideoTL = gsap.timeline({
        scrollTrigger: {
          trigger: board5,
          start: "top 10%",
          end: "bottom top+=-200",
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
        .to(chipVideoElement, { opacity: 0}, "start+=5");
    }
  });
  return (
    <>
      <div id="bg-video-container" className="bg-video-container">
        <video
          loop          
          playsInline
          muted
          className="bg-video pc"
          src={gpuVideo}
          preload="metadata"
          type="video/mp4"
        >  Your browser does not support the video tag.</video>
        <video
          loop
          muted          
          playsInline
          className="bg-video mobile"
          src={gpuVideoMobile}
          preload="metadata"
          type="video/mp4"
        >  Your browser does not support the video tag.</video>
      </div>
      <div id="chip-video-container" className="bg-video-container">
        <video
          ref={chipVideoRef}
          loop          
          playsInline
          muted
          className="chip-video"
          src={chipVideo}
          preload="metadata"
          type="video/mp4"
        >   Your browser does not support the video tag.</video>
      </div>
    </>
  );
};
