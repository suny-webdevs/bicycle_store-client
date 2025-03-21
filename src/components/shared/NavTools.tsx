import { Divider, Dropdown, MenuProps, Popover } from "antd";
import { PiMagnifyingGlassDuotone, PiUserCircleDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import ProductSearch from "./ProductSearch";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useGetUserProfileQuery } from "../../redux/features/user/userApi";
import Loading from "./Loading";
import WishListDrawer from "./WishListDrawer";
import { IoLogOut } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";

const NavTools = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const { data: userData, isLoading } = useGetUserProfileQuery({});

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out");
  };

  const items: MenuProps["items"] = [
    {
      key: "dashboard",
      label: (
        <Link to="/dashboard" className="flex items-center gap-2">
          <BiSolidDashboard className="text-xl" /> Dashboard
        </Link>
      ),
    },
    {
      key: "wishlist",
      label: <WishListDrawer />,
    },
    {
      key: "logout",
      label: (
        <button
          onClick={handleLogout}
          className="flex cursor-pointer items-center gap-2 text-[#fa5252]"
        >
          <IoLogOut className="text-xl text-[#fa5252]" /> Logout
        </button>
      ),
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center gap-2">
      {/* Only visible on large screens */}
      {user === null ? (
        <div className="hidden md:flex">
          <Link to={"/login"}>
            <span className="text-md text-white">Login</span>
          </Link>
          <span className="text-md mx-2 text-white">/</span>
          <Link to={"/register"}>
            <span className="text-md text-white">Register</span>
          </Link>
        </div>
      ) : (
        <div className="size-7 cursor-pointer">
          {userData.data?.image ? (
            <Dropdown menu={{ items }} placement="bottomRight">
              <img
                src={userData.data?.image}
                alt={userData.data?.name}
                className="size-full border object-contain"
              />
            </Dropdown>
          ) : (
            <Dropdown menu={{ items }} placement="bottomRight">
              <PiUserCircleDuotone className="text-3xl text-white" />
            </Dropdown>
          )}
        </div>
      )}
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
        {/* <WishListDrawer /> */}
        <CartDrawer />
      </div>
    </div>
  );
};

export default NavTools;
