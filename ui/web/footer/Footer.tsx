import React from "react";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterContact from "./FooterContact";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1d538dff] text-main pt-16 px-3 md:px-6 ">
      <div className="section-spacing grid gap-10 md:grid-cols-4">
        <FooterBrand />
        <FooterLinks />
        <FooterServices />
        <FooterContact />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
