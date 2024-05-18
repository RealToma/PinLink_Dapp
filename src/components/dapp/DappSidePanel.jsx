import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const DAppSidePanel = () => {
  const routes = [
    {
      name: "Marketplace",
      path: "/marketplace",
    },
    {
      name: "Rent",
      path: "/rent",
    },
    {
      name: "Stake",
      path: "/stake",
    },
    {
      name: "Mint",
      path: "/mint",
    },
    {
      name: "PinAI",
      path: "/pinai",
    },
  ];
  let location = useLocation();
  return (
    <div className="border-r-gradient flex w-[15rem] flex-col bg-stone-950">
      <div className="mx-auto mt-32">
        <div className="inline-flex flex-col items-end justify-start gap-10">
          <div className=" flex flex-col items-center justify-center gap-1 rounded-md border border-neutral-700 bg-neutral-900">
            <div
              className={classNames(
                "inline-flex h-14 w-40 flex-col items-center justify-center gap-1 rounded-md border",
                {
                  "border-neutral-700 bg-neutral-900 ":
                    location.pathname !== "/dashboard",
                  " border-lime-300 bg-lime-300":
                    location.pathname === "/dashboard",
                },
              )}
            >
              <Link
                to="/dashboard"
                className={classNames(
                  "font-soraleading-loose text-right font-['Sora'] text-xl leading-loose",
                  {
                    "font-light   text-white ":
                      location.pathname !== "/dashboard",
                    "text-pageBase  font-semibold":
                      location.pathname === "/dashboard",
                  },
                )}
              >
                Dashboard
              </Link>
            </div>
          </div>
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={classNames(
                "font-sora text-right text-lg font-light leading-loose",
                {
                  "text-lime-300   font-semibold": location.pathname === route.path,
                  "text-white": location.pathname !== route.path,
                },
              )}
            >
              {location.pathname === route.path && "< "}
              {route.name}
              {location.pathname === route.path && " >"}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
