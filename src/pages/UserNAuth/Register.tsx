import { Button, Image } from "antd";
import BCSForm from "../../components/dataEntry/BCSForm";
import BCSInput from "../../components/dataEntry/BCSInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-[#fa5252]">
        <Link to={"/"} className="flex">
          <Image
            width={160}
            height={60}
            preview={false}
            src="/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="my-10 flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-gray-200 p-10">
          <h1 style={{ fontWeight: 500 }} className="mb-6 text-3xl">
            Register
          </h1>
          <BCSForm className="space-y-6" onSubmit={onSubmit}>
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
            <Button type="primary" htmlType="submit" size="large" block>
              Register
            </Button>
          </BCSForm>
          <p
            style={{ fontWeight: 300 }}
            className="mt-6 text-center text-sm text-gray-400"
          >
            Already have an account?{" "}
            <Link to="/login" className="text-[#fa5252]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
