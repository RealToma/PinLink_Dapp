import { Outlet } from "react-router-dom";

export default function NavPanelLayout() {
  return (
    <div>
      <div className="h-40  w-40 bg-red-500">
        <Outlet />
      </div>
    </div>
  );
}
