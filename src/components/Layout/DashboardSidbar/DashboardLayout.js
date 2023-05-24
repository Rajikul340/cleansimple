import React from "react";
import DashboardNavBar from "./DashboardNavBar";
import DashboardSideBar from "./DashboardSideBar";
import { FaBars } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-white rounded-3xl " >
      <DashboardNavBar />

      <div className="drawer drawer-mobile  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <FaBars size={20} />
          </label>

          <div className="bg-red-400">{children}</div>
        </div>

        <div className="border border-green-800 ">
          <DashboardSideBar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
