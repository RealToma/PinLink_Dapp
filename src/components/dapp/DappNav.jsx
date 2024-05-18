import titleLogo from "@assets/imgs/index/logo_title.svg";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../shared/PrimaryButton";

export const DappNav = () => {
  const connectWallet = () => {
    alert("Connect Wallet");
  };

  return (
    <div className="inline-flex py-4 w-screen items-center justify-start gap-52 px-20">
      <Link to="/" className="">
        <img src={titleLogo} alt="logo" />
      </Link>
      <input
        placeholder="Search Collection"
        className="placeholder:font-inter flex-1 rounded-md border border-neutral-800 bg-gray-950 py-2 pl-3 pr-14
        text-white placeholder:text-base placeholder:font-normal placeholder:leading-normal placeholder:text-white
        "
      />
      <PrimaryButton title="Connect Wallet" onClick={connectWallet} />
    </div>
  );
};
