import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Container from "../components/shared/Container";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
