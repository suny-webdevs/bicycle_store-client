import { Badge, Drawer } from "antd";
import { useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";

type CartDrawerProps = {
  size?: string;
  badgeColor?: string;
  badgeColorBg?: string;
  cartColor?: string;
};

const CartDrawer = ({
  size = "text-4xl",
  badgeColor = "#FA5252",
  badgeColorBg = "white",
  cartColor = "text-white",
}: CartDrawerProps) => {
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
          style={{ backgroundColor: badgeColorBg, color: badgeColor }}
        >
          <PiShoppingCartDuotone
            className={`text-3xl ${cartColor} md:${size}`}
          />
        </Badge>
      </button>
      <Drawer title="Review Cart" onClose={onClose} open={open}>
        <p>Bicycles here</p>

        {/* 👇 Redux list 👇 */}
      </Drawer>
    </>
  );
};

export default CartDrawer;
