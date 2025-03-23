import { Button, Image } from "antd";
import BCSForm from "../../components/dataEntry/BCSForm";
import BCSInput from "../../components/dataEntry/BCSInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (loginData) => {
    const toastId = toast.loading("Logging in...");

    try {
      const res = await login(loginData);
      const user = verifyToken(res?.data?.data?.token);
      dispatch(setUser({ user, token: res?.data?.data?.token }));
      navigate("/");
      toast.success("Login successful", { id: toastId });
    } catch (error) {
      toast.error(`Something went wrong! ref:${error}`, { id: toastId });
    }
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-xl border border-gray-200 p-10">
          <h1 style={{ fontWeight: 500 }} className="mb-6 text-3xl">
            Login
          </h1>
          <BCSForm className="space-y-5" onSubmit={onSubmit}>
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
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={isLoading}
              block
            >
              Login
            </Button>
          </BCSForm>
          <p
            style={{ fontWeight: 300 }}
            className="mt-6 text-center text-sm text-gray-400"
          >
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#fa5252]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
