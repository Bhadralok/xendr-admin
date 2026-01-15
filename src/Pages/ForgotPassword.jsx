import { useState } from "react";
import Forgot from "../Components/Forgot";
import Verify from "../Components/Verify";
export default function ForgotPassword() {
  const [isVerify, setIsVerify] = useState(false);
  // const handleFalse = () => {
  //   setIsVerify(true);
  //   setInterval(() => {
  //     setIsVerify(false);
  //   }, 1500);
  // };
  const handleTrue = (a, b) => {
    setIsVerify(a);
    setTimeout(() => {
      setIsVerify(b);
    }, 1500);
  };
  return (
    <div>
      {isVerify ? (
        <Verify onClick={() => setIsVerify(false)} />
      ) : (
        <Forgot onClick={() => handleTrue(false, true)} />
      )}
    </div>
  );
}
