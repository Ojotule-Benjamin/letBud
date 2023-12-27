import React from "react";
import Map from "../assets/img/Map.png";
import mobileImage from "../assets/img/mobileImage.png";

const CustomGoogleMap = () => {
  return (
    <div className="w-full h-auto my-6 px-6 lg:px-0 lg:my-12">
      <h3 className=" font-interTight font-semibold text-xl leading-8 text-neutrals_100 mb-3 lg:mb-6">
        Where will it be
      </h3>
      <img src={Map} alt="" className=" hidden lg:flex w-full object-cover" />
      <img
        src={mobileImage}
        alt=""
        className="flex lg:hidden  w-full object-cover"
      />
    </div>
  );
};

export default CustomGoogleMap;
