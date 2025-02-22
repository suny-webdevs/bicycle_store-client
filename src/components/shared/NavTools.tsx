import { Divider } from "antd";
import {
  PiShoppingCartDuotone,
  PiHeartStraightDuotone,
  PiMagnifyingGlassDuotone,
  PiUserCircleDuotone,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const NavTools = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Only visible on large screens */}
      <div className="hidden md:flex">
        <Link to={"/login"}>
          <span className="text-md font-semibold text-white">Login</span>
        </Link>
        <span className="text-md mx-2 text-white">/</span>
        <Link to={"/register"}>
          <span className="text-md font-semibold text-white">Register</span>
        </Link>
      </div>
      {/* Only visible on large screens */}
      <div className="hidden md:flex">
        <Divider type="vertical" style={{ color: "#FFFFFF" }} />
      </div>
      {/* Only visible on small screens */}
      <div className="flex gap-3 md:hidden">
        <button className="cursor-pointer text-2xl text-white md:text-3xl">
          <PiMagnifyingGlassDuotone />
        </button>
        <button className="cursor-pointer text-2xl text-white md:text-3xl">
          <PiUserCircleDuotone />
        </button>
      </div>
      {/* Visible on small and large screens */}
      <div className="flex items-center gap-3">
        <button className="cursor-pointer text-2xl text-white md:text-4xl">
          <PiHeartStraightDuotone />
        </button>
        <button className="cursor-pointer text-2xl text-white md:text-4xl">
          <PiShoppingCartDuotone />
        </button>
      </div>
    </div>
  );
};

export default NavTools;
