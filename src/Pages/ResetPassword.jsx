import { useState } from "react";
import CustomButton from "../UI/CustomButton.jsx";
import CustomInput from "../UI/CustomInput";
import { IoChevronBackSharp } from "react-icons/io5";
import OTPInput from "../UI/OTPInput.jsx";
import { Link } from "react-router-dom";

export default function Login({ onClick }) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    onClick();
  };

  const isFilled = email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="flex w-[24vw] flex-col gap-50">
      <div className=" flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl text-primary-black">
            Reset Password
          </h1>
          <p className="font-medium text-primary-grey">
            Enter your registered email to receive a six-digit code
          </p>
        </div>
        <div className="">
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="flex gap-10 justify-end">
        {!isLoading && (
          <Link to="/">
            <CustomButton state="forgot">
              <IoChevronBackSharp size={18} /> Go back
            </CustomButton>
          </Link>
        )}
        <CustomButton
          state={isFilled ? "active" : "disabled"}
          isLoading={isLoading}
          onClick={handleLoading}
        >
          Continue
        </CustomButton>
      </div>
    </div>
  );
}
