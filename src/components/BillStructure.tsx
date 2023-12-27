import React from "react";

interface billStructureProps {
  billDetails: {
    cautionFee: number;
    agencyFee: number;
    letBudServiceFee: number;
    electricityBill: number;
    wasteBill: number;
    RentalYearlyFee: number;
  };
}

const BillStructure: React.FC<billStructureProps> = ({ billDetails }) => {
  const formatConverter = (amount: number): string => {
    return amount.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    });
  };

  const totalAmount =
    billDetails.cautionFee +
    billDetails.agencyFee +
    billDetails.letBudServiceFee +
    billDetails.electricityBill +
    billDetails.wasteBill +
    billDetails.RentalYearlyFee;
  return (
    <div className=" w-full h-auto mt-10 px-2 lg:px-5 p-0">
      <h2 className=" font-inter font-bold text-lg lg:text-2xl text-[#000] ">
        Bill Structure
      </h2>
      <div className="mt-5">
        <div className=" flex items-center justify-between font-inter font-bold text-base lg:text-xl mb-8">
          <span>Description</span>
          <span>Amount</span>
        </div>
        <div>
          {/* utilities */}
          <div className=" flex flex-col items-center justify-between font-inter font-semibold text-sm lg:text-base text-[#000] gap-4 lg:gap-5">
            <div className=" w-full flex items-start justify-between">
              <div className=" flex items-center justify-center">
                <h5 className="">Caution Fee</h5>
                <p className="ml-1 bg-[#4E7CA8] flex items-center justify-center font-inter font-extralight w-14 h-5 text-xs text-center text-white rounded-md">
                  One time
                </p>
              </div>
              <span className=" text-sm lg:text-base">
                {formatConverter(billDetails.cautionFee)}
              </span>
            </div>
            <div className=" w-full flex items-start justify-between">
              <div className=" flex items-center justify-center">
                <h5>Agency Fee</h5>
                <p className="ml-1 bg-[#4E7CA8] flex items-center justify-center font-inter font-thin w-14 h-5 text-xs text-center text-white rounded-md">
                  One time
                </p>
              </div>
              <span className=" text-sm lg:text-base">
                {formatConverter(billDetails.agencyFee)}
              </span>
            </div>
            <div className=" w-full flex items-start justify-between mb-5">
              <div className=" flex items-center justify-center">
                <h5>LetBud Service Fee</h5>
                <p className="ml-1 bg-[#4E7CA8]  flex items-center justify-center font-inter font-thin w-14 h-5 text-xs text-center text-white rounded-md">
                  One time
                </p>
              </div>
              <span className=" text-sm lg:text-base">
                {formatConverter(billDetails.letBudServiceFee)}
              </span>
            </div>

            <div className=" w-full flex items-start justify-between ">
              <div className="flex items-center justify-center">
                <h5>Waste Bill</h5>
                <p className="ml-1 bg-[#62321B] flex items-center justify-center font-inter font-thin w-14 h-5 text-xs text-center text-white rounded-md">
                  monthly
                </p>
              </div>
              <span className=" text-sm lg:text-base">
                {formatConverter(billDetails.wasteBill)}
              </span>
            </div>
            <div className=" w-full flex items-start justify-between mb-5">
              <div className=" flex items-center justify-center">
                <h5>Electricity Bill</h5>
                <p className="ml-1 bg-[#62321B] flex items-center justify-center font-inter font-thin w-14 h-5 text-xs text-center text-white rounded-md">
                  monthly
                </p>
              </div>
              <span className=" text-sm lg:text-base">
                {formatConverter(billDetails.electricityBill)}
              </span>
            </div>

            <div className=" w-full flex items-start justify-between mb-10">
              <div className=" flex items-center justify-center">
                <h5>Rental Fee</h5>
                <p className="ml-1 bg-[#35624D] flex items-center justify-center font-inter font-thin w-14 h-5 text-xs text-center text-white rounded-md">
                  yearly
                </p>
              </div>
              <span className=" text-sm lg:text-base">
                {formatConverter(billDetails.RentalYearlyFee)}
              </span>
            </div>

            <div className=" w-full flex items-start justify-between">
              <h5 className=" font-inter font-normal text-base text-[#868DA6]">
                Sum Total Amount{" "}
              </h5>

              <strong className=" font-inter font-semibold text-lg text-neutrals_100">
                {formatConverter(totalAmount)}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillStructure;
