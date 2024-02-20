import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import useAuth from "../../../hooks/useAuth";
import CartIcon from "./CartIcon";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import FavIcon from "./FavIcon";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [viewAuthOpt, setViewAuthOpt] = useState(false);
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
    </>
  );
  return (
    <div className="navbar bg-gray-900">
      <Container>
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
          <div className="flex items-center mb-4">
            <Link
              to="/"
              className="text-xl border-2 tracking-wide md:tracking-widest border-white"
            >
              <span className="bg-white text-black font-bold w-full h-full px-2 md:px-3 pb-0.5">
                D&H
              </span>
              <span className="text-white px-2 md:px-3 py-1 md:py-2">
                Fashions
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{MenuItem}</ul>
        </div>
        <div className="navbar-end flex items-center gap-6">
          <Link to="/favourite">
            <FavIcon />
          </Link>

          <Link to="/cart">
            <CartIcon />
          </Link>
          <div
            onClick={() => setViewAuthOpt(!viewAuthOpt)}
            className="cursor-pointer"
          >
            <Avatar />
          </div>
          {viewAuthOpt && user && (
            <div className="bg-white flex flex-col absolute top-16 z-10 w-24 md:w-32 rounded-md space-y-1 md:space-y-2 lg:space-y-3">
              <Link
                to="/dashboard"
                className="px-2 md:px-4 py-1 hover:text-yellow-500"
              >
                Dashboard
              </Link>
              <Link
                onClick={() => logOut()}
                className="px-2 md:px-4 py-1 hover:text-yellow-500"
              >
                Logout
              </Link>
            </div>
          )}
          {viewAuthOpt && !user && (
            <div className="bg-white flex flex-col absolute top-16 z-10 w-24 md:w-32 rounded-md space-y-1 md:space-y-2 lg:space-y-3">
              <Link
                to="/signup"
                className="px-2 md:px-4 py-1 hover:text-yellow-400"
              >
                Sign Up
              </Link>
              <Link
                to="signin"
                className="px-2 md:px-4 py-1 hover:text-yellow-400"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
