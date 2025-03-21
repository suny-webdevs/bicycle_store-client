import { Drawer } from "antd";
import { useState } from "react";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { useAppSelector } from "../../redux/hooks";
import WishlistCard from "../cards/WishlistCard";

// type WishListDrawerProps = {
//   size?: string;
//   badgeColor?: string;
//   badgeColorBg?: string;
//   cartColor?: string;
// };

const WishListDrawer = () => {
  const wishlist = useAppSelector((state) => state.wishlist);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={showDrawer}
        className="flex cursor-pointer items-center gap-2"
      >
        <PiHeartStraightDuotone className="text-xl" /> Wishlist
      </button>
      <Drawer title="Review Wishlist" onClose={onClose} open={open}>
        {wishlist.items.map((item) => {
          return <WishlistCard key={item.id} item={item} />;
        })}
      </Drawer>
    </>
  );
};

export default WishListDrawer;
