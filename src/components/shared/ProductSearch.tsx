import BCSForm from "../dataEntry/BCSForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BCSSelect from "../dataEntry/BCSSelect";
import BCSInput from "../dataEntry/BCSInput";
import { categories } from "../../constants/global";
import { FiSearch } from "react-icons/fi";
import { Button, Col, Row } from "antd";

const ProductSearch = () => {
  const categoryOptions = categories.map((item) => ({
    value: item,
    label: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (value) => {
    console.log(value);
  };

  return (
    <BCSForm onSubmit={onSubmit} className="h-[40px] rounded-md bg-white px-1">
      <Row>
        <Col>
          <BCSSelect
            name="category"
            placeholder="All Category"
            options={categoryOptions}
            variant="borderless"
          />
        </Col>
        <Col>
          <BCSInput
            name="search"
            type="search"
            placeholder="Search your bicycle here..."
            variant="borderless"
          />
        </Col>
        <Col>
          <Button
            type="text"
            htmlType="submit"
            style={{ color: "#FA5252", backgroundColor: "transparent" }}
          >
            <FiSearch className="mt-2 text-lg" />
          </Button>
        </Col>
      </Row>
    </BCSForm>
  );
};

export default ProductSearch;
