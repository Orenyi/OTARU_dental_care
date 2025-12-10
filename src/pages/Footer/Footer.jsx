import React from "react";
import LogoSection from "./LogoSection";
import CompanyLinks from "./CompanyLinks";
import ContactInfo from "./ContactInfo";
import OpeningHours from "./OpeningHours";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
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

  return (
    <section className="bg-green-900">
      <div className="px-4 md:px-6 lg:px-6 xl:px-10 max-w-7xl mx-auto py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <LogoSection />
          <CompanyLinks goToSection={goToSection} />
          <ContactInfo />
          <OpeningHours />
        </div>

        <div className="border-t border-green-700 mt-10" />

        <div className="text-center text-gray-300 text-[13px] lg:text-[15px] mt-5 -mb-10">
          © {new Date().getFullYear()} All Rights Reserved — OTARU Dental Care.
          Developed By <span className="text-white font-semibold">OTARU</span>
        </div>

      </div>
    </section>
  );
};

export default Footer;
