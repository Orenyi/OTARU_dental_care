import React from "react";
import mylogo_green from "../../images/dentist_otaru_logo_white.png";
import { RiTwitterXLine, RiFacebookLine } from "react-icons/ri";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const LogoSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-3">
      <img
        src={mylogo_green}
        alt="Otaru Logo"
        className="cursor-pointer w-[150px] lg:-mt-5"
        onClick={() => navigate("/")}
      />

      <p className="text-gray-300 text-[15px] lg:w-56 lg:-mt-4">
        Providing quality-driven dental treatments backed by expertise,
        innovation, and a genuine commitment to patient well-being.
      </p>

      <div className="flex text-gray-200 text-[25px] gap-x-2">
        <a href="https://twitter.com" target="_blank"><RiTwitterXLine /></a>
        <a href="https://facebook.com" target="_blank"><RiFacebookLine /></a>
        <a href="https://instagram.com" target="_blank"><CiInstagram /></a>
        <a href="https://linkedin.com" target="_blank"><CiLinkedin /></a>
      </div>
    </div>
  );
};

export default LogoSection;
