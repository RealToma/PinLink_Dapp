import titleLogo from "@assets/imgs/index/logo_title.svg";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../shared/PrimaryButton";
import { useToaster } from "@context/ToasterContext";
import { useMemo } from "react";
export const DappNav = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const connectWallet = () => {
    Toast.success("Wallet connected successfully");
    setWalletAddress("0x7a9f3a422f2b9b1f0f5e862b4f2d58");
  };
  const shortAddress = useMemo(
    () =>
      walletAddress
        ? `${walletAddress.slice(0, 8)}...${walletAddress.slice(-5)}`
        : "Connect Wallet",
    [walletAddress],
  );
  const { Toast } = useToaster();

  return (
    <div className="inline-flex w-screen items-center justify-start gap-52 px-20 py-4">
      <Link to="/" className="">
        <img src={titleLogo} alt="logo" />
      </Link>
      <input
        placeholder="Search Collection"
        className="flex-1 rounded-md border border-neutral-800 bg-gray-950 py-2 pl-3 pr-14 text-white
        placeholder:font-inter placeholder:text-base placeholder:font-normal placeholder:leading-normal placeholder:text-white
        "
      />
      <PrimaryButton title={shortAddress} onClick={connectWallet} />
    </div>
  );
};
