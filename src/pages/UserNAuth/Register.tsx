import { Button } from "antd";
import BCSForm from "../../components/dataEntry/BCSForm";
import BCSInput from "../../components/dataEntry/BCSInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <BCSForm onSubmit={onSubmit}>
          <BCSInput name="name" label="Name" placeholder="John Doe" />
          <BCSInput
            type="email"
            name="email"
            label="Email"
            placeholder="xyz@email.com"
          />
          <BCSInput
            type="password"
            name="password"
            label="Password"
            placeholder="********"
          />
          <BCSInput name="phone" label="Phone" placeholder="01*********" />
          <BCSInput
            name="address"
            label="Address"
            placeholder="Village, Thana, Post-office"
          />
          <BCSInput name="city" label="City" placeholder="City/District" />
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </BCSForm>
      </div>
    </div>
  );
};

export default Register;
