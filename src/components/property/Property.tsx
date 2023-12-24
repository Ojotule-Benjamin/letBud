import React, { useState } from "react";
import saveIcon from "../../assets/svg/saveIcon.svg";
import shareIcon from "../../assets/svg/shareIcon.svg";
import reportIcon from "../../assets/svg/reportIcon.svg";
import icon1 from "../../assets/svg/icon1.svg";
import icon2 from "../../assets/svg/icon2.svg";
import icon3 from "../../assets/svg/icon3.svg";
import { property } from "../../constants";
import CustomButton from "../CustomButton";

const icons = [
  {
    id: 0,
    iconName: "Save",
    icon: saveIcon,
  },
  {
    id: 1,
    iconName: "Share",
    icon: shareIcon,
  },
  {
    id: 3,
    iconName: "Report",
    icon: reportIcon,
  },
];

const Property = () => {
  const [propertyData, setPropertyData] = useState<any>(null);
  return (
    <div className=" w-full px-5 lg:px-20 mt-10">
      {/* top */}
      <div className=" flex items-center justify-between mb-5">
        <h2 className=" font-interTight font-medium text-3xl leading-[52px]">
          Semi-detached duplex in Yaba
        </h2>
        <div className="flex items-center justify-between gap-3">
          {/* icons */}
          {icons.map((icon) => (
            <div
              key={icon.id}
              className=" flex items-center justify-center gap-2 py-4 px-3"
            >
              <img
                src={icon.icon}
                alt="save icon"
                className=" object-contain"
              />
              <p className=" font-inter font-medium text-base leading-7 text-primary_main">
                {icon.iconName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* bottom */}
      {property.map((item) => {
        return (
          <div
            key={item.id}
            className=" w-full h-full border-4 flex items-start justify-between"
          >
            {/* left */}
            <div className="w-[65%] flex flex-wrap items-start justify-start gap-5">
              {item.imgs.map((img) => (
                <img
                  src={img}
                  alt=""
                  className=" w-[346px] h-64 object-cover rounded-2xl "
                />
              ))}
            </div>
            {/* right */}
            <div className="w-[35%] h-full flex-1 pt-4 flex flex-col gap-3 bg-light">
              <p className=" font-inter font-medium text-base leading-7">
                {item.address}
              </p>
              <div className=" flex items-center justify-start ">
                <div className=" flex items-center justify-center gap-1">
                  <img src={icon1} alt="" />
                  <span className=" font-inter font-medium text-base text-[neutrals_200]">
                    5 Bedroom
                  </span>
                </div>
                <div className=" mx-2 h-4 border-r-[1px] border-[neutrals_500]"></div>
                <div className=" flex items-center justify-center gap-1">
                  <img src={icon2} alt="" />
                  <span className=" font-inter font-medium text-base text-[neutrals_200]">
                    6 Bathroom
                  </span>
                </div>
                <div className="h-4 mx-2 border-r-[1px] border-[neutrals_500]"></div>
                <div className=" flex items-center justify-center gap-1">
                  <img src={icon3} alt="" />
                  <span className=" font-inter font-medium text-base text-[neutrals_200]">
                    1000Sqft
                  </span>
                </div>
              </div>
              <p>Available 8 Nov</p>
              <div>
                <h3 className=" font-interTight font-semibold text-xl text-neutrals_100 leading-8 ">
                  Property Description
                </h3>
                <p className=" font-inter font-medium text-base text-neutrals_300 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <CustomButton
                text="Show More"
                className=" w-32 h-12 px-5 py-4 rounded font-inter font-medium text-base text-primary_main leading-7 border-[1px] border-primary_main mt-1"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Property;
