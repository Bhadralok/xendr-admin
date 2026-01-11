import { useState } from "react";
import Forgot from "../Components/Forgot";
import Verify from "../Components/Verify";
export default function ForgotPassword() {
  const [isVerify, setIsVerify] = useState(false);
  return (
    <div>
      {isVerify ? (
        <Verify onClick={() => setIsVerify(false)} />
      ) : (
        <Forgot onClick={() => setIsVerify(true)} />
      )}
    </div>
  );
}
