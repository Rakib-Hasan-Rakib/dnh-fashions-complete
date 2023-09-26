import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
