import { Button, Drawer, Menu, MenuProps } from "antd";
import { useState } from "react";
import { publicMenus } from "../../routes/public.routes";
import { FaBars } from "react-icons/fa6";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <FaBars className="text-lg" />
      </Button>
      <Drawer placement="left" onClose={onClose} open={open}>
        <Menu
          onClick={onClick}
          activeKey={current}
          selectedKeys={[current]}
          mode="vertical"
          items={publicMenus}
        />
      </Drawer>
    </>
  );
};

export default MenuDrawer;
