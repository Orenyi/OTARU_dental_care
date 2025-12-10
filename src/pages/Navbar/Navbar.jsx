import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeGreen = ({ isActive }) =>
    isActive ? "text-[#28C870]" : "text-white";

  return (
    <nav className="absolute lg:top-2 left-0 w-full z-50 lg:px-6 xl:px-36">
      <DesktopMenu 
        goToSection={goToSection}
        activeGreen={activeGreen}
      />

      <MobileMenu 
        open={open}
        setOpen={setOpen}
        goToSection={goToSection}
        activeGreen={activeGreen}
      />
    </nav>
  );
};

export default Navbar;
