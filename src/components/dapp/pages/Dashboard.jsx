import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div className="w-40 h-40 bg-red">
        dashboard
        <Outlet />
      </div>
    </div>
  );
}
