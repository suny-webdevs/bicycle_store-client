import { Input } from "antd";
import { Controller } from "react-hook-form";

const { TextArea } = Input;

type TTextAreaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  boxStyle?: string;
  variant?: "outlined" | "borderless" | "filled" | "underlined";
  showCount?: boolean;
  maxLength?: number;
  cols?: number;
  rows?: number;
};

const BCSTextArea = ({
  name,
  label,
  placeholder,
  disabled = false,
  boxStyle,
  variant = "outlined",
  showCount = false,
  maxLength,
  cols,
  rows,
}: TTextAreaProps) => {
  return (
    <div className={boxStyle}>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        render={({ field }) => (
          <TextArea
            {...field}
            id={name}
            showCount={showCount}
            cols={cols}
            rows={rows}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={disabled}
            size="large"
            variant={variant}
            style={{
              resize: "none",
              fontSize: "1.25rem",
              padding: "1rem",
              borderRadius: 0,
            }}
          />
        )}
      />
    </div>
  );
};

export default BCSTextArea;
