import ProductCard from "../components/cards/ProductCard";
import { TBicycle } from "../interface/global";
import { useGetAllBicyclesQuery } from "../redux/features/bicycles/bicycleApi";
import {
  startLoading,
  stopLoading,
} from "../redux/features/loading/loadingSlice";
import { useAppDispatch } from "../redux/hooks";

const Bicycles = () => {
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
    <div className="grid grid-cols-1 gap-5 bg-gray-100 px-5 py-5 md:grid-cols-5 md:py-10">
      {/* Queries */}
      <div className="hidden border border-gray-200 bg-white md:flex">
        Queries
      </div>
      <div className="col-span-4 flex flex-col gap-5">
        {/* Header */}
        <div className="border border-gray-200 bg-white p-2">
          <h1 style={{ fontWeight: 500 }} className="text-xl text-gray-800">
            Bicycles
          </h1>
        </div>
        {/* Products */}
        <div className="grid h-full grid-cols-1 border border-gray-200 bg-white md:grid-cols-2 lg:grid-cols-4">
          {bicycles?.data?.map((item: Partial<TBicycle>) => {
            return <ProductCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Bicycles;
