import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import NavLinks from "./NavLinks";
import BookingButton from "./BookingButton";
import Logo from "./Logo";

const MobileMenu = ({ open, setOpen, goToSection, activeGreen }) => {
  return (
    <div className="lg:hidden backdrop-blur-lg bg-black/5 px-4 md:px-6">
      
      <div className="flex justify-between items-center">
        <Logo />

        <div
          className="md:text-[35px] text-[25px] text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoCloseOutline /> : <RxHamburgerMenu />}
        </div>
      </div>

      <div className={`${open ? "block" : "hidden"} border-t mobile-nav`}>
        <div className="flex flex-col items-center gap-5 py-5 md:text-[30px] text-[20px] text-white">

          <NavLinks 
            goToSection={goToSection}
            closeMenu={() => setOpen(false)}
            activeGreen={activeGreen}
          />

          <BookingButton onClick={() => setOpen(false)} className="mobile-link mt-2" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
