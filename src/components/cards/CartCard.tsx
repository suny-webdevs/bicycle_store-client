import { IoMdCloseCircle } from "react-icons/io";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/features/addToCart/cartSlice";

type TCartCardProps = {
  item: {
    id: string;
    image?: string;
    name: string;
    quantity: number;
    price: number;
  };
};

const CartCard = ({ item }: TCartCardProps) => {
  const dispatch = useAppDispatch();
  const { id, image, name, quantity, price } = item;

  const handleRemoveCartItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="size-20">
          <img src={image} alt={name} className="size-full object-contain" />
        </div>
        <div>
          <h4 style={{ fontWeight: 600 }} className="text-gray-800">
            {name}
          </h4>
          <p className="">
            <span className="text-gray-500">{quantity} x</span>{" "}
            <span style={{ fontWeight: 600 }} className="text-[#fa5252]">
              ${price}
            </span>
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => handleRemoveCartItem(id)}>
          <IoMdCloseCircle className="cursor-pointer text-xl text-[#fa5252]" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
