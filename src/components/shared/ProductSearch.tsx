import BCSForm from "../dataEntry/BCSForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BCSSelect from "../dataEntry/BCSSelect";
import BCSInput from "../dataEntry/BCSInput";
import { categories } from "../../constants/global";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { Divider } from "antd";

const ProductSearch = () => {
  const categoryOptions = categories.map((item) => ({
    value: item,
    label: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (value) => {
    console.log(value);
  };

  return (
    <BCSForm
      onSubmit={onSubmit}
      className="flex h-10 w-full items-center gap-2 rounded-md bg-white px-1"
    >
      <BCSSelect
        name="category"
        placeholder="All Category"
        options={categoryOptions}
        variant="borderless"
        boxStyle="mt-6"
      />
      <Divider type="vertical" />
      <BCSInput
        name="search"
        type="search"
        placeholder="Search your bicycle here..."
        variant="borderless"
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
