import React from "react";
import Sidebar from "./dash/Sidebar";
import Navbar from "./dash/Navbar";
import Cards from "./dash/Cards";

function Home() {
  return (
    <>
      <div className=" flex bg-slate-100">
        <div className="w-60 bg-white">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <div className="bg-white">
            <Navbar />
          </div>
          <div className="">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
