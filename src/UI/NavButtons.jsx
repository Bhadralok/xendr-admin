export default function NavButtons({
  imageInactive,
  imageActive,
  isActive,
  isCollapsed = true,
  navtext,
}) {
  const base = "h-15 w-15 p-5 rounded-2xl text-sm flex items-center transition-all duration-300 cursor-pointer";
  const active = "bg-primary-orange text-white font-black";
  const inactive = "bg-white text-primary-grey  font-medium";
  const collapsed = "w-full pr-20 pl-5 gap-4";
  return (
    <div
      className={`${base} ${isActive ? active : inactive} ${
        isCollapsed ? "" : collapsed
      }`}
    >
      <img
        src={isActive ? imageActive : imageInactive}
        alt={isActive ? "active" : "inactive"}
        className="h-5 w-5"
      />
      {!isCollapsed && <p>{navtext}</p>}
    </div>
  );
}
