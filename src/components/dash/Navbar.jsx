import React from "react";
import user from "../../icons/user.png";
import icon8 from "../../icons/icon8.png";

const Navbar = () => {
  return (
    <>
      <div className="relative h-14">
        <div className="flex mt-1 justify-end gap-2 items-center">
          <div className="flex gap-2 me-2 flex-col">
            <div className="flex gap-4 ">
              <p className=" font-medium text-base my-auto font-worksans">
                Free Trial
              </p>
              <p className="border-2 h-6 my-auto border-s-2 border-gray-800 "></p>
              <p className=" my-auto text-xs font-medium">2days left</p>
            </div>
            <div>
              <p className="text-[#FA782F]  text-xs font-medium">
                Extend free trail
              </p>
            </div>
          </div>
          <div className="flex gap-2 me-2">
            <div className="">
              <img src={user} className="w-9 h-9 " alt="icon1" />
            </div>
            <button className="">
              <img src={icon8} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
