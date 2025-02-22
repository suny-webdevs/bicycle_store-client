import { Input } from "antd";
import { Controller } from "react-hook-form";

type TSearchBarWithCategoriesProps = {
  type?: "text" | "search" | "url" | "password" | "email";
  name: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: "outlined" | "borderless" | "filled" | "underlined";
};

const BCSInput = ({
  type = "text",
  name,
  placeholder,
  disabled = false,
  variant = "outlined",
}: TSearchBarWithCategoriesProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          type={type}
          id={name}
          style={{ flex: 1 }}
          placeholder={placeholder}
          size="large"
          disabled={disabled}
          variant={variant}
        />
      )}
    />
  );
};

export default BCSInput;
