import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../components/shared/Container";

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
        <Container>
          <Outlet />
        </Container>
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
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/favproduct"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Favourite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Purchased
            </NavLink>
            <NavLink
              to="/dashboard/addproduct"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Add Product
            </NavLink>
          </li>
          <div className="mt-auto p-2 flex flex-col">
            <hr />
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashLayout;
