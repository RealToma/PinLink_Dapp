import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
  // ScrollSmoother
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
