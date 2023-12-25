import React, { useState } from "react";
import saveIcon from "../../assets/svg/saveIcon.svg";
import shareIcon from "../../assets/svg/shareIcon.svg";
import reportIcon from "../../assets/svg/reportIcon.svg";
import icon1 from "../../assets/svg/icon1.svg";
import icon2 from "../../assets/svg/icon2.svg";
import icon3 from "../../assets/svg/icon3.svg";
import { property } from "../../constants";
import CustomButton from "../CustomButton";
import TotalPaymentCard from "../TotalPaymentCard";
import { CustomTabs } from "../CustomTab";
import UnitDetails from "../UnitDetails";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const compareAmount = (a: any, b: any) => {
    const amountA = parseFloat(a.amount);
    const amountB = parseFloat(b.amount);

    if (amountA < amountB) {
      return -1;
    }
    if (amountA > amountB) {
      return 1;
    }
    return 0;
  };

  const sortedProperty = property.sort(compareAmount);

  const leastAmountProperty = sortedProperty[0];

  const tabs = [
    {
      label: "Unit Details",
      content: (
        <div>
          {leastAmountProperty.units.map((propertyItem, propertyIndex) => {
            return (
              <div key={propertyIndex}>
                <UnitDetails key={propertyIndex} houseDetails={propertyItem} />
              </div>
            );
          })}
        </div>
      ),
    },
    { label: "Amenities", content: <div>Content for Amenities</div> },
    {
      label: "Policies",
      content: (
        <div>
          <h2>Policies</h2>
          <h4>Getting There</h4>
          <h4>House details and rules</h4>
          <h4>Price and availability</h4>
        </div>
      ),
    },
    { label: "Bill Structure", content: <div>Content for Bill Structure</div> },
  ];

  return (
    <div className=" w-full px-0 lg:px-20 pb-40 mt-0 lg:mt-10">
      {leastAmountProperty && (
        <div
          key={leastAmountProperty.id}
          className="w-full h-full flex flex-col-reverse lg:flex-col "
        >
          <div
            key={leastAmountProperty.id}
            className="w-full h-full flex flex-col-reverse lg:flex-col "
          >
            {/* top */}
            <div className=" w-full hidden lg:flex px-4 lg:px-0 flex-col lg:flex-row items-start justify-between mb-5">
              <h2 className=" w-full lg:w-[80%] font-interTight font-medium text-xl lg:text-3xl lg:leading-[52px] text-start">
                Semi-detached duplex in Yaba
              </h2>
              <div className=" w-full lg:w-[40%] flex items-start justify-between gap-0">
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
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-0 lg:gap-8">
              {/* left => images display on web view */}
              <div className=" hidden w-full lg:w-[65%] lg:flex flex-wrap items-start justify-start gap-5">
                {leastAmountProperty.imgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className=" w-[346px] h-64 object-cover rounded-2xl "
                  />
                ))}
              </div>

              {/* images display on mobile */}
              <div className=" w-full h-64 flex lg:hidden relative overflow-hidden">
                {leastAmountProperty.imgs.map((img, index) => {
                  const handleDotClick = (index: any) => {
                    setCurrentIndex(index);
                  };

                  return (
                    <div>
                      <img
                        src={img}
                        alt=""
                        className={`w-full h-64 object-cover absolute transition-transform transform ${
                          index === currentIndex
                            ? "translate-x-0"
                            : "translate-x-full"
                        }`}
                      />

                      <div className="absolute flex items-center space-x-2 bottom-4 left-1/2 transform -translate-x-1/2">
                        {leastAmountProperty.imgs.map((_, index) => (
                          <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                              index === currentIndex
                                ? " bg-primary_main"
                                : "bg-gray-400"
                            }`}
                          />
                        ))}
                      </div>

                      <div className=" absolute top-6 right-6 bg-transparent flex items-center gap-4">
                        {/* icons */}
                        {icons.map((icon) => (
                          <div
                            key={icon.id}
                            className=" bg-white rounded-full w-7 h-7 flex items-center justify-center  "
                          >
                            <img
                              src={icon.icon}
                              alt="save icon"
                              className=" w-4 h-4 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* right */}
              <div className=" w-full p-4 lg:p-0 lg:w-[35%] h-full flex-1 mt-0 lg:mt-4 flex flex-col gap-3 bg-light">
                <h2 className=" flex lg:hidden w-full lg:w-[80%] font-interTight font-medium text-xl lg:text-3xl lg:leading-[52px] text-start">
                  Semi-detached duplex in Yaba
                </h2>
                <p className=" w-full text-start font-inter font-medium text-base leading-7">
                  {leastAmountProperty.address}
                </p>
                <div className=" w-full flex items-center justify-start ">
                  <div className=" flex items-center justify-center gap-1">
                    <img src={icon1} alt="" />
                    <span className=" font-inter font-medium text-xs lg:text-base text-[neutrals_200]">
                      5 Bedroom
                    </span>
                  </div>
                  <div className=" mx-1 lg:mx-2 h-4 border-r-[1px] border-[neutrals_500]"></div>
                  <div className=" flex items-center justify-center gap-1">
                    <img src={icon2} alt="" />
                    <span className=" font-inter font-medium text-xs lg:text-base text-[neutrals_200]">
                      6 Bathroom
                    </span>
                  </div>
                  <div className=" mx-1 lg:mx-2 h-4 border-r-[1px] border-[neutrals_500]"></div>
                  <div className=" flex items-center justify-center gap-1">
                    <img src={icon3} alt="" />
                    <span className=" font-inter font-medium text-xs lg:text-base text-[neutrals_200]">
                      1000Sqft
                    </span>
                  </div>
                </div>
                <p className=" font-inter font-medium text-base text-neutrals_200 leading-7">
                  Available {leastAmountProperty.date}
                </p>
                <div>
                  <h3 className=" font-interTight font-semibold text-xl text-neutrals_100 leading-8 ">
                    Property Description
                  </h3>
                  <p className=" font-inter font-medium text-base text-neutrals_300 leading-7">
                    {leastAmountProperty.propertyDesc}
                  </p>
                </div>
                <CustomButton
                  text="Show More"
                  className="hidden lg:flex w-32 h-12 px-5 py-4 rounded font-inter font-medium text-base text-primary_main leading-7 border-[1px] border-primary_main mt-1"
                />
                <CustomButton
                  text="Learn More"
                  className=" flex lg:hidden w-[87px] h-7 font-inter font-medium text-base text-primary_main "
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=" w-full flex flex-col-reverse lg:flex-row gap-0 lg:gap-8">
        <div className=" w-full lg:w-[65%] mt-8 lg:mt-16">
          {/* <PropertyTab /> */}
          <CustomTabs tabs={tabs} />

          <CustomButton
            text="Show all units"
            className="hidden lg:flex w-[146px] h-12 px-0 py-4 rounded font-inter font-medium text-base text-primary_main leading-7 border-[1px] border-primary_main mt-10"
          />
        </div>
        <div className=" w-full lg:w-[35%]">
          <TotalPaymentCard amount={leastAmountProperty.amount} />
        </div>
      </div>
    </div>
  );
};

export default Property;
