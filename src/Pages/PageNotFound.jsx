import { useNavigate } from "react-router-dom";
import Blob from "../assets/blob.jsx";
import logo from "../assets/favicon.svg";
import CustomButton from "../UI/CustomButton.jsx";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen gap-8 flex flex-col items-center justify-center">
      <div>
        <div className="flex flex-col h-69 items-center gap-1">
          <div className="relative ">
            <Blob />
            <div className="absolute top-[40%] left-[35%]">
              <img src={logo} alt="" className="h-20" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-4xl text-primary-black">
            <span className="text-primary-orange font-black">Oops... </span>Page
            Not Found
          </h1>
          <p className="text-primary-grey">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <CustomButton onClick={() => navigate("/")}>Back to Home</CustomButton>
        <CustomButton onClick={() => navigate(-1)}>Go back</CustomButton>
      </div>
    </div>
  );
}
