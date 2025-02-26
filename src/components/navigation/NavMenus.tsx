import { Affix, Divider, Menu, MenuProps } from "antd";
import { FaBars } from "react-icons/fa6";
import { categoryMenus } from "../../utils/categoryMenu";
import { useState } from "react";
import { publicMenus } from "../../routes/public.routes";

const categoryItem = [
  {
    label: "Shop By Categories",
    key: "sbc",
    icon: <FaBars />,
    children: categoryMenus,
  },
];

const menuItem = publicMenus;

const NavMenus = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Affix>
      <div className="flex w-screen items-center bg-white">
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
          items={menuItem}
        />
      </div>
    </Affix>
  );
};

export default NavMenus;
