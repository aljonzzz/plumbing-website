"use client";

import React from "react";
import { FiChevronDown } from "react-icons/fi";

type Props = {
  label: string;
  Icon: any;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

const MobileDropdown: React.FC<Props> = ({
  label,
  Icon,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <li className="flex flex-col gap-3">
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-link" />

          <div className="flex items-center gap-1 text-link font-semibold">
            <span>{label}</span>

            <FiChevronDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </button>

      {/* CONTENT */}
      {isOpen && (
        <div className="pl-8 flex flex-col gap-3">
          {children}
        </div>
      )}
    </li>
  );
};

export default MobileDropdown;
