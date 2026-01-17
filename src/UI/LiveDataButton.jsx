import React from "react";

export default function LiveDataButton({
  icon,
  buttonText = "Live Data",
  onClick,
  style = "bg-tertiary-orange",
  textStyle = "text-primary-orange",
}) {
  return (
    <div>
      <button
        className={`h-15 rounded-2xl flex items-center justify-start cursor-pointer w-full py-5 px-4 gap-4 ${style}`}
        onClick={onClick}
      >
        <img src={icon} alt="" />
        <p className={`${textStyle} text-sm font-black`}>
          {buttonText}
        </p>
      </button>
    </div>
  );
}
