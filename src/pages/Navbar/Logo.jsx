import React from "react";
import mylogo_green from "../../images/dentist_otaru_logo_white.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img 
      src={mylogo_green} 
      alt="logo"
      className="cursor-pointer w-[130px]"
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
