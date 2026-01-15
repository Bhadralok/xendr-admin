import { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function CustomInput({
  type = "text",
  placeholder = "",
  value,
  isSearch = false,
  onChange,
}) {
  const [show, setShow] = useState(false);
  const style = useRef();

  const handleShow = () => setShow((prev) => !prev);

  const handleChange = (e) => {
    if (style.current) {
      style.current.style.backgroundColor =
        e.target.value.length > 0 ? "#FFF2DF" : "#f8f8f8";
    }
    onChange(e); // report value to parent
  };

  return (
    <div className="relative">
      <input
        ref={style}
        type={type === "password" && show ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`${
          isSearch && "px-13"
        } bg-tertiary-grey w-full relative px-4 py-5 transition-all duration-200 placeholder:text-secondary-grey text-primary-black font-medium rounded-2xl outline-none border-none focus:outline-none`}
      />
      <div className="absolute top-[35%] left-4">
        {isSearch && <IoSearch size={22} color="#707070" />}
      </div>
      {type === "password" && (
        <div
          onClick={handleShow}
          className="absolute top-[35%] right-5 cursor-pointer"
        >
          {show ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
        </div>
      )}
    </div>
  );
}
