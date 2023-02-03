import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

export const SharedComponent = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
