import { IoMdCloseCircle } from "react-icons/io";
import { removeFromList } from "../../redux/features/addToWishlist/wishlistSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";

type TWishListCardProps = {
  item: {
    id: string;
    image?: string;
    name: string;
    quantity: number;
    price: number;
  };
};

const WishlistCard = ({ item }: TWishListCardProps) => {
  const dispatch = useAppDispatch();
  const { id, image, name, price } = item;

  const handleRemoveCartItem = (id: string) => {
    dispatch(removeFromList(id));
  };

  return (
    <Link
      to={`/bicycles/${id}`}
      className="group flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="size-20">
          <img src={image} alt={name} className="size-full object-contain" />
        </div>
        <div>
          <h4
            style={{ fontWeight: 600 }}
            className="text-gray-800 group-hover:underline"
          >
            {name}
          </h4>
          <p className="">
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
    </Link>
  );
};

export default WishlistCard;
