import { useState } from "react";
import CustomButton from "../UI/CustomButton.jsx";
import CustomInput from "../UI/CustomInput";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoading = () => {
    console.log(email, password);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  const isFilled =
    email.length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    password.length >= 8;

  return (
    <div className="flex min-w-115 flex-col gap-50">
      <div className=" flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl text-primary-black">
            Login to the adminPanel
          </h1>
          <p className="font-medium text-primary-grey">
            Enter your registered email and password to continue
          </p>
        </div>
        <div className="flex flex-col  gap-5">
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <CustomInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="flex gap-10 items-center ">
        <CustomButton
          state={isFilled ? "active" : "disabled"}
          isLoading={isLoading}
          onClick={handleLoading}
        >
          Login
        </CustomButton>

        {!isLoading && (
          <Link to="/forgot-password">
            <CustomButton state="forgot">Forgot password?</CustomButton>
          </Link>
        )}
      </div>
    </div>
  );
}
