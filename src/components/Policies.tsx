import React from "react";

type policies = {
  text?: string;
};

const Policies: React.FC<policies> = ({ text = "Policies" }) => {
  return (
    <div className=" flex items-start justify-start flex-col gap-5 pl-4 mt-10">
      <h2 className=" font-inter font-semibold text-xl leading-8 text-neutrals_100">
        {text}
      </h2>
      <div>
        <h3 className=" font-inter font-semibold text-base leading-7 text-neutrals_100">
          Getting there
        </h3>
        <p className=" font-inter font-semibold text-sm lg:text-base leading-7 text-neutrals_300">
          . Free parking on the premises.
        </p>
        <p className=" font-inter font-semibold text-sm lg:text-base leading-7 text-neutrals_300">
          . Check-in for this home is between 3:00PM and 9:00PM and checkout is
          at 10:00AM.
        </p>
      </div>
      <div>
        <h3 className=" font-inter font-semibold text-base leading-7 text-neutrals_100">
          House details and rules
        </h3>
        <p className=" font-inter font-semibold text-sm lg:text-base leading-7 text-neutrals_300">
          . No smoking, No parties or events, No pets.
        </p>
      </div>
      <div>
        <h3 className=" font-inter font-semibold text-base leading-7 text-neutrals_100">
          Price and availability
        </h3>
        <p className=" font-inter font-semibold text-sm lg:text-base leading-7 text-neutrals_300">
          . Get a 18% discount on stays longer than a month.
        </p>
        <p className=" font-inter font-semibold text-sm lg:text-base leading-7 text-neutrals_300">
          . Petra’s home is available from Jun 23 - 30. Book soon.
        </p>
        <p className=" font-inter font-semibold text-sm lg:text-base leading-7 text-neutrals_300">
          . Full refund within limited period.
        </p>
      </div>
    </div>
  );
};

export default Policies;
