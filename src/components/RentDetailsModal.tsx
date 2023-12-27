import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";

interface RentDetailsModalProps {
  onClose: () => void;
  unitDetails: any;
}

const RentDetailsModal: React.FC<RentDetailsModalProps> = ({
  onClose,
  unitDetails,
}) => {
  const iconsLogo = [icon1, icon2, icon3];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className=" bg-white max-w-[90%] h-auto lg:max-w-5xl p-6 rounded-md">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 mt-4">
          <img src={unitDetails.img} alt="" />
          <span className=" flex items-center justify-center">
            <span className=" font-inter font-bold text-neutral-500 text-base lg:text-xl mr-3 lg:mr-6">
              Amount:{" "}
            </span>
            <p className=" font-inter font-bold text-neutral-900 text-base lg:text-xl">
              ₦ {unitDetails.amount}
            </p>
          </span>

          <div className=" flex items-center justify-between flex-wrap gap-6">
            {unitDetails.unitDetails.map((detail: string, index: number) => (
              <div
                key={index}
                className=" w-auto h-9 flex items-center justify-center gap-1 border-[1px] rounded-[4px]"
              >
                <img
                  src={iconsLogo[index]}
                  alt={`icon-${index}`}
                  className="w-4 h-4 mr-1"
                />
                <span className=" text-sm text-neutrals_300">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* close modal button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-primary_main text-white rounded-md hover:bg-primary_dark"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentDetailsModal;
