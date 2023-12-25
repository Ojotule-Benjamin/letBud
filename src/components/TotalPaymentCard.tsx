import React from "react";
import CustomButton from "./CustomButton";

interface paymentprops {
  amount: string;
}

const TotalPaymentCard: React.FC<paymentprops> = ({ amount }) => {
  return (
    <div className=" w- lg:w-[396px] h-[213px] rounded-lg shadow-xl border-[1px] border-neutrals_700 px-5 py-8 bg-white">
      <div className=" w-full flex items-center justify-between">
        <div className=" flex items-center justify-center">
          <h4 className=" font-interTight font-bold text-2xl text-[#1E1E2D] leading-10 ">
            ₦ {amount}{" "}
            <span className=" font-inter font-medium text-base text-neutrals_300 leading-7">
              yearly
            </span>
          </h4>{" "}
        </div>
        <span className=" font-inter font-normal text-sm text-neutrals_100">
          Flat
        </span>
      </div>
      <div className=" mb-8 flex items-center justify-start font-inter font-medium text-sm text-[#4B7BCD] ">
        <p className="font-inter font-medium text-sm text-[#4B7BCD]">
          Total Package -{" "}
        </p>
        <h4 className="pl-[2px]"> ₦6,000,000</h4>
      </div>
      <div className=" w-full flex-row flex items-center justify-between gap-5 lg:gap-0">
        <CustomButton
          className=" w-[164px] h-12 rounded-[4px] border-[1px] border-[#274C8C] font-inter font-medium text-base text-primary_main leading-7 bg-white"
          text="Request a tour"
        />
        <CustomButton
          className=" w-[164px] h-12 rounded-[4px] border-[1px] border-[#274C8C] font-inter font-medium text-base text-neutrals_100 leading-7 bg-button_active"
          text="Request a rent"
        />
      </div>
    </div>
  );
};

export default TotalPaymentCard;
