import React from "react";

export default function LiveDataButton({ icon, buttonText = "Live Data" }) {
  return (
    <div>
      <button
        className="h-15 rounded-2xl flex items-center justify-start cursor-pointer w-full py-5 px-4 gap-4 bg-tertiary-orange"
        onClick={() => console.log("something happened")}
      >
        <img src={icon} alt="" />
        <p className="text-sm text-primary-orange font-black">{buttonText}</p>
      </button>
    </div>
  );
}
