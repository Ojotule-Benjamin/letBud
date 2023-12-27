import React from "react";
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";

interface HouseDetails {
  unit: number;
  amount: string;
  unitDetails?: string[];
  img?: string;
}

interface UnitDetailsProps {
  houseDetails: HouseDetails;
  isSelected: boolean;
  onClick?: () => void;
}

const detailIconMapping: { [key: string]: string } = {
  bedroom: icon1,
  bathroom: icon2,
  sqft: icon3,
};

const UnitDetails: React.FC<UnitDetailsProps> = (props) => {
  const { unitDetails } = props.houseDetails;

  return (
    <div
      className={`w-[90%] md:w-[343px] lg:w-[565px] h-[170px] lg:h-[201px] bg-[#FCFCFD] shadow-xl cursor-pointer flex items-center justify-between gap-3 lg:gap-6 px-2 lg:px-5 py-0 rounded-lg mx-auto md:mx-0 mt-10 ${
        props.isSelected && "border-[1px] border-primary_main"
      }`}
      onClick={props.onClick}
    >
      <div className=" w-full h-[90px] lg:w-44 lg:h-[137px]">
        <img
          src={props.houseDetails.img}
          alt=""
          className=" w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="w-[389px]">
        <h3 className=" font-inter font-medium text-sm lg:text-base text-primary_main leading-7 mb-2 lg:mb-4">
          Unit {props.houseDetails.unit}
        </h3>
        <span className="font-inter font-bold text-sm lg:text-base text-neutrals_100 leading-7">
          ₦ {props.houseDetails.amount}
        </span>

        <div className=" w-full flex items-center justify-start mt-0 lg:mt-3">
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
                    className="hidden lg:flex w-4 h-4"
                  />
                  <span className="font-inter font-normal text-[9px] lg:text-base text-[neutrals_200]">
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
