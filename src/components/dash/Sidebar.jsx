import React from "react";
import logo from "../../icons/logo.png";
import icon from "../../icons/icon1.png";
import icon2 from "../../icons/icon2.png";
import icon3 from "../../icons/icon3.png";
import icon4 from "../../icons/icon4.png";
import icon5 from "../../icons/icon5.png";
import icon6 from "../../icons/icon6.png";
import icon7 from "../../icons/icon7.png";

function Sidebar() {
  return (
    <>
      <div>
        <div className="">
          <div className="w-60 h-16 flex items-center">
            <img src={logo} alt="logo" className="h-8 w-20 mx-auto" />
          </div>
          <div className="h-[91vh] w-60 flex flex-col justify-between">
            <div className="gap-2  mx-4  flex flex-col ">
              <div className=" border border-b-1 border-b-neutral-200 w-48"></div>
              <div className="  hover:cursor-pointer flex gap-2 rounded-md  hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-48">
                <img src={icon} alt="icone" className="" />
                <p className="font-worksans text-base font-semibold text-[#FA782F]">
                  My Projects
                </p>
              </div>

              <div className="hover:cursor-pointer flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-52">
                <img src={icon2} alt="icone" />
                <p className="font-worksans text-base font-semibold text-[#C4C4C4]">
                  Sample Projects
                </p>
              </div>
              <div className=" mt-4 border border-b-1 border-b-neutral-200 w-48"></div>
              <div className="hover:cursor-pointer flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-48">
                <img src={icon3} alt="icone" />
                <p className="font-worksans text-base font-semibold text-[#C4C4C4]">
                  Apps
                </p>
              </div>
              <div className="hover:cursor-pointer flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-4 py-3 h-12   w-48">
                <img src={icon4} alt="icone" />
                <p className="font-worksans text-base font-semibold text-[#C4C4C4]">
                  Intro to Necleo
                </p>
              </div>
            </div>
            <div className="w-60 m-4 gap-2 flex flex-col ">
              <div className="hover:cursor-pointer flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-4 py-3 h-12   w-48">
                <img src={icon5} alt="icone" />
                <p className="font-worksans text-base font-semibold text-[#C4C4C4]">
                  Help & Support
                </p>
              </div>
              <div className="hover:cursor-pointer flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-48">
                <img src={icon6} alt="icone" />
                <p className="font-worksans text-base font-semibold text-[#C4C4C4]">
                  Feedback
                </p>
              </div>
              <div className="hover:cursor-pointer flex gap-2 rounded-md hover:bg-violet-50  hover:border-l-4 hover:border-[#8B3DFF] px-5 py-3 h-12   w-48">
                <img src={icon7} alt="icone" />
                <p className="font-worksans text-base font-semibold text-[#211e1e]">
                  Collapse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
