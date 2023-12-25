import React from "react";
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";

interface UnitDetailsProps {
  amount: string;
  bedroom?: string;
  bathroom?: string;
  sqft?: string;
  houseDetails: string[];
  img: string;
}

const UnitDetails: React.FC<UnitDetailsProps> = ({
  amount,
  bedroom,
  bathroom,
  sqft,
  houseDetails,
  img,
}) => {
  return (
    <div className=" w-[565px] h-[201px] bg-[#FCFCFD] flex items-center justify-between gap-6 px-5 py-0 border-[1px] border-[#E9EAED] mt-10">
      <div className="w-44 h-[137px]">
        <img src={img} alt="" className=" w-full h-full object-cover" />
      </div>
      <div className="w-[389px]">
        <h3 className=" mb-4">Unit 1</h3>
        <span className="">₦ {amount}</span>
        <div className=" w-full flex items-center justify-start mt-3">
          <div className=" flex items-center justify-center gap-1">
            <img src={icon1} alt="" className=" w-4 h-4" />
            <span className=" font-inter font-medium text-xs lg:text-sm text-[neutrals_200]">
              {bedroom}
            </span>
          </div>
          <div className=" mx-1 lg:mx-2 h-4 border-r-[1px] border-[neutrals_500]"></div>
          <div className=" flex items-center justify-center gap-1">
            <img src={icon2} alt="" className=" w-4 h-4" />
            <span className=" font-inter font-medium text-xs lg:text-sm text-[neutrals_200]">
              {bathroom}
            </span>
          </div>
          <div className=" mx-1 lg:mx-2 h-4 border-r-[1px] border-[neutrals_500]"></div>
          <div className=" flex items-center justify-center gap-1">
            <img src={icon3} alt="" className=" w-4 h-4" />
            <span className=" font-inter font-medium text-xs lg:text-sm text-[neutrals_200]">
              {sqft}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
