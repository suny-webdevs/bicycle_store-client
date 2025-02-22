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
}: TPHSelectProps) => {
  return (
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
            size="large"
            disabled={disabled}
            variant={variant}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default BCSSelect;
