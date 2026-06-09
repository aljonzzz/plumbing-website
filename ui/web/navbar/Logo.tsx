import React from "react";
import Image from "next/image";

const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2"
    >
<div className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden">
  <Image
    src="/img/logooo.png"
    alt="Super Clean Logo"
    fill
    className="object-cover"
    priority
  />
</div>

      <span className="text-m md:text-xl font-bold text-dark">
        PipeWise Plumbing
      </span>
    </button>
  );
};

export default Logo;
