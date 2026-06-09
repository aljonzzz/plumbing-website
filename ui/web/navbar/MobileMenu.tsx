import React from "react";
import NavItem from "./NavItem";
import Button from "@/ui/components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { FiHome, FiTool, FiInfo, FiMail } from "react-icons/fi";
import { navItems } from "./navItems";

type Props = {
  closeMenu: () => void;
  isOpen: boolean;
  menuRef?: React.RefObject<HTMLDivElement | null>;
};

const iconMap = {
  home: FiHome,
  tool: FiTool,
  info: FiInfo,
  mail: FiMail,
};

const MobileMenu: React.FC<Props> = ({
  closeMenu,
  isOpen,
  menuRef,
}) => {
  return (
    <div
      ref={menuRef}
      className={`
        fixed top-[72px] left-0 w-full bg-base-footer z-[9999]
        flex flex-col gap-5 px-3 md:px-6 py-5 shadow-lg min-[900px]:hidden

        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }
      `}
    >
      <ul className="flex flex-col gap-5 list-none">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <li key={item.href} className="flex items-center gap-3">
              <Icon className="text-link" />

              <NavItem
                label={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-link"
              />
            </li>
          );
        })}
      </ul>

      <a href="tel:+557483483934" className="block w-full">
        <Button
          variant="white"
          className="flex items-center justify-center w-full gap-2 px-6 py-3"
        >
          <FaPhoneAlt />
          +(557) 483 483 934
        </Button>
      </a>
    </div>
  );
};

export default MobileMenu;
