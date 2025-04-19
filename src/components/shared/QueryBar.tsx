import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { categories } from "../../constants/global";
import { useGetAllBicyclesQuery } from "../../redux/features/bicycles/bicycleApi";
import { useAppDispatch } from "../../redux/hooks";
import {
  startLoading,
  stopLoading,
} from "../../redux/features/loading/loadingSlice";

const QueryBar = () => {
  const dispatch = useAppDispatch();
  const { data: bicycles, isLoading } = useGetAllBicyclesQuery(undefined);

  const bicycleBrands = Array.from(
    new Set(bicycles?.data?.map((bike) => bike.brand)),
  );

  console.log(bicycleBrands);

  const handleCheckbox: CheckboxProps["onChange"] = (e) => {
    console.log(e.target.checked);
    console.log(e.target.value);
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Availability",
      children: (
        <div className="flex flex-col gap-2">
          <Checkbox onChange={handleCheckbox}>In Stock</Checkbox>
          <Checkbox onChange={handleCheckbox}>Out Of Stock</Checkbox>
        </div>
      ),
    },
    {
      key: "2",
      label: "Category",
      children: (
        <div className="flex flex-col gap-2">
          {categories.map((item, index) => {
            return (
              <Checkbox key={index} onChange={handleCheckbox}>
                {item}
              </Checkbox>
            );
          })}
        </div>
      ),
    },
    {
      key: "3",
      label: "Brand",
      children: (
        <div className="flex flex-col gap-2">
          {bicycleBrands.map((item, index) => {
            return (
              <Checkbox key={index} onChange={handleCheckbox}>
                {item}
              </Checkbox>
            );
          })}
        </div>
      ),
    },
  ];

  if (isLoading) {
    dispatch(startLoading());
  } else {
    dispatch(stopLoading());
  }

  return (
    <div>
      <Collapse
        style={{ borderRadius: 0 }}
        items={items}
        defaultActiveKey={["1", "2", "3"]}
      />
    </div>
  );
};

export default QueryBar;
