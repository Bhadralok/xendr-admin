import { useEffect, useState } from "react";
import CustomButton from "../UI/CustomButton.jsx";
import CustomInput from "../UI/CustomInput";
import { IoChevronBackSharp } from "react-icons/io5";
import OTPInput from "../UI/OTPInput.jsx";
import { FaRedo } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import copy from "../assets/copy.svg";
import cancel from "../assets/cancel.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ onClick }) {
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(30);
  const [resend, setResend] = useState(false);

  const navigate = useNavigate();
  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/reset-password");
    }, 2000);
  };

  const handleChange = (e) => {
    let val = e.target.value.replace(/\D/g, ""); // remove anything that's NOT a digit
    val = val.slice(0, 1); // limit to 1 digit
    e.target.value = val;
  };

  const handleKeyDown = (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };
  //   const isFilled = email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (counter <= 0) {
    if (counter < 0) return setCounter(0);
    if (!resend) {
      setResend(true);
    }
  }

  const handleResend = () => {
    setResend(false);
    setCounter(30);
  };
  return (
    <div className="flex w-[24vw] flex-col gap-50">
      <div className=" flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl text-primary-black">
            Verify your email
          </h1>
          <p className="font-medium text-primary-grey">
            We sent a four digit code to your email address, please copy and
            paste it here.
          </p>
        </div>
        <div className="">
          <div className="flex gap-6 justify-between items-center ">
            <OTPInput onChange={handleChange} onKeyDown={handleKeyDown} />
            <OTPInput onChange={handleChange} onKeyDown={handleKeyDown} />
            <OTPInput onChange={handleChange} onKeyDown={handleKeyDown} />
            <OTPInput onChange={handleChange} onKeyDown={handleKeyDown} />
          </div>
        </div>
        <p className="font-medium text-primary-grey">
          {resend ? (
            "You can now request another code."
          ) : (
            <>
              You’ll be able to request another code in{" "}
              <span className="font-black">{counter}s</span>
            </>
          )}
        </p>
        <div className="flex justify-between">
          <CustomButton
            state={resend ? "active" : "disabled"}
            onClick={handleResend}
          >
            <FaRedo />
            Resend Code
          </CustomButton>
          <button className="font-black text-primary-orange text-sm bg-white w-[13.075rem] flex items-center justify-center gap-3">
            <img src={copy} alt="" />
            <p className="">Paste code</p>
          </button>
        </div>
      </div>
      <div className="flex gap-10 justify-end">
        {!isLoading && (
          <CustomButton state="forgot" onClick={onClick}>
            <img src={cancel} alt="" /> Cancel
          </CustomButton>
        )}
        <CustomButton
          //   state={isFilled ? "active" : "disabled"}
          isLoading={isLoading}
          onClick={handleLoading}
        >
          Continue
        </CustomButton>
      </div>
    </div>
  );
}
