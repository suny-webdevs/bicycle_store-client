import { Input } from "antd";
import { Controller } from "react-hook-form";

type TSearchBarWithCategoriesProps = {
  type?: "text" | "search" | "url" | "password" | "email";
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  boxStyle?: string;
  variant?: "outlined" | "borderless" | "filled" | "underlined";
};

const BCSInput = ({
  type = "text",
  name,
  label,
  placeholder,
  disabled = false,
  boxStyle,
  variant = "outlined",
}: TSearchBarWithCategoriesProps) => {
  return (
    <div className={boxStyle}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={name}
            placeholder={placeholder}
            disabled={disabled}
            size="large"
            variant={variant}
          />
        )}
      />
    </div>
  );
};

export default BCSInput;
