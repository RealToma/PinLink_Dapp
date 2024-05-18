import cardBg from "@assets/imgs/dapp/card.png";
import { PrimaryButton } from "../shared/PrimaryButton";

export const CardList = ({ title, ownerId, price, img }) => {
  return (
    <div className="flex-row  inline-flex w-full items-center justify-between border-b border-neutral-800 py-2 bg-pageBase">
      <img src={img} alt="card list Image" className="w-12" />
      <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-50">
        {parseFloat(price).toFixed(4)} ETH
      </p>
      <div className="inline-flex h-6 w-20 items-center justify-start gap-2 rounded bg-lime-300 px-1.5 py-1">
        <div className="font-['Sora'] text-sm font-semibold text-neutral-900">
          Available
        </div>
      </div>
      <div className="font-['Sora'] text-sm font-normal leading-normal text-neutral-50">
        john.doe
      </div>
      <PrimaryButton title="BUY" />
    </div>
  );
};
