import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const CompanyLinks = ({ goToSection }) => {
  const activeGreen = ({ isActive }) =>
    isActive ? "text-[#28C870]" : "text-gray-300";

  return (
    <div className="flex flex-col gap-y-3 text-[15px]">
      <h4 className="text-white text-[18px] font-semibold">Our Company</h4>

      <NavLink to="/" className={activeGreen}>Home</NavLink>
      <NavLink to="/about" className={activeGreen}>About</NavLink>

      <div className='flex flex-col items-start gap-y-3'>

      <button onClick={() => goToSection("services")} className="text-gray-300">
        Our Services
      </button>

      <button onClick={() => goToSection("faq")} className="text-gray-300">
        FAQ
      </button>
      </div>
    </div>
  );
};

export default CompanyLinks;
