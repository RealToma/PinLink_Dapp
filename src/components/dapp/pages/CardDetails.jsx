import { useParams, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@assets/icons/cheveron-left.svg";
import OwnerIcon from "@assets/imgs/dapp/owner_icon.png";
import { PrimaryButton } from "../../shared/PrimaryButton";
import CardImg from "@assets/imgs/dapp/card.png";

export default function CardDetails() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3">
      <div
        className="inline-flex h-8 w-16 cursor-pointer items-center justify-start"
        onClick={() => navigate(-1)}
      >
        <img src={ChevronLeftIcon} alt="back" />
        <div className="text-right font-['Sora'] text-lg font-light leading-loose text-neutral-500">
          Back
        </div>
      </div>
      <div className="flex gap-4 h-[26rem]">
        <div className="flex w-[23rem] flex-col items-start justify-start gap-3.5 rounded-lg border border-neutral-800 bg-stone-950 p-8">
        <div className="image-container" style={{backgroundImage:`url(${CardImg})`}}>     
       </div>
        </div>

        <div className="flex flex-1 flex-col rounded-md border border-neutral-800 bg-stone-950  p-6">
          <p className="font-['Sora'] text-3xl font-bold leading-10 text-white">
            MINING PC 2 GPU NVIDIA RTX 4060 Ti 16GB LHR
          </p>
          <div className="flex items-center gap-1">
            <img src={OwnerIcon} alt="Owner Icon" className="h-5 w-5" />
            <p className="owner-name font-['Sora'] text-sm font-normal leading-normal text-yellow-200">
              @avcde
            </p>
          </div>
          <p className=" font-['Sora'] text-base font-normal leading-normal text-neutral-500">
            Lorem ipsum dolor sit amet consectetur. Orci dui malesuada sit
            tellus. Lorem ipsum dolor sit amet consectetur. Orci dui malesuada
            sit tellus.Lorem ipsum dolor sit amet consectetur. Orci dui
            malesuada sit tellus.Lorem ipsum dolor sit amet consectetur. Orci
            dui malesuada sit tellus.Lorem ipsum dolor sit amet consectetur.
            Orci dui malesuada sit tellus.
          </p>
          <p className=" font-['Sora'] text-sm font-normal leading-normal text-neutral-500">
            Listed Time: 5 May 2024
          </p>
          <div className="mt-auto flex justify-between">
            <div className="flex flex-col">
              <p className="font-['Sora'] text-xs font-normal leading-tight text-neutral-500">
                Current price
              </p>
              <div className="flex items-center gap-3">
                <p className="font-['Sora'] text-2xl font-semibold leading-9 text-neutral-50">
                  4.53 ETH / 15,780 USDT
                </p>
                <p className="font-['Sora'] text-base font-normal leading-normal text-neutral-500">
                  ≈$15,790
                </p>
              </div>
            </div>
            <PrimaryButton title="BUY ASSET" />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="inline-flex  h-60 w-[23rem] flex-col items-start justify-start gap-2 rounded-md border border-neutral-800 bg-stone-950 opacity-90"></div>
        <div className="flex flex-1  flex-col items-center justify-start gap-2 rounded-md border border-neutral-800 bg-stone-950 opacity-90"></div>
      </div>
      <div className="inline-flex  h-60 w-full flex-col items-start justify-start gap-2 rounded-md border border-neutral-800 bg-stone-950 opacity-90"></div>

    </div>
  );
}
