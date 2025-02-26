import { Button } from "antd";
import BCSForm from "../../components/dataEntry/BCSForm";
import BCSInput from "../../components/dataEntry/BCSInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <BCSForm onSubmit={onSubmit}>
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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </BCSForm>
      </div>
    </div>
  );
};

export default Login;
