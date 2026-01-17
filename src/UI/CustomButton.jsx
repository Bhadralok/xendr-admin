import loader from "../assets/loader.svg";
export default function CustomButton({
  children,
  state = "active",
  isLoading,
  onClick,
}) {
  const color =
    state === "active"
      ? isLoading
        ? "bg-tertiary-grey text-black  w-full text-white"
        : "bg-primary-orange w-[13.075rem] flex items-center justify-center gap-3 cursor-pointer text-white hover:bg-opacity-90"
      : state === "forgot"
      ? "bg-transparent w-[13.075rem] flex items-center justify-center gap-2 text-primary-black border-3"
      : state === "disabled" &&
        "bg-tertiary-grey w-[13.075rem] flex items-center justify-center gap-3 text-secondary-grey";
  return (
    <button
      className={`${color} font-black px-8 h-15 transition-all duration-300 rounded-2xl`}
      disabled={state === "disabled"}
      onClick={onClick}
    >
      {isLoading ? (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={loader} alt="loader" className="loader" />
        </div>
      ) : (
        children
      )}
    </button>
  );
}
