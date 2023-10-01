import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import { AiOutlineMenu} from "react-icons/ai";
import Avatar from "./Avatar";
import useAuth from "../../../hooks/useAuth";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const { logOut } = useAuth();
  const MenuItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/collections"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Collections
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="disclaimer"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Disclaimer
        </NavLink>
      </li>
      <li>
        <NavLink onClick={()=> logOut()}>Logout</NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <div className="navbar bg-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="z-10 lg:hidden">
              <AiOutlineMenu size={24} className="text-white" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItem}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl border-2 tracking-wide md:tracking-widest border-white"
          >
            <span className="bg-white px-2 md:px-3 py-1 md:py-2">D&H</span>
            <span className="text-white px-2 md:px-3 py-1 md:py-2">
              Fashions
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{MenuItem}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <Link to="/cart">
            <CartIcon/>
          </Link>
          <Avatar />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
