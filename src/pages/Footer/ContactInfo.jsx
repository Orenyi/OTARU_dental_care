import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-y-3 text-[15px]">
      <h4 className="text-white text-[18px] font-semibold">Reach Out</h4>

      <a href="tel:08167527125" className="flex items-center gap-3 text-gray-300">
        <LuPhoneCall className="text-[18px]" /> +2348167527125
      </a>

      <a href="mailto:simonotaru14@gmail.com" className="flex items-center gap-3 text-gray-300">
        <CiMail className="text-[18px]" /> simonotaru14@gmail.com
      </a>

      <a href="https://maps.google.com" target="_blank" className="flex items-center gap-3 text-gray-300">
        <IoLocationOutline className="text-[22px]" />  
        No.8 Otaru dental clinic opp. Arena Lubge, Abuja.
      </a>
    </div>
  );
};

export default ContactInfo;
