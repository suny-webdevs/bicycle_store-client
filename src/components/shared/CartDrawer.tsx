import { Badge, Button, Drawer } from "antd";
import { useState } from "react";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { useAppSelector } from "../../redux/hooks";
import CartCard from "../cards/CartCard";

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
  const carts = useAppSelector((state) => state.cart);
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
          count={carts.items.length}
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
        {/* 👇 Redux list 👇 */}
        <div className="relative size-full">
          <div className="size-full">
            {carts.items.map((item) => {
              return <CartCard key={item.id} item={item} />;
            })}
          </div>
          <div className="absolute right-0 bottom-0 left-0 h-24 w-full space-y-3 border-t border-gray-300 px-2 pt-2">
            <div className="flex items-center justify-between">
              <h4 style={{ fontWeight: 500 }} className="text-xl text-gray-800">
                Subtotal :{" "}
              </h4>
              <h4
                style={{ fontWeight: 600 }}
                className="text-xl text-[#fa5252]"
              >
                ${carts.totalPrice}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <Button
                style={{ backgroundColor: "#1e2939" }}
                type="primary"
                size="large"
                block
              >
                Clear all
              </Button>
              <Button type="primary" size="large" block>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;
