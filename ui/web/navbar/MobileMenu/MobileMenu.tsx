"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "@/ui/components/Button";
import { FaPhoneAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { navItems } from "../../../components/LinksItem";
import { servicesData } from "../../../components/servicesData";
import { blogs } from "@/ui/web/blogs/blogsData";

import NavList from "./NavList";
import { useMobileMenuState } from "./useMobileMenuState";

type Props = {
  closeMenu: () => void;
  isOpen: boolean;
  menuRef?: React.RefObject<HTMLDivElement | null>;
};

const WIDTH = 320;

const MobileMenu: React.FC<Props> = ({
  closeMenu,
  isOpen,
  menuRef,
}) => {
  const { open, toggle } = useMobileMenuState();

  const [position, setPosition] = useState(WIDTH);

  const startX = useRef(0);
  const startPos = useRef(WIDTH);
  const dragging = useRef(false);

  // 🔥 LOCK BODY SCROLL (THIS IS THE FIX)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // sync open state
  useEffect(() => {
    setPosition(isOpen ? 0 : WIDTH);
  }, [isOpen]);

const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
  // ❌ ignore clicks on buttons / links
  const target = e.target as HTMLElement;

  if (
    target.tagName === "BUTTON" ||
    target.closest("button") ||
    target.closest("a")
  ) {
    return;
  }

  dragging.current = true;
  startX.current = e.clientX;
  startPos.current = position;

  (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
};

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;

    const diff = e.clientX - startX.current;

    let next = startPos.current + diff;

    next = Math.max(0, Math.min(WIDTH, next));

    setPosition(next);
  };

const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
  dragging.current = false;

  try {
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  } catch {}

  const shouldClose = position > WIDTH * 0.5;

  if (shouldClose) {
    setPosition(WIDTH);
    closeMenu();
  } else {
    setPosition(0);
  }
};

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/40 z-[9998]"
        />
      )}

      {/* DRAWER */}
      <div
        ref={menuRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="
          fixed top-0 right-0 h-full w-[320px] bg-base-footer
          z-[9999]
          flex flex-col gap-5 px-4 md:px-6 py-5 shadow-2xl
          min-[900px]:hidden
        "
        style={{
          transform: `translateX(${position}px)`,
          transition: dragging.current
            ? "none"
            : "transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          touchAction: "none",
        }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-link">
              Menu
            </span>
            <span className="text-xs text-gray-400">
              PipeWise Plumbing
            </span>
          </div>

          <button
            onClick={closeMenu}
            className="text-2xl text-link hover:scale-110 transition"
          >
            <FiX />
          </button>
        </div>

        {/* NAV */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ touchAction: "pan-y" }}
        >
          <NavList
            navItems={navItems}
            open={open}
            toggle={toggle}
            closeMenu={closeMenu}
            servicesData={servicesData}
            blogs={blogs}
          />
        </div>

        {/* CALL BUTTON */}
        <a href="tel:+557483483934" className="block w-full mt-auto">
          <Button
            variant="primary"
            className="flex items-center justify-center w-full gap-2 px-6 py-3"
          >
            <FaPhoneAlt />
            +(557) 483 483 934
          </Button>
        </a>
      </div>
    </>
  );
};

export default MobileMenu;
