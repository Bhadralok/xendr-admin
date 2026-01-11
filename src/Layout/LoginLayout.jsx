import { Outlet } from "react-router-dom";
import doodle from "../assets/doodle.png";
import swift from "../assets/swifthori.svg";

export default function LoginLayout() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center "
      style={{ backgroundImage: `url("${doodle}")` }}
    >
      <div className="flex flex-col items-center bg-white rounded-2xl gap-50 w-fit p-10">
        <div className="flex items-start flex-col justify-end w-full">
          <img src={swift} alt="" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
