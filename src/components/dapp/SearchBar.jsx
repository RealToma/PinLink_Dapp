import SearchIcon from "@assets/icons/search.svg";
export const SearchBar = () => {
  return (
    <div
      className="inline-flex h-16 w-full items-center justify-between rounded-md border border-neutral-800 px-3"
      style={{
        backgroundColor: "rgba(23, 23, 23, 0.88)",
      }}
    >
      <div className="w-80 font-['Orbitron'] text-2xl font-extrabold text-white">
        Trending Assets
      </div>
      <div className="flex items-start justify-start gap-4">
        <div className="relative w-96 ">
          <input
            placeholder="Search tokens by name, ticker, or address..."
            className="inline-flex w-full flex-col items-start  justify-start gap-1.5 border border-neutral-700 bg-stone-950 px-4 py-2 pr-12"
          />
          <img
            src={SearchIcon}
            alt="search"
            className="absolute right-3 top-3 "
          />
        </div>
        <div className="flex items-start justify-start rounded-md border border-neutral-700 bg-stone-950 p-1">
          <div className="flex items-start justify-start gap-2.5 rounded-sm bg-lime-300 px-3 py-1.5">
            <div className="font-['Sora'] text-sm font-semibold leading-tight text-black">
              All
            </div>
          </div>
          <div className="flex items-start justify-start gap-2.5 rounded-sm px-3 py-1.5">
            <div className="font-['Inter'] text-sm font-medium leading-tight text-neutral-600">
              Open
            </div>
          </div>
        </div>
        <div className="flex h-10 w-28 items-start justify-center gap-1 rounded-md border border-neutral-700 bg-stone-950 px-1 py-1 shadow-inner">
          <div className="relative flex h-8 w-8 flex-col items-start justify-start rounded-lg">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-700">
              <img
                src={SearchIcon}
                alt="search"
                className=""
                fill="red"
                style={{
                  filter:
                    "invert(88%) sepia(6%) saturate(95%) hue-rotate(180deg) brightness(113%) contrast(90%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
