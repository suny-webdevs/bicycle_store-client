import { Badge, Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { TBicycle } from "../../interface/global";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/addToCart/cartSlice";
import { addToList } from "../../redux/features/addToWishlist/wishlistSlice";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

type TProductCardProps = {
  item: Partial<TBicycle>;
};

const ProductCard = ({ item }: TProductCardProps) => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const { image, name, price, _id, brand, category, inStock } = item;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: _id!,
        image,
        name: name!,
        price: price!,
        quantity: 1,
      }),
    );
    toast.success("Product added to cart");
  };

  const handleAddToWishlist = () => {
    if (!user) {
      return toast.warning("Please signin for add product to wishlist!");
    }

    dispatch(
      addToList({
        id: _id!,
        image,
        name: name!,
        price: price!,
        quantity: 1,
      }),
    );
    toast.success("Product added to wishlist");
  };

  return (
    <div>
      {!inStock ? (
        <Badge.Ribbon text="Sold-Out" color="#FA5252">
          <div className="group border border-gray-200 p-5">
            <Link to={`${import.meta.env.VITE_BASE_URL}/bicycles/${_id}`}>
              <div className="space-y-7 md:space-y-10">
                <div className="flex h-48 w-full items-center">
                  <img
                    src={image}
                    alt={name}
                    className="size-full object-contain object-center"
                  />
                </div>
                <div className="">
                  <h1 className="text-lg text-gray-800 group-hover:text-[#FA5252]">
                    {name}
                  </h1>
                  <p className="text-sm tracking-wider text-gray-500">
                    {brand} &middot; {category}
                  </p>
                  <h1
                    style={{ fontWeight: 500 }}
                    className="mt-1 text-lg font-bold text-[#FA5252] md:text-xl"
                  >
                    ${price}
                  </h1>
                </div>
              </div>
            </Link>
            <div className="mt-5 grid grid-cols-4 gap-2">
              <div className="col-span-3">
                <Button disabled type="primary" block>
                  ADD TO CART
                </Button>
              </div>
              <div>
                <Button
                  type="primary"
                  icon={<PiHeartStraightDuotone className="text-xl" />}
                  disabled
                  block
                />
              </div>
            </div>
          </div>
        </Badge.Ribbon>
      ) : (
        <div className="group border border-gray-200 p-5">
          <Link to={`${import.meta.env.VITE_BASE_URL}/bicycles/${_id}`}>
            <div className="space-y-7 md:space-y-10">
              <div className="flex h-48 w-full items-center">
                <img
                  src={image}
                  alt={name}
                  className="size-full object-contain object-center"
                />
              </div>
              <div className="mt-10 md:mt-0">
                <h1 className="text-lg text-gray-800 group-hover:text-[#FA5252]">
                  {name}
                </h1>
                <p className="text-sm tracking-wider text-gray-500">
                  {brand} &middot; {category}
                </p>
                <h1
                  style={{ fontWeight: 500 }}
                  className="mt-1 text-lg font-bold text-[#FA5252] md:text-xl"
                >
                  ${price}
                </h1>
              </div>
            </div>
          </Link>
          <div className="mt-5 grid grid-cols-4 gap-2">
            <div className="col-span-3">
              <Button onClick={handleAddToCart} type="primary" block>
                ADD TO CART
              </Button>
            </div>
            <div>
              <Tooltip title="Add to favorite">
                <Button
                  onClick={handleAddToWishlist}
                  type="primary"
                  icon={<PiHeartStraightDuotone className="text-xl" />}
                  block
                />
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
