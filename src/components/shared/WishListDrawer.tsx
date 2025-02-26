import { Badge, Drawer } from "antd";
import { useState } from "react";
import { PiHeartStraightDuotone } from "react-icons/pi";

const WishListDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showDrawer} className="flex cursor-pointer items-center">
        <Badge
          count={0}
          size="small"
          showZero
          style={{ backgroundColor: "white", color: "#FA5252" }}
        >
          <PiHeartStraightDuotone className="text-2xl text-white md:text-4xl" />
        </Badge>
      </button>
      <Drawer title="Review Wishlist" onClose={onClose} open={open}>
        <p>Bicycles here</p>
      </Drawer>
    </>
  );
};

export default WishListDrawer;
