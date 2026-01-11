import { useRef } from "react";

export default function OTPInput({ onChange, onKeyDown }) {
  const style = useRef();
  const handleChange = (e) => {
    if (style.current) {
      style.current.style.backgroundColor =
        e.target.value.length > 0 ? "#FFF2DF" : "#f8f8f8";
    }
    onChange(e); // report value to parent
  };
  return (
    <input
      ref={style}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      type="number"
      className="w-14 h-15 py-11 rounded-2xl remove-scrollbar text-center font-black outline-0 bg-tertiary-grey placeholder:text-secondary-grey"
      placeholder="-"
    />
  );
}
