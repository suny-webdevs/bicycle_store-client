import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label?: string;
  placeholder?: string;
  name: string;
  defaultValue?: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;

  disabled?: boolean;
  mode?: "multiple" | undefined;
  variant?: "outlined" | "borderless" | "filled" | "underlined";
  boxStyle?: string;
};

const BCSSelect = ({
  label,
  name,
  placeholder,
  defaultValue,
  options,
  disabled,
  mode,
  variant,
  boxStyle,
}: TPHSelectProps) => {
  return (
    <div className={boxStyle}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Select
              mode={mode}
              placeholder={placeholder}
              defaultValue={defaultValue}
              style={{ width: "100%" }}
              {...field}
              options={options}
              disabled={disabled}
              variant={variant}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default BCSSelect;
