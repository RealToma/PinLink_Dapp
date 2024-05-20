import { Outlet } from "react-router-dom";
import { DappNav } from "./DappNav";
import { DAppSidePanel } from "./DappSidePanel";
import { DappFooter } from "./DappFooter";


export default function NavPanelLayout() {
  return (
    <div>
      <div className="bg-pageBase flex h-screen w-screen flex-col">
        <DappNav />
        <div className="flex flex-1 bg-stone-950">
          <DAppSidePanel />
          <div className="flex flex-1 px-[2.63rem] py-[1.75rem] flex-col gap-4 h-[87vh] overflow-auto">

            <Outlet />
          </div>
        </div>
        <DappFooter/>
      </div>
    </div>
  );
}
