import React, { createContext, useState, useEffect, useContext } from 'react';

export const DEVICE_TYPE = Object.freeze({
    MOBILE: 'mobile',
    TABLET: 'tablet',
    PC: 'pc',
    });

const ScreenWidthContext = createContext();

export const ScreenWidthProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState(DEVICE_TYPE.PC);
  // const [isMobile, setIsMobile] = useState(false);
const isMobile =window.innerWidth<768;
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      if (width < 768) {
        setDevice(DEVICE_TYPE.MOBILE);
      //  setIsMobile(true);
      } else if (width >= 768 && width < 1024) {
        setDevice(DEVICE_TYPE.TABLET);
       // setIsMobile(false);
      } else {
        setDevice(DEVICE_TYPE.PC);
       // setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenWidthContext.Provider value={{ screenWidth, device, isMobile }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

// Custom hook to use the ScreenWidthContext
export const useScreenWidth = () => {
  return useContext(ScreenWidthContext);
};
