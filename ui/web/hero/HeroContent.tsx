import React from "react";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import Button from "@/ui/components/Button";
import FeatureCard from "./FeatureCard";

type HeroContentProps = {
  onOpenBooking: () => void;
};

const HeroContent: React.FC<HeroContentProps> = ({ onOpenBooking }) => {
  return (
    <div className="flex flex-col gap-6 max-w-xl">
      {/* Heading */}
      <h1 className="heading-1 text-main text-white">
        Texas Trusted
        <br />
        Plumbing & Heating
        <br />
        Experts
      </h1>

      {/* Description */}
      <p className="text-white body">
        Fast and reliable plumbing, drain cleaning, heating
        & cooling services available 24/7.
      </p>

      {/* Feature Card */}
      <FeatureCard />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Button
          onClick={onOpenBooking}
          variant="primary"
          className="w-full sm:w-auto py-3 px-6 flex items-center justify-center gap-2"
        >
          <FiCalendar className="shrink-0 text-lg" />
          Request a Free Quote
        </Button>

        <a href="tel:+557483483934">
          <Button
            variant="hero"
            className="w-full sm:w-auto py-3 px-6 flex items-center justify-center gap-2 text-white"
          >
            Have an Emergency?
            <FiArrowRight className="shrink-0 text-lg text-[rgb(var(--color-primary))]" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
