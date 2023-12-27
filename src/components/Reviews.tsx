import React from "react";
import CustomButton from "./CustomButton";
import Avatar from "../assets/img/Avatar.png";
import starIcon from "../assets/svg/starIcon.svg";
import markIcon from "../assets/svg/markIcon.svg";

const Reviews = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-16">
      <div className=" w-full px-4 lg:px-0 lg:w-[332px] h-[219px] flex flex-col items-center justify-between gap-6">
        <div className="w-full flex items-start justify-start gap-4">
          <img src={Avatar} alt="avatar" className=" w-16 h-16 object-cover" />
          <div className=" flex flex-col items-start justify-start">
            <span>Kolawole Real estate LTD </span>
            <span>Adewole K. </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start">
          <div className=" w-full flex items-start justify-between">
            <div className="w-full flex items-start justify-start gap-1 lg:gap-2 border-2">
              <img src={starIcon} alt="" className="" />
              <span>86 Reviews</span>
            </div>
            <div className="w-full flex items-center justify-start gap-1 lg:gap-2 border-2">
              <img src={markIcon} alt="" />
              <span>Identity Verified</span>
            </div>
          </div>

          <span>Joined in February, 2022</span>
        </div>
        <div className="w-full flex gap-2 lg:gap-6">
          <CustomButton
            text="Ask a question"
            className=" w-[154px] h-12 px-5 py-4 font-inter font-medium text-sm leading-5 rounded-[4px] text-white bg-primary_main"
          />
          <CustomButton
            text="See all reviews"
            className=" w-[154px] h-12 px-5 py-4 font-inter font-medium text-sm leading-5 rounded-[4px] border-[1px] border-primary_main text-primary_main"
          />
        </div>
      </div>
      <div className=" w-[90%] h-[218px] lg:w-[535px] lg:h-[192px] shadow-lg px-4 lg:px-8 py-5 mx-auto border-[1px]">
        <div className="w-full flex items-start justify-start gap-4 mb-5">
          <img src={Avatar} alt="avatar" className=" w-16 h-16 object-cover" />
          <div className=" flex flex-col items-start justify-start">
            <span>Joyce </span>
            <span>September 2022</span>
          </div>
        </div>
        <p>
          Westmore is literally right on the beach. You can wake up and see and
          hear the surf, which is quite magical. Clean, well-kept units.
        </p>
      </div>
    </div>
  );
};

export default Reviews;
