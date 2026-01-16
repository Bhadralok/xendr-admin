import swift from "../assets/swifthori.svg";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-between shadow-[0px_-10px_50px_10px_rgba(0,0,0,0.05)] py-5 rounded-2xl px-5 items-center">
      <div>
        <p className="font-black text-primary-black text-xs">
          &copy; {year}, All Rights Reserved.
        </p>
        <p className="text-primary-grey font-medium text-xs">
          Designed and Developed by Swiftxend, for Swiftxend!
        </p>
      </div>
      <div>
        <img src={swift} alt="" className="h-7" />
      </div>
    </div>
  );
}
