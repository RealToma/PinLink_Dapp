import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

const TextEncapsulation = ({ text }) => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".text", { duration: 2, text: text, delay: 1 });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  return <p className="text"></p>;
};

export default TextEncapsulation;
