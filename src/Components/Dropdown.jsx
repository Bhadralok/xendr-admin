import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Today");

  return (
    <div className="relative">
      <button
        className="flex gap-6 items-center bg-tertiary-grey py-5 px-3.5 rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-1 items-start ">
          <p className="text">Selected timeline</p>
          <p className="text-primary-black font-black">{value}</p>
        </div>
        {!isOpen ? (
          <IoIosArrowDropdown size={26} />
        ) : (
          <IoIosArrowDropup size={26} />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-22  right-0">
          <div className="flex flex-col z-10 bg-white py-4 items-start rounded-2xl shadow-bg">
            {duration.map((item) => (
              <button
                className="text-[#565656] px-6 py-4  text-xs font-black"
                key={item}
                onClick={() => {
                  setValue(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const duration = ["Today", "This week", "Months", "Years"];
