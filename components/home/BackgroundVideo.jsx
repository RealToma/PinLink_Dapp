import video from "../../src/assets/vids/mac.mp4";
import chipVideo from "../../src/assets/vids/chip-animation.webm";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const BackgroundVideo = () => {
  const bgVideoRef = useRef(null);
  const chipVideoRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(
        ScrollTrigger,       
      );
      
    const mainDiv = document.querySelector("#first-vid-trigger");
    const videoElement = bgVideoRef.current;

    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
      // ScrollTrigger.create({
      //   trigger: videoElement,
      //   pin: true,
      //   start: "top top",
      //   end: "+=500000",
      //   markers: true
      // });

      //set a tween that animate the video's currentTime from 0s to 42s
      let videoTweenTmp = gsap.fromTo(
        videoElement,
        {
          currentTime: 0,
        },
        {
          currentTime: 42,
          duration: 10,
          ease: "none",
          paused: true,
        }
      );
      //create a tween that animates the video's currentTime from 0 to 1
      let videoTween = gsap.to(videoTweenTmp, {
        duration: 1,
        ease: "power2",
        paused: true,
      });

      //create a ScrollTrigger that will update the videoTween's progress based on the scroll position
      ScrollTrigger.create({
        trigger: mainDiv,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          //update the videoTween's progress to match the scroll position
          videoTween.vars.progress = self.progress * 1;
          //ensure the tween invalidates/refreshes on the next render for smooth scrubbing
          videoTween.invalidate().restart();
        },
        scrub: 0.1,
        //markers: true,
      });
      const board4 = document.querySelector(".board4");

      // Fade-out the video
      gsap.to(videoElement, {
        opacity: 0,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: board4,
          start: "top bottom",
          end: "bottom bottom",
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
          currentTime: 20,
          duration: 20,
          ease: "none",
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

      gsap.to(chipVideoElement, {
        opacity: 1,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: board5,
          start: "top 50%",
          end: "50% bottom",
          scrub: true,
          // markers: true,
        },
      });

      const lastItem = document.querySelector(".keysItem-last");

      // Fade-out the video
      gsap.to(chipVideoElement, {
        opacity: 0,
        duration: 1,
        paused: true,
        scrollTrigger: {
          trigger: lastItem,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers: true,
        },
      });
    }
  }, []);
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
