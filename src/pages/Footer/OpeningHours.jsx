import React from "react";

const OpeningHours = () => {
  return (
    <div className="flex flex-col gap-y-3 text-[15px]">
      <h4 className="text-white text-[18px] font-semibold">Opening Hours</h4>

      <div className="flex justify-between text-gray-300">
        <p>Monday - Saturday</p>
        <p> - </p>
        <p>8:00am to 22:00pm</p>
      </div>
    </div>
  );
};

export default OpeningHours;
