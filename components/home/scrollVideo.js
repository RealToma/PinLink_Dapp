import React, { useRef, useEffect, useState } from 'react';

function ScrollVideo({ src }) {
  const videoRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [type, setType] = useState(0);

  let rewindInterval;

  const startRewind = () => {
    rewindInterval = setInterval(function () {
      if (videoRef.current.currentTime == 0) {
        clearInterval(rewindInterval);
      } else {
        videoRef.current.currentTime -= 0.01;  // 每次回退0.1秒
      }
    }, 100);  // 每30毫秒执行一次
  }

  const stopRewind = () => {
    clearInterval(rewindInterval);
  }

  const handleScroll = () => {
    if (!videoRef.current) return;

    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // 下拉，正常播放
      videoRef.current.playbackRate = 1;
      videoRef.current.play();
      setType(0)
    } else {
      // debugger
      // videoRef.current.currentTime -= 0.01;  // 每次事件减少0.1秒
      // startRewind()
      setType(1)
    }
    setLastScrollTop(scrollTop);

    // 滚动停止时暂停播放
    clearTimeout(scrollTimeout);

    const newTimeout = setTimeout(() => {
      videoRef.current.pause();
      setType(2)
    }, 150); // 150ms后暂停
    setScrollTimeout(newTimeout);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollTop, scrollTimeout]);


  // useEffect(() => {
  //   if (type == 1) {
  //     startRewind()
  //   } else {
  //     stopRewind()
  //   }
  // }, [type])

  return (
    <video ref={videoRef} style={{ "width": "100vw", "height": "calc(100vh - 80px)" }} muted loop>
      <source src={src} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

export default ScrollVideo;
