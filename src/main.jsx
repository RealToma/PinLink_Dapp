import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { MOBILE_BREAKPOINT } from "../utils/constants.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, ScrollSmoother);
const width = window.innerWidth;
ScrollSmoother.create({
  smooth: width < MOBILE_BREAKPOINT ? 0 : 2.5,
  // normalizeScroll: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
