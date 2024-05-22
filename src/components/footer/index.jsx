import styles from "./index.module.scss";
import logo from "@assets/imgs/index/logo_title.svg";
import xLogo from "@assets/imgs/others/x.svg";
import tgLogo from "@assets/imgs/others/tg.svg";
import bookLogo from "@assets/imgs/others/book.svg";

export default function Footer(props) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerMain}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="logo" />
          </a>
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
          <div className={`${styles.linkList} ${"flex-gap24"}`}>
            <a
              href="https://x.com/pinlinkai"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img src={xLogo} alt="icon" />
            </a>
            <a
              href="https://pinlink.gitbook.io/pinlink"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img src={tgLogo} alt="icon" />
            </a>
            <a
              href="https://pinlink.gitbook.io/pinlink"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img src={bookLogo} alt="icon" />
            </a>
          </div>
        </div>
        <p>© 2024 PinLink • All Rights Reserved</p>
      </div>
    </>
  );
}
