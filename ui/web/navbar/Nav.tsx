"use client";

import Button from "@/ui/components/Button";
import React, { useEffect, useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

type NavProps = {
  onOpenBooking?: () => void;
};

const BREAKPOINT = 900;

const Navbar: React.FC<NavProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= BREAKPOINT) {
        setMenuOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (!menuOpen) return;

      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }

      setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  return (
    <nav className="w-full px-3 md:px-6 py-3 flex items-center justify-between sticky top-0 z-50 text-white bg-base-footer">
      <Logo />

      <div className="hidden min-[900px]:flex">
        <DesktopNav />
      </div>

      <div className="hidden min-[900px]:flex items-center gap-3">
        <a href="tel:+557483483934">
          <Button
            variant="white"
            className="py-3 px-6 flex items-center gap-2"
          >
            <FaPhoneAlt />
            +(557) 483 483 934
          </Button>
        </a>
      </div>


      <div className="min-[900px]:hidden gap-1 flex items-center">
        <a href="tel:+557483483934">
          <button className=" px-4 py-4 rounded-full  transition-all duration-200 transform-gpu shadow-md active:scale-95 active:translate-y-1 active:shadow-none md:hover:scale-[1.03] text-dark button-border border"
          >
            <FaPhoneAlt />
          </button>
        </a>

        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="text-xl py-2 px-3 border button-border rounded-md text-dark transition-transform duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <MobileMenu
        closeMenu={closeMenu}
        isOpen={menuOpen}
        menuRef={menuRef}
      />
    </nav>
  );
};

export default Navbar;
