import { Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Controller } from "react-hook-form";

type TSearchBarWithCategoriesProps = {
  type?: "text" | "search" | "url" | "password" | "email";
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  boxStyle?: string;
  size?: SizeType;
  style?: Record<string, any>;
  variant?: "outlined" | "borderless" | "filled" | "underlined";
};

const BCSInput = ({
  type = "text",
  name,
  label,
  placeholder,
  disabled = false,
  boxStyle,
  size = "middle",
  variant = "outlined",
  style,
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
            size={size}
            variant={variant}
            style={style}
          />
        )}
      />
    </div>
  );
};

export default BCSInput;
