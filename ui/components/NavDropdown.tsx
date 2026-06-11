"use client";

import React, { useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useRouter, usePathname } from "next/navigation";

type Item = {
  label: string;
  href: string;
};

type Option = {
  label: string;
  href: string;
};

type Props = {
  item: Item;
  options: Option[];
  viewAllLabel?: string;
  viewAllHref?: string;
  activeMatch?: string[];
};

const NavDropdown: React.FC<Props> = ({
  item,
  options,
  viewAllLabel = "View All",
  viewAllHref,
  activeMatch,
}) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  const isActive = activeMatch
    ? activeMatch.some((path) => pathname.startsWith(path))
    : pathname === item.href ||
      pathname.startsWith(item.href + "/");

  return (
    <li
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`relative flex items-center gap-1 font-semibold group transition-colors ${
          isActive
            ? "text-[rgb(var(--color-primary))]"
            : "text-link"
        }`}
      >
        {item.label}

        <FiChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />

<span
  className={`absolute left-0 -bottom-1 h-[2px] bg-[rgb(var(--color-primary))] transition-all duration-300 ${
    open
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
/>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-3 w-64 bg-white text-black shadow-lg card overflow-hidden z-50"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {options.map((opt) => (
            <button
              key={opt.href}
              onClick={() => router.push(opt.href)}
              className="w-full text-left px-4 py-3 text-link transition"
            >
              {opt.label}
            </button>
          ))}

          {viewAllHref && (
            <>
              <div className="border-t" />

              <button
                onClick={() => router.push(viewAllHref)}
                className="w-full text-left px-4 py-3 font-semibold text-link hover:bg-gray-100 transition"
              >
                {viewAllLabel}
              </button>
            </>
          )}
        </div>
      )}
    </li>
  );
};

export default NavDropdown;
