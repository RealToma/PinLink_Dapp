import banner1 from "@assets/imgs/dapp/banner1.png";
import banner2 from "@assets/imgs/dapp/banner2.png";
import banner3 from "@assets/imgs/dapp/banner3.png";
import classNames from "classnames";
const Banner = ({ title, desc, img }) => {
  return (
    <div className="flex h-60 w-full flex-row items-center justify-between border border-neutral-700 bg-stone-950 pl-12">
      <div className="flex flex-col gap-4">
        <p className=" font-['Orbitron'] text-3xl font-extrabold uppercase leading-9 text-white">
          {title}
        </p>
        <p className=" font-['Sora'] text-sm font-normal leading-normal text-white">
          {desc}
        </p>
      </div>
      <img src={img} alt="banner1" className="h-full" />
    </div>
  );
};

export const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const banners = [
    {
      title: "Explore a Diverse Range of Assets",
      desc: "From GPUs and nodes to storage and computing power, our marketplace offers a diverse array of DePIN assets for you to explore.",
      img: banner1,
    },
    {
      title: "Tokenize your DePin Assets",
      desc: "Tokenize Your Assets with PinLink, tokenizing your DePIN assets has never been easier. Our user-friendly platform allows you to tokenize your assets with just a few clicks, unlocking new possibilities for liquidity and investment. ",
      img: banner2,
    },
    {
      title: "Discover Top-Selling Assets",
      desc: "Stay ahead of the curve by exploring our curated selection of top-selling DePIN assets. From high-performance GPUs to cutting-edge storage solutions, our marketplace features the latest and greatest assets from across the DePIN ecosystem.",
      img: banner3,
    },
  ];
  // animate banner every 5 secs
    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="relative h-60 w-full">
      <div className="absolute bottom-[6%] left-[50%] inline-flex h-1 w-36 -translate-x-1/2 items-start justify-start gap-1.5 opacity-50">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={classNames(`h-1 w-10 cursor-pointer rounded-full`, {
              "bg-zinc-300": activeIndex !== index,
              "bg-lime-300": activeIndex === index,
            })}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
      <Banner
        title={banners[activeIndex].title}
        desc={banners[activeIndex].desc}
        img={banners[activeIndex].img}
      />
    </div>
  );
};
