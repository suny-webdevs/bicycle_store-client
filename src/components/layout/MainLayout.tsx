import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import NavMenus from "../navigation/NavMenus";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:flex">
        <NavMenus />
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
