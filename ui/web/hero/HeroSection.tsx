import Image from "next/image";
import React from "react";
import HeroContent from "./HeroContent";
import StatsBar from "./StatsBar";

type HeroProps = {
  onOpenBooking: () => void;
};

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center px-3 md:px-6 overflow-visible">

      {/* Background Image */}
      <Image
        src="/img/hero-bgg.jpg"
        alt="Cleaning Service Background"
        fill
        priority
        quality={100}
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />

{/* Overlays */}
<div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0d3a69]/80 via-[#0d3a69]/60 to-transparent" />
<div className="absolute inset-0 z-[2] bg-[#0d3a69]/50" />

      {/* Content */}
      <div className="relative z-10 w-full section-spacing mx-auto py-12 grid md:grid-cols-2 gap-12 items-center">
        <HeroContent onOpenBooking={onOpenBooking} />
      </div>

      {/* Stats Component */}
      <StatsBar />

    </section>
  );
};

export default Hero;
