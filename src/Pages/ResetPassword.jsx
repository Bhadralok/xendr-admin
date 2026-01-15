import { useState } from "react";
import CustomButton from "../UI/CustomButton.jsx";
import CustomInput from "../UI/CustomInput";
import { IoChevronBackSharp } from "react-icons/io5";
import OTPInput from "../UI/OTPInput.jsx";
import { Link, useNavigate } from "react-router-dom";
import cancel from "../assets/cancel.svg";

export default function Login({ onClick }) {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
    onClick();
  };

  const isFilled =
    password1.length >= 8 && password2.length >= 8 && password1 === password2;

  return (
    <div className="flex w-[24vw] flex-col gap-50">
      <div className=" flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl text-primary-black">
            Reset Password
          </h1>
          <p className="font-medium text-primary-grey">Enter a new password</p>
        </div>
        <div className="flex flex-col gap-3.5">
          <CustomInput
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Enter your new password"
          />
          <CustomInput
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Enter your new password again"
          />
        </div>
      </div>
      <div className="flex gap-10 justify-end">
        {!isLoading && (
          <Link to="/">
            <CustomButton state="forgot">
              <img src={cancel} alt="" /> Go back
            </CustomButton>
          </Link>
        )}
        <CustomButton
          state={isFilled ? "active" : "disabled"}
          isLoading={isLoading}
          onClick={handleLoading}
        >
          Reset password
        </CustomButton>
      </div>
    </div>
  );
}
