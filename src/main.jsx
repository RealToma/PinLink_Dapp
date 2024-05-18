import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { MOBILE_BREAKPOINT } from "./utils/constants.js";
import store from "./store/store";
import { Provider } from "react-redux";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, ScrollSmoother);
const width = window.innerWidth;
ScrollTrigger.normalizeScroll(false); // disable
ScrollSmoother.create({
  smooth: width < MOBILE_BREAKPOINT ? 0 : 2.5,
  // normalizeScroll: true,
  ignoreMobileResize: true,
  // normalizeScroll: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
