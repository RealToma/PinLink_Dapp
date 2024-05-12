import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Loader = () => {
  useGSAP(() => {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;

    const videoElements = document.querySelectorAll("video");
    const loadedVideos = [];

    const handleVideoLoaded = () => {
      loadedVideos.push(true);
      if (loadedVideos.length === videoElements.length) {
        gsap.to(".preload", {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            document.documentElement.style.overflow = "auto";
          },
        });
      }
    };

    videoElements.forEach((video) => {
      video.addEventListener("loadeddata", handleVideoLoaded);
      video.preload = "auto";
    });

    return () => {
      videoElements.forEach((video) => {
        video.removeEventListener("loadeddata", handleVideoLoaded);
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
