import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "hero";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "px-6 py-4 rounded-full font-semibold transition-all duration-200 transform-gpu shadow-md active:scale-95 active:translate-y-1 active:shadow-none md:hover:scale-[1.03]";

  const variants = {
    primary:
      "[background-color:rgb(var(--color-primary))] text-white hover:opacity-90",

secondary:
  "border-2 [border-color:rgb(var(--color-primary))] [color:rgb(var(--color-text))] hover:[background-color:rgb(var(--color-primary))] hover:text-white active:[background-color:rgb(var(--color-primary))] active:text-white",

    white:
      "bg-white text-dark border button-border",

    hero:
      " button-hero border-1",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
