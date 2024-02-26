import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../components/shared/Container";
import useAuth from "../hooks/useAuth";
import { AiFillHome } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";

const DashLayout = () => {
  const { user, admin } = useAuth();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
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
        <div className="menu p-2 w-48 min-h-full bg-gray-200 text-base-content px-8">
          {!admin && user && (
            <>
              <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "defaultNav"
                }
              >
                <div className="py-2 font-semibold flex items-center gap-2">
                  <FaShoppingCart size={20} />
                  Cart
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/favproduct"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "defaultNav"
                }
              >
                <div className="py-2 font-semibold flex items-center gap-2">
                  <FaHeart size={20} />
                  Favourite
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/purchased"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "defaultNav"
                }
              >
                <div className="py-2 font-semibold flex items-center gap-2">
                  <BiSolidPurchaseTag size={20} />
                  Purchased
                </div>
              </NavLink>
            </>
          )}

          {user && admin && (
            <>
              <NavLink
                to="/dashboard/addproduct"
                className={({ isActive }) =>
                  isActive ? "activeNav" : "defaultNav"
                }
              >
                Add Product
              </NavLink>
            </>
          )}
          <div className="mt-auto p-2 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeNav" : "defaultNav"
              }
            >
              <div className="py-1 font-semibold flex items-center gap-2">
                <AiFillHome size={22} />
                Home
              </div>
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                isActive ? "activeNav" : "defaultNav"
              }
            >
              <div className="py-1 font-semibold flex items-center gap-2">
                <MdCollections size={22} />
                Collections
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
