"use client";

import React from "react";
import NavItemRenderer from "./NavItemRenderer";
import { iconMap } from "./iconMap";

type Props = {
  navItems: any[];
  open: any;
  toggle: any;
  closeMenu: () => void;
  servicesData: any[];
  blogs: any[];
};

const NavList: React.FC<Props> = ({
  navItems,
  open,
  toggle,
  closeMenu,
  servicesData,
  blogs,
}) => {
  return (
    <ul className="flex flex-col gap-5 list-none">
      {navItems.map((item) => (
        <NavItemRenderer
          key={item.label}
          item={item}
          iconMap={iconMap}
          open={open}
          toggle={toggle}
          closeMenu={closeMenu}
          servicesData={servicesData}
          blogs={blogs}
        />
      ))}
    </ul>
  );
};

export default NavList;
