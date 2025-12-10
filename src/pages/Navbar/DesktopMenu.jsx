import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import BookingButton from "./BookingButton";

const DesktopMenu = ({ goToSection, activeGreen }) => {
  return (
    <div className="hidden lg:flex items-center justify-between rounded-full outline outline-1 outline-green-400 px-5 text-[18px] backdrop-blur-lg bg-black/5">
      
      <Logo />

      <div className="flex items-center gap-5">
        <NavLinks 
          goToSection={goToSection}
          closeMenu={() => {}} 
          activeGreen={activeGreen}
        />
      </div>

      <BookingButton />
    </div>
  );
};

export default DesktopMenu;
