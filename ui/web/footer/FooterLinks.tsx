import React from "react";
import NavItem from "../navbar/NavItem";

const FooterLinks: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-main text-white">Quick Links</h3>

<ul className="space-y-2 text-sm">
  <li>
    <NavItem
      label="Home"
      href="/#home"
      className="text-footer-link"
      weight="font-normal"
      underline={false}
    />
  </li>

  <li>
    <NavItem
      label="Services"
      href="/#services"
      className="text-footer-link"
      weight="font-normal"
      underline={false}
    />
  </li>

  <li>
    <NavItem
      label="About"
      href="/#about"
      className="text-footer-link"
      weight="font-normal"
      underline={false}
    />
  </li>

  <li>
    <NavItem
      label="Contact"
      href="/#contact"
      className="text-footer-link"
      weight="font-normal"
      underline={false}
    />
  </li>
</ul>
    </div>
  );
};

export default FooterLinks;
