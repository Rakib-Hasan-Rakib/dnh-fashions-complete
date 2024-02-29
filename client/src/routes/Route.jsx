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
import DashLayout from "../layout/DashLayout";
import AddProduct from "../pages/dashboard/adminDash/addproduct/AddProduct";
import Favourite from "../pages/dashboard/userDash/Favourite";
import Details from "../pages/details/Details";
import Cart from "../pages/dashboard/userDash/cart/Cart";
import SuccessPayment from "../components/shared/payments/SuccessPayment";
import FailPayment from "../components/shared/payments/FailPayment";
import Purchased from "../pages/dashboard/userDash/purchased/Purchased";
import UserDashAnim from "../components/shared/animations/UserDashAnim";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import Partnership from "../pages/footer_unused/Partnership";
import ErrorAnim from "../components/shared/animations/ErrorAnim";
import Affiliate from "../pages/footer_unused/Affiliate";
import StoreLocator from "../pages/footer_unused/StoreLocator";
import LegalInfo from "../pages/footer_unused/LegalInfo";
import Others from "../pages/footer_unused/Others";
import FAQs from "../pages/footer_unused/FAQs";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/allDress/:id",
        element: <Details />,
      },
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
      {
        path: "/favourite",
        element: (
          <PrivateRoute>
            <Favourite />
          </PrivateRoute>
        ),
      },
      { path: "/faqs", element: <FAQs /> },
      { path: "/partnership", element: <Partnership /> },
      { path: "/affiliate", element: <Affiliate /> },
      { path: "/storeLocator", element: <StoreLocator /> },
      { path: "/legalInfo", element: <LegalInfo /> },
      { path: "/others", element: <Others /> },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "dashboard",
    element: <DashLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <UserDashAnim />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/cart",
        element: (
          <PrivateRoute>
            <UserRoute>
              <Cart />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/favproduct",
        element: (
          <PrivateRoute>
            <UserRoute>
              <Favourite />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/purchased",
        element: (
          <PrivateRoute>
            <UserRoute>
              <Purchased />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/payment/success/:tranId",
    element: <SuccessPayment />,
  },
  {
    path: "/payment/fail/:tranId",
    element: <FailPayment />,
  },
]);

export default Route;
