import React from "react";
import NavItem from "./NavItem";
import { navItems } from "./navItems";

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex space-x-10">
      {navItems.map((item) => (
        <li key={item.href}>
          <NavItem
            label={item.label}
            href={item.href}
            className="text-link"
          />
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
