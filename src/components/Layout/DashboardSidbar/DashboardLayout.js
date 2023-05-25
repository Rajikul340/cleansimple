import React from "react";
import DashboardNavBar from "./DashboardNavBar";
import DashboardSideBar from "./DashboardSideBar";
import { FaBars } from "react-icons/fa";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-base-200 px-8 py-10 ">
      <div className="bg-white rounded-3xl ">
        

        <div className="drawer drawer-mobile  ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <FaBars size={20} />
            </label>

            <div className="min-h-screen w-full">
            <DashboardNavBar />
              {children}
              </div>
          </div>

          <div className="">
            <DashboardSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
