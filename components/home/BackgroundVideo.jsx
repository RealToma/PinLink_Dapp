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
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    const smoother=ScrollSmoother.create({
      smooth:0,
      onUpdate:(scroll)=>{
       // console.log(scroll.progress)
      }
    });

    const mainDiv = document.querySelector("#first-vid-trigger");
    const videoElement = bgVideoRef.current;
    
    if (videoElement) {

      // ScrollTrigger.create({
      //   trigger:videoElement,
      //   pin: true,
      //   start: "top top",
      //   end: "+=50000",
      // })

      // ScrollTrigger.create({
      //   trigger:chipVideoRef.current,
      //   pin: true,
      //   start: "top top",
      //   end: "+=50000",
      // })
  

      videoElement.pause();
      videoElement.currentTime = 0;

      const bgVideoSegments = [0, 5, 8, 14, 22];
      let sections = gsap.utils.toArray(".board");
      const videoTweenTmp = gsap.fromTo(
        videoElement,
        { currentTime: bgVideoSegments[0] },
        {
          currentTime: bgVideoSegments[sections.length],
          duration: bgVideoSegments[sections.length],
          ease: "none",
          paused: true,
        }
      );
      const videoTween = gsap.to(videoTweenTmp, {
        duration: 1,
        ease: "power2",
        paused: true,
      });

      sections.forEach((step, i) => {
        let segmentLength = bgVideoSegments[i + 1] - bgVideoSegments[i],
          inc = segmentLength / bgVideoSegments[sections.length];

        step.style.height = 100 + "vh";

        let starting;

        if (i == 0) {
          starting = "top 120%";
        } else {
          starting = "top bottom";
        }

        ScrollTrigger.create({
          trigger: step,
          start: starting,
          end: "bottom top",
          onUpdate: (self) => {
            console.log(self.progress)
            videoTween.vars.progress =
              bgVideoSegments[i] / bgVideoSegments[sections.length] +
              self.progress * inc;
            videoTween.invalidate().restart();
          },
          // markers: true,
        });
      });

      //   // Fade-out the video
      gsap.to(videoElement, {
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
      chipVideoElement.currentTime = 0;
      let videoTweenTmp = gsap.fromTo(
        chipVideoElement,
        {
          currentTime: 0,
        },
        {
          currentTime: 4,
          duration: 4,
          paused: true,
          // markers: true,
        }
      );
      let videoTween = gsap.to(videoTweenTmp, {
        duration: 1,
        ease: "power2",
        paused: true,
      });

      ScrollTrigger.create({
        trigger: board5,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          videoTween.vars.progress = self.progress * 1;
          videoTween.invalidate().restart();
        },
        scrub: true,
        // markers: true,
      });
      const fadeInOutTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: board5,
          start: "top 20%",
          end: "bottom 60%",
          scrub: true,
        },
      });
      fadeInOutTimeLine
        .to(chipVideoElement, { opacity: 1}, "start")
        .to(chipVideoElement, { opacity: 0}, "start+=5");
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
