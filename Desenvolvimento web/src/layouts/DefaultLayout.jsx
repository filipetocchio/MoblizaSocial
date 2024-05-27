import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

export function DefaultLayout() {
  return (
    <div>
      <div className="flex">
        <Navbar className="fixed" />
        <Outlet className="relative" />
      </div>
    </div>
  );
}
