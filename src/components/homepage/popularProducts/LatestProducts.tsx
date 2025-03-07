import { useGetAllBicyclesQuery } from "../../../redux/features/bicycles/bicycleApi";
import { TBicycle } from "../../../interface/global";
import ProductCard from "../../shared/ProductCard";

const LatestProducts = () => {
  const {
    data: bicycles,
    isFetching,
    isLoading,
  } = useGetAllBicyclesQuery(undefined);
  console.log("Bicycles", bicycles);

  if (isFetching || isLoading) {
    return <h1 className="text-3xl font-bold">Loading...</h1>;
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-black">Latest Products</h1>
      <div className="grid h-full grid-cols-1 border border-gray-200 md:grid-cols-5">
        {bicycles?.data?.map((item: Partial<TBicycle>) => {
          // console.log("item", item);
          return <ProductCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LatestProducts;
