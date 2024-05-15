import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

export const Loader = () => {
  useGSAP(() => {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;

    const videoElements = document.querySelectorAll("video");
    const loadedVideos = [];

    const handleVideoLoaded = () => {
      console.log('Video loaded');
      loadedVideos.push(true);
      if (loadedVideos.length === videoElements.length) {
        gsap.to(".preload", {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            document.documentElement.style.overflow = "auto";
            console.log('Loader hidden');
          },
        });
      }
    };

    const handleVideoError = (e) => {
      console.error('Video load error', e);
      // Consider a timeout to hide the loader after a reasonable wait time
      setTimeout(() => {
        gsap.to(".preload", {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            document.documentElement.style.overflow = "auto";
            console.log('Loader hidden due to error/timeout');
          },
        });
      }, 5000); // Adjust the timeout duration as necessary
    };

    videoElements.forEach((video) => {
      video.addEventListener("loadeddata", handleVideoLoaded);
      video.addEventListener("error", handleVideoError);
      video.preload = "auto";
      console.log('Video element:', video);
    });

    return () => {
      videoElements.forEach((video) => {
        video.removeEventListener("loadeddata", handleVideoLoaded);
        video.removeEventListener("error", handleVideoError);
      });
    };
  }, []);

  return (
    <>
      <div className="preload">
        <div className="loader"></div>
      </div>
    </>
  );
};
