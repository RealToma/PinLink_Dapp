// src/components/MobileNavbar.jsx
import { gsap } from "gsap";
import "./MobileNavbar.scss";
import "./index.module.scss";
import titleLogo from "@assets/imgs/index/logo_title.svg";
import { Link } from "react-router-dom";
import { useToaster } from "@context/ToasterContext";
import { PrimaryButton } from "../shared/PrimaryButton";

const MobileNavbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {Toast}=useToaster()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    animateMenuIcon(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      animateMenuIcon(false);
    }
  };

  const animateMenuIcon = (open) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.15, ease: "power4.inOut" },
    });
    if (open) {
      tl.to(".line1", { rotate: 45, y: 10, background: "#FAFAFA" })
        .to(".line2", { opacity: 0, background: "#FAFAFA" }, "<")
        .to(".line3", { rotate: -45, y: -7, background: "#FAFAFA" }, "<");
    } else {
      tl.to(".line1", { rotate: 0, y: 0, background: "#FAFAFA" })
        .to(".line2", { opacity: 1, background: "#FAFAFA" }, "<")
        .to(".line3", { rotate: 0, y: 0, background: "#FAFAFA" }, "<");
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".mobile-navbar") && menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="mobile-navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            {" "}
            <a href="/" className={"logo"}>
              <img src={titleLogo} alt="logo" />
            </a>
          </li>
          <li>
            <a onClick={props.scrollToAbout}>About</a>
          </li>
          <li>
            <a onClick={props.scrollToFeatures}>Features</a>
          </li>
          <li>
            <a onClick={props.scrollToUseCases}>Key Benefits</a>
          </li>
          <li>
            <a onClick={props.scrollToTokenomics}>Tokenomics</a>
          </li>
          {/* <li>
            <Link
              className="corner-border-button"
              to="/marketplace"
              rel="nofollow noopener noreferrer"
            >
              Enter dApp
            </Link>
          </li>
          <li>
            <Link className="button" to="/stake" rel="nofollow noopener noreferrer">
              Stake
            </Link>
          </li> */}
          <li>
              <PrimaryButton title="Enter dApp" onClick={()=>Toast.success("DApp Coming Soon")} />
           </li>
          <li>
            <div className="button" onClick={()=>Toast.success("Staking Coming Soon")} rel="nofollow noopener noreferrer">
              Stake
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
