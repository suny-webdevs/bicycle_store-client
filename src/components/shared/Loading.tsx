import { GridLoader } from "react-spinners";
import { useAppSelector } from "../../redux/hooks";
import { isLoading } from "../../redux/features/loading/loadingSlice";

const Loading = () => {
  const loading = useAppSelector(isLoading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <GridLoader color="#fa5252" />
    </div>
  );
};

export default Loading;
