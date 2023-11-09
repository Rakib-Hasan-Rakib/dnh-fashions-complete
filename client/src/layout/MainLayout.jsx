import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Container from "../components/shared/Container";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
