import OwnerIcon from "@assets/imgs/dapp/owner_icon.png";
export const Card = ({ title, ownerId, price,img}) => {
  return (
    <div className="card flex flex-col gap-4">
      <div className="corner-fold-card" />
      {/* <div class="image-container"> */}
      <img src={img} alt="card Image" className="image" />
      {/* <div class="corner-fold-img-upper-right" />
        <div class="corner-fold-img-btm-left" /> */}
      {/* </div> */}
      <p className="font-['Orbitron'] text-base font-extrabold uppercase leading-snug text-white">
        {title}
      </p>
      <p className="font-['Sora'] text-2xl font-semibold text-white">
        {parseFloat(price).toFixed(4)} ETH
      </p>

      <div className="flex flex-col gap-2">
        <p className="font-['Sora'] text-xs font-normal leading-tight text-neutral-500">
          Owner
        </p>
        <div className="flex items-center gap-1">
          <img src={OwnerIcon} alt="Owner Icon" className="h-5 w-5" />
          <p className="font-['Sora'] text-sm font-normal leading-normal text-yellow-200 owner-name">
            @{ownerId}
          </p>
        </div>
      </div>
    </div>
  );
};
