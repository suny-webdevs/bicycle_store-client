import { Divider, Popover } from "antd";
import { PiMagnifyingGlassDuotone, PiUserCircleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import WishListDrawer from "./WishListDrawer";
import ProductSearch from "./ProductSearch";

const NavTools = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Only visible on large screens */}
      <div className="hidden md:flex">
        <Link to={"/login"}>
          <span className="text-md text-white">Login</span>
        </Link>
        <span className="text-md mx-2 text-white">/</span>
        <Link to={"/register"}>
          <span className="text-md text-white">Register</span>
        </Link>
      </div>
      {/* Only visible on large screens */}
      <div className="hidden md:flex">
        <Divider type="vertical" style={{ backgroundColor: "lightgray" }} />
      </div>
      {/* Only visible on small screens */}
      <div className="flex gap-3 md:hidden">
        <Popover content={<ProductSearch />} placement="bottom">
          <button className="cursor-pointer text-3xl text-white md:text-3xl">
            <PiMagnifyingGlassDuotone />
          </button>
        </Popover>
        <button className="cursor-pointer text-3xl text-white md:text-3xl">
          <PiUserCircleDuotone />
        </button>
      </div>
      {/* Visible on small and large screens */}
      <div className="flex items-center gap-3">
        <WishListDrawer />
        <CartDrawer />
      </div>
    </div>
  );
};

export default NavTools;
