import cardBg from "@assets/imgs/dapp/card.png";
import { PrimaryButton } from "../shared/PrimaryButton";
import classNames from "classnames";

export const CardList = ({ title, ownerId, price, img, isTitle,removeBottomBorder }) => {
  return (
    <div className={classNames("inline-flex  w-full flex-row items-center justify-between border-b border-neutral-800 bg-neutral-900 py-2",
      {
        "border-b-0": removeBottomBorder,
      }
    )}>
      <div className="flex w-[20%] items-center justify-start gap-4">
        {isTitle ? (
          <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-500">
            Item
          </p>
        ) : (
          <>
            <img src={img} alt="card list Image" className="w-12" />
            <p className="font-['Sora'] text-xs font-semibold leading-3 text-white">
              {title}
            </p>
          </>
        )}
      </div>
      {isTitle ? (
        <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-500">
          Price
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      ) : (
        <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-50">
          {parseFloat(price).toFixed(4)} ETH
        </p>
      )}

      {isTitle ? (
        <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-500">
          Avilability
        </p>
      ) : (
        <div className="inline-flex h-6 w-20 items-center justify-start gap-2 rounded bg-lime-300 px-1.5 py-1">
          <p className="font-['Sora'] text-sm font-semibold text-neutral-900">
            Available
          </p>
        </div>
      )}
      {isTitle ? (
        <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-500">
          Owner
        </p>
      ) : (
        <p className="font-['Sora'] text-sm font-normal leading-normal text-neutral-50">
          john.doe
        </p>
      )}

      {isTitle ? <div className="w-36" /> : <PrimaryButton title="BUY" />}
    </div>
  );
};
