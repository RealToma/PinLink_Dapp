import styles from "./index.module.scss";
import titleLogo from "@assets/imgs/index/logo_title.svg";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../shared/PrimaryButton";

export default function Header(props) {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.headMain}>
          <Link to="/" className={styles.logo}>
            <img src={titleLogo} alt="logo" />
          </Link>
          <div className={styles.menuList}>
            <div
              onClick={props.scrollToAbout}
              style={{ borderLeft: "none", paddingLeft: "0" }}
            >
              <span>About</span>
            </div>
            <div onClick={props.scrollToFeatures}>
              <span>Features</span>
            </div>
            <div onClick={props.scrollToUseCases}>
              <span>Key Benefits</span>
            </div>
            <div onClick={props.scrollToTokenomics}>
              <span>Tokenomics</span>
            </div>
          </div>
          <div className={styles.h5Menu}>
            <div className="flex-gap24">
              <Link to="/marketplace">
              <PrimaryButton title="Enter dApp" />
              </Link>
              <a className="button" href="/" rel="nofollow noopener noreferrer">
                Stake
              </a>
            </div>
          </div>
          <MobileNavbar
            scrollToAbout={props.scrollToAbout}
            scrollToFeatures={props.scrollToFeatures}
            scrollToUseCases={props.scrollToUseCases}
            scrollToTokenomics={props.scrollToTokenomics}
          />
        </div>
      </div>
    </>
  );
}
