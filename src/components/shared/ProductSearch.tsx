import BCSForm from "../dataEntry/BCSForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BCSInput from "../dataEntry/BCSInput";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ProductSearch = () => {
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = (value) => {
    console.log(value);
    navigate(`/bicycles?search=${value?.search}`);
  };

  return (
    <BCSForm
      onSubmit={onSubmit}
      className="flex h-5 w-[90vw] items-center rounded bg-white px-1 md:h-10 md:w-full"
    >
      <BCSInput
        name="search"
        type="search"
        placeholder="Search your bicycle here..."
        variant="borderless"
        boxStyle="w-full"
      />
      <button
        type="submit"
        className="cursor-pointer bg-transparent px-3 text-[#FA5252]"
      >
        <PiMagnifyingGlassDuotone className="text-2xl" />
      </button>
    </BCSForm>
  );
};

export default ProductSearch;
