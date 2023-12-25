import React, { useState } from "react";
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";

interface UnitDetailsProps {
  houseDetails: {
    unit: number;
    amount: string;
    unitDetails?: string[];
    img?: string;
  };
}

const detailIconMapping: { [key: string]: string } = {
  bedroom: icon1,
  bathroom: icon2,
  sqft: icon3,
};

const UnitDetails: React.FC<UnitDetailsProps> = (props) => {
  const { unitDetails } = props.houseDetails;

  return (
    <div className=" w-[565px] h-[201px] cursor-pointer bg-[#FCFCFD] flex items-center justify-between gap-6 px-5 py-0 border-[1px] border-[#E9EAED] mt-10">
      <div className="w-44 h-[137px]">
        <img
          src={props.houseDetails.img}
          alt=""
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="w-[389px]">
        <h3 className=" font-inter font-medium text-base text-primary_main leading-7 mb-4">
          Unit {props.houseDetails.unit}
        </h3>
        <span className="font-inter font-bold text-base text-neutrals_100 leading-7">
          ₦ {props.houseDetails.amount}
        </span>

        <div className=" w-full flex items-center justify-start mt-3">
          {unitDetails &&
            unitDetails.map((detail, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="mx-1 lg:mx-2 h-4 border-r-[1px] border-[neutrals_500]"></div>
                )}
                <div className="flex items-center justify-center gap-1">
                  <img
                    src={detailIconMapping[detail] || icon1}
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="font-inter font-medium text-xs lg:text-base text-[neutrals_200]">
                    {detail}
                  </span>
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
