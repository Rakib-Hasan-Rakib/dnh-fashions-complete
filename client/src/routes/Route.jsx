import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Collections from "../pages/Collections/Collections";
import Disclaimer from "../pages/Disclaimer/Disclaimer";
import Contact from "../pages/Contact/Contact";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Cart from "../pages/cart/Cart";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/collections", element: <Collections /> },
      { path: "/contact", element: <Contact /> },
      { path: "/disclaimer", element: <Disclaimer /> },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default Route;
