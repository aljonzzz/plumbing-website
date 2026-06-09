"use client";

import React from "react";

interface Props {
  label: string;
  href: string;
  onClick?: () => void;
  className?: string;
  underline?: boolean;
  weight?: string;
}

const NavItem: React.FC<Props> = ({
  label,
  href,
  onClick,
  className = "",
  underline = true,
  weight = "font-semibold",
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative inline-block group
        transition-colors duration-200
        ${weight}
        ${className}
      `}
    >
      {label}

      {underline && (
        <span
          className="
            absolute left-0 -bottom-1 h-[2px]
            w-0 bg-[rgb(var(--color-primary))]
            transition-all duration-300
            group-hover:w-full
          "
        />
      )}
    </a>
  );
};

export default NavItem;
