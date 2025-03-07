import { Badge, Button } from "antd";
import { Link } from "react-router-dom";
import { TBicycle } from "../../interface/global";

type TProductCardProps = {
  item: Partial<TBicycle>;
};

const ProductCard = ({ item }: TProductCardProps) => {
  const { image, name, price, _id, brand, category, inStock } = item;

  return (
    <Badge.Ribbon text={inStock ? "In-Stock" : "Sold-Out"} color="#FA5252">
      <div className="group border-x border-gray-200 p-5">
        <Link to={`${import.meta.env.VITE_BASE_URL}/bicycles/${_id}`}>
          <div className="flex h-48 items-center">
            <img src={image} alt={name} />
          </div>
          <div>
            <h1 className="text-lg group-hover:text-[#FA5252]">{name}</h1>
            <p className="text-sm tracking-wider text-gray-500">
              {brand} &middot; {category}
            </p>
            <h1
              style={{ fontWeight: 500 }}
              className="mt-1 text-lg font-bold text-[#FA5252]"
            >
              ${price}
            </h1>
          </div>
        </Link>
        <Button style={{ marginTop: "1.5rem" }} type="primary" block>
          ADD TO CART
        </Button>
      </div>
    </Badge.Ribbon>
  );
};

export default ProductCard;
