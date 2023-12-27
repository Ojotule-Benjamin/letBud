import React from "react";
import CustomButton from "./CustomButton";

interface paymentprops {
  billDetails: {
    cautionFee: number;
    agencyFee: number;
    letBudServiceFee: number;
    electricityBill: number;
    wasteBill: number;
    RentalYearlyFee: number;
  };
  selectedUnitIndex: number | null;
  onRequestRent: () => void;
}

const TotalPaymentCard: React.FC<paymentprops> = ({
  billDetails,
  selectedUnitIndex,
  onRequestRent,
}) => {
  const isActive = selectedUnitIndex !== null;

  const totalAmount =
    billDetails.cautionFee +
    billDetails.agencyFee +
    billDetails.letBudServiceFee +
    billDetails.electricityBill +
    billDetails.wasteBill +
    billDetails.RentalYearlyFee;

  const formatConverter = (amount: number): string => {
    return amount.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    });
  };
  return (
    <div className=" w-full lg:w-[396px] h-[213px] rounded-lg shadow-xl border-[1px] border-neutrals_700 px-5 py-8 bg-white">
      <div className=" w-full flex items-center justify-between">
        <div className=" flex items-center justify-center">
          <h4 className=" font-interTight font-bold text-2xl text-[#1E1E2D] leading-10 ">
            {formatConverter(billDetails.RentalYearlyFee)}{" "}
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
        <h4 className="pl-[2px]">{formatConverter(totalAmount)}</h4>
      </div>
      <div className=" w-full flex-row flex items-center justify-between gap-5 lg:gap-0">
        <CustomButton
          className=" w-[164px] h-12 rounded-[4px] border-[1px] border-[#274C8C] font-inter font-medium text-base text-primary_main leading-7 bg-white"
          text="Request a tour"
        />
        <CustomButton
          className={`w-[164px] h-12 rounded-[4px] border-[1px] font-inter font-medium text-base text-neutrals_100 leading-7 ${
            isActive
              ? "bg-button_active border-none"
              : "bg-neutrals_700 border-[#274C8C]"
          }`}
          text="Request a rent"
          onClick={onRequestRent}
        />
      </div>
    </div>
  );
};

export default TotalPaymentCard;
