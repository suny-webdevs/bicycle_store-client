import { useGetAllBicyclesQuery } from "../../../redux/features/bicycles/bicycleApi";
import { TBicycle } from "../../../interface/global";
import ProductCard from "../../cards/ProductCard";
import SectionTitle from "../../shared/SectionTitle";

const LatestProducts = () => {
  const {
    data: bicycles,
    isFetching,
    isLoading,
  } = useGetAllBicyclesQuery(undefined);

  if (isFetching || isLoading) {
    return <h1 className="text-3xl font-bold">Loading...</h1>;
  }

  return (
    <div className="px-5 pt-10">
      <SectionTitle title="Latest products" />
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
