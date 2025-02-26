import { Badge, Drawer } from "antd";
import { useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showDrawer} className="flex cursor-pointer">
        <Badge
          count={0}
          size="small"
          showZero
          style={{ backgroundColor: "white", color: "#FA5252" }}
        >
          <PiShoppingCartDuotone className="text-2xl text-white md:text-4xl" />
        </Badge>
      </button>
      <Drawer title="Review Cart" onClose={onClose} open={open}>
        <p>Bicycles here</p>
      </Drawer>
    </>
  );
};

export default CartDrawer;
