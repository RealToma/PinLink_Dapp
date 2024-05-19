import logo from "@assets/imgs/index/logo_title.svg";
import xLogo from "@assets/imgs/others/x.svg";
import tgLogo from "@assets/imgs/others/tg.svg";
import bookLogo from "@assets/imgs/others/book.svg";
export const DappFooter = () => {
  return (
    <div className="flex h-12 w-screen items-center justify-between bg-stone-950 px-20">
      <div className="flex items-center justify-start gap-6">
        <a href="/" target="_blank" rel="nofollow noopener noreferrer" className="mr-4">
          <img src={logo} alt="icon" />
        </a>
        <a
          href="https://x.com/pinlinknetwork"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={xLogo} alt="twitter-icon" />
        </a>
        <a
          href="https://pinlink.gitbook.io/pinlink"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img src={tgLogo} alt="tg-icon" />
        </a>
        <a
          href="https://pinlink.gitbook.io/pinlink"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img src={bookLogo} alt="gitbook-icon" />
        </a>
      </div>
      <div className="text-center font-['Sora'] text-xs font-extralight text-white">
        © 2024 PinLink • All Rights Reserved
      </div>
    </div>
  );
};
