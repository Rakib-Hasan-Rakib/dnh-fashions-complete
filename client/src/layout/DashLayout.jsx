import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-2 w-48 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Cart Product
            </NavLink>
          </li>
          <li>
            <a>Favourite Product</a>
          </li>
          <li>
            <a>Purchased Product</a>
          </li>
          <div className="mt-auto p-2 ">
            <hr />
            <li>Home</li>
            <li>Collection</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashLayout;
