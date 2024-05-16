import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Loader = () => {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;

    const videoElements = document.querySelectorAll("video");
    console.log('Video elements:', videoElements.length)
    const loadedVideos = [];

    const handleVideoLoaded = (e) => {
      console.log("loadeddata",e)
      loadedVideos.push(true);
      if (loadedVideos.length >= videoElements.length/2) {
        gsap.to(".preload", {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            document.documentElement.style.overflow = "auto";
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
      console.log('Video elementtt:', video);
      handleVideoError("error")
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
