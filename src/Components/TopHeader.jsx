import CustomInput from "../UI/CustomInput";

export default function TopHeader() {
  const user = {
    name: "Bhadralok",
    email: "bhadralok@bhadralok.com",
  };

  const firstLetter = user.name?.charAt(0)?.toUpperCase();
  return (
    <div>
      <div className="flex flex-col justify-between w-full">
        <div className="my-2 mx-4 rounded-2xl py-5 shadow-bg px-5 h-fit">
          <div className="flex justify-between items-center ">
            <div className="w-[20vw] ">
              <CustomInput
                placeholder="Search for Xend IDs, names..."
                isSearch={true}
              />
            </div>
            <div className="text-primary-black flex items-center gap-2.5">
              <div className="text-right">
                <p className="font-black ">Hi {user.name}</p>
                <p className="font-medium text-sm text-primary-grey">
                  {user.email}
                </p>
              </div>
              <div className="size-15 bg-tertiary-orange text-primary-orange text-2xl rounded-2xl flex items-center justify-center font-black">
                {firstLetter}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-4 py-2.5 ">
                  <Footer />
                </div> */}
      </div>
    </div>
  );
}
