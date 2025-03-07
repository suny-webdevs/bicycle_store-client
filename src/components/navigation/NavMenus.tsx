import { Affix, Divider, Menu, MenuProps } from "antd";
import { FaBars } from "react-icons/fa6";
import { categoryMenus } from "../../utils/categoryMenu";
import { useEffect, useState } from "react";
import { publicMenus } from "../../routes/public.routes";
import CartDrawer from "../shared/CartDrawer";
import WishListDrawer from "../shared/WishListDrawer";

const categoryItem = [
  {
    label: "Shop By Categories",
    key: "sbc",
    icon: <FaBars />,
    children: categoryMenus,
  },
];

const NavMenus = () => {
  const [current, setCurrent] = useState("home");
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const submenu = document.getElementById("submenu");
      if (submenu) {
        const sticky = submenu.offsetTop;
        setIsSticky(window.scrollY > sticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div id="submenu">
      <Affix>
        <div className="flex w-[99vw] items-center justify-between bg-white">
          <div className="flex items-center">
            <Menu
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={categoryItem}
            />
            <Divider type="vertical" className="bg-gray-500" />
            <Menu
              onClick={onClick}
              activeKey={current}
              selectedKeys={[current]}
              mode="horizontal"
              items={publicMenus}
            />
          </div>
          {isSticky && (
            <div className="flex items-center gap-3 pr-5">
              <CartDrawer />
              <WishListDrawer />
            </div>
          )}
        </div>
      </Affix>
    </div>
  );
};

export default NavMenus;
