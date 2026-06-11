"use client";

import { useState } from "react";

export const useMobileMenuState = () => {
  const [open, setOpen] = useState({
    services: false,
    blogs: false,
  });

  const toggle = (key: keyof typeof open) => {
    setOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { open, toggle };
};
