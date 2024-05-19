import SearchIcon from "@assets/icons/search.svg";
import GridMenuIcon from "@assets/icons/grid-menu.svg";
import ListmenuIcon from "@assets/icons/list-menu.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleView,toggleSearchState } from "@store/viewSlice";
import classNames from "classnames";
export const SearchBar = ({onSearchChange}) => {
  const view = useSelector((state) => state.view.view);
  const searchState = useSelector((state) => state.view.searchState);
  const dispatch = useDispatch();
  return (
    <div
      className="inline-flex h-16 w-full items-center justify-between rounded-md border border-neutral-800 px-3  py-8"
      style={{
        backgroundColor: "rgba(23, 23, 23, 0.88)",
      }}
    >
      <div className="w-80 font-['Orbitron'] text-2xl font-extrabold text-white">
        Trending Assets
      </div>
      <div className="flex items-start justify-start gap-4">
        <div className="relative w-[30rem] ">
          <input
            placeholder="Search tokens by name, ticket, or address..."
            className="inline-flex w-full flex-col items-start  justify-start gap-1.5 border border-neutral-700 bg-stone-950 px-4 py-2 pr-12"
            onChange={onSearchChange}
          />
          <img
            src={SearchIcon}
            alt="search"
            className="absolute right-3 top-3 "
          />
        </div>
        <div className="flex items-start justify-start rounded-md border border-neutral-700 bg-stone-950 p-1">
          <div className={classNames("flex items-start justify-start gap-2.5 rounded-sm px-3 py-1.5",
            {
            "bg-lime-300": searchState === "all",            
            }
  )}>
            <p className={classNames("font-['Sora'] text-sm font-semibold leading-tight cursor-pointer",
              {
              "text-black": searchState === "all",
              "text-neutral-600": searchState !== "all",
              }
            )} onClick={()=>dispatch(toggleSearchState("all"))}>
              All
            </p>
          </div>
          <div className={classNames("flex items-start justify-start gap-2.5 rounded-sm px-3 py-1.5",{
            "bg-lime-300": searchState === "open",          
          })}>
            <p className={classNames(
              "font-['Inter'] text-sm font-medium leading-tight cursor-pointer",
              {
              "text-black": searchState === "open",
              "text-neutral-600": searchState !== "open",
              }
            )}  onClick={()=>dispatch(toggleSearchState("open"))}>
              Open
            </p>
          </div>
        </div>
        <div className="flex h-10 items-start justify-center gap-1 rounded-md border border-neutral-700 bg-stone-950 px-1 py-1 shadow-inner">
          <div
            className={classNames(
              "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
              {
                "bg-neutral-700": view === "grid",
              },
            )}
            onClick={() => dispatch(toggleView("grid"))}
          >
            <img
              src={GridMenuIcon}
              alt="grid"
              className=""
              style={{
                filter:
                  "invert(88%) sepia(6%) saturate(95%) hue-rotate(180deg) brightness(113%) contrast(90%)",
              }}
            />
          </div>
          <div
            className={classNames(
              "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg",
              {
                "bg-neutral-700": view === "list",
              },
            )}            
            onClick={() => dispatch(toggleView("list"))}
          >
            <img
              src={ListmenuIcon}
              alt="list"
              className=""
              style={{
                filter:
                  "invert(88%) sepia(6%) saturate(95%) hue-rotate(180deg) brightness(113%) contrast(90%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
