import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import userFill from "../assets/svg/userFill.svg";
import menuIcon from "../assets/svg/menuIcon.svg";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full h-20 px-3 lg:px-16 py-4 flex items-center justify-between border-b-[1px] border-background_color">
      <div className=" w-1/2 lg:w-full lg:cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
      <div className=" hidden w-full lg:flex items-center justify-center gap-10 font-inter font-semibold text-base text-neutrals_100 leading-7 cursor-pointer">
        <span className=" text-primary_main">Search</span>
        <span>Property</span>
        <span>More</span>
      </div>

      <div className=" hidden w-full lg:flex items-center justify-end gap-2 ">
        <span className="font-inter font-semibold text-base text-primary_main leading-7 cursor-pointer">
          Post a Property
        </span>
        <div className=" w-[92px] h-11 flex items-center justify-between border-[1px] rounded-[32px]">
          <img
            src={menuIcon}
            alt="menu icon"
            className=" mx-3 my-10 object-contain"
          />
          <div className=" w-9 h-9 my-1 mr-2 bg-background_color p-1 flex items-center justify-center rounded-[40px]">
            <img src={userFill} alt="" className=" object-contain" />
          </div>
        </div>
      </div>

      {/* Toggle menu icon */}
      {open ? (
        <div
          onClick={() => setOpen(false)}
          className="w-[92px] h-11 lg:hidden flex items-center justify-between border-[1px] rounded-[32px]"
        >
          <img
            src={menuIcon}
            alt="menu icon"
            className="mx-3 my-10 object-contain"
          />
          <div className="w-9 h-9 my-1 mr-2 bg-background_color p-1 flex items-center justify-center rounded-[40px]">
            <img src={userFill} alt="" className="object-contain" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setOpen(true)}
          className="w-[92px] h-11 lg:hidden flex items-center justify-between border-[1px] rounded-[32px]"
        >
          <CloseIcon style={{ fontSize: "24px" }} />
          <div className="w-9 h-9 my-1 mr-2 bg-background_color p-1 flex items-center justify-center rounded-[40px]">
            <img src={userFill} alt="" className="object-contain" />
          </div>
        </div>
      )}

      {/* Menu dropdown */}
      {!open && (
        <ul className=" bg-orange-300 w-3/5 h-[calc(100vh-5rem)] z-20 flex flex-col font-inter font-semibold text-base text-neutrals_100 leading-7 items-start justify-start absolute top-20 left-0 right-0 transition-transform transform ease-in-out duration-5000">
          <span className=" text-primary_main">Search</span>
          <span>Property</span>
          <span>More</span>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
