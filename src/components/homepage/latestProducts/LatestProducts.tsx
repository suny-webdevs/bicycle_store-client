import { useGetAllBicyclesQuery } from "../../../redux/features/bicycles/bicycleApi";
import { TBicycle } from "../../../interface/global";
import ProductCard from "../../cards/ProductCard";
import SectionTitle from "../../shared/SectionTitle";
import { useAppDispatch } from "../../../redux/hooks";
import {
  startLoading,
  stopLoading,
} from "../../../redux/features/loading/loadingSlice";

const LatestProducts = () => {
  const dispatch = useAppDispatch();

  const {
    data: bicycles,
    isFetching,
    isLoading,
  } = useGetAllBicyclesQuery(undefined);

  if (isFetching || isLoading) {
    dispatch(startLoading());
  } else {
    dispatch(stopLoading());
  }

  return (
    <div className="px-5 pt-10">
      <SectionTitle title="Featured Bicycles" />
      <div className="grid h-full grid-cols-1 border border-gray-200 md:grid-cols-5">
        {bicycles?.data?.slice(0, 10).map((item: Partial<TBicycle>) => {
          return <ProductCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default LatestProducts;
