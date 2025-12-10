import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ goToSection, closeMenu, activeGreen }) => {
  return (
    <>
      <NavLink 
        to="/" 
        className={activeGreen}
        onClick={closeMenu}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={activeGreen}
        onClick={closeMenu}
      >
        About
      </NavLink>

      <button 
        onClick={() => { goToSection("services"); closeMenu(); }}
        className="text-white"
      >
        Our Services
      </button>

      <button 
        onClick={() => { goToSection("faq"); closeMenu(); }}
        className="text-white"
      >
        FAQ
      </button>
    </>
  );
};

export default NavLinks;
