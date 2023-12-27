import React from "react";
import CustomButton from "./CustomButton";
import airConditioner from "../assets/svg/airConditioner.svg";
import balconyDeck from "../assets/svg/balconyDeck.svg";
import carPark from "../assets/svg/carPark.svg";
import carIcon from "../assets/svg/carIcon.svg";
import dishWasher from "../assets/svg/dishWasher.svg";
import electricity from "../assets/svg/electricity.svg";
import tiledFloor from "../assets/svg/tiledFloor.svg";
import washingMachine from "../assets/svg/washingMachine.svg";
import pool from "../assets/svg/pool.svg";
import furnshedApartment from "../assets/svg/furnishedApartment.svg";

interface AmenitiesProps {
  features: string[];
}

const Amenities: React.FC<AmenitiesProps> = ({ features }) => {
  const icons = [
    carIcon,
    electricity,
    airConditioner,
    dishWasher,
    tiledFloor,
    pool,
    carPark,
    furnshedApartment,
    washingMachine,
    balconyDeck,
    carIcon,
  ];

  return (
    <div className=" pl-4 lg:pl-0 mt-10">
      <div className=" flex items-center lg:justify-start flex-wrap gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className=" bg-[#F7F7F8] w-fit h-10 px-3 py-2 flex items-center justify-center gap-2 border-[1px] border-[neutrals_700] rounded-[4px]"
          >
            <img
              src={icons[index]}
              alt={`icon-${index}`}
              className="w-5 h-5 object-contain "
            />
            <span className=" font-inter font-medium text-base text-[neutrals_100 leading-7]">
              {item}
            </span>
          </div>
        ))}
      </div>
      <CustomButton
        text="Show all amenities"
        className="flex w-40 h-12 ml-4 lg:ml-0 px-0 py-4 rounded font-inter font-medium text-base text-primary_main leading-7 border-[1px] border-primary_main mt-10"
      />
    </div>
  );
};

export default Amenities;
