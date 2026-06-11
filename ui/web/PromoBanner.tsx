import Button from "@/ui/components/Button";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

type PromoBannerProps = {
  onOpenBooking: () => void;
};

const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="relative min-h-[260px] md:min-h-[340px] bg-cover bg-[position:65%_center] md:bg-center px-3 md:px-6"
        style={{
          backgroundImage: "url('/img/banner-cleaner.jpg')",
        }}
      >
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d538dff]/100 via-[#1d538dff]/80 to-transparent" />

        {/* Dark Layer */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 section-spacing mx-auto py-10 md:py-14 flex items-center">
          <div className="max-w-xl">
            <p className="text-white/80 heading-3 mb-1">
              Professional Plumbing Service
            </p>

            <h2 className="text-white font-bold heading-2 leading-tight">
              Need Immediate
              <br />
              Plumbing Help?
            </h2>

            <p className="mt-5 text-white/90 text-sm md:text-base">
              Fast response. Experienced professionals. No hidden surprises.
            </p>

            <div className="mt-8">
              <a href="tel:+557483483934">
                <Button
                  variant="primary"
                  className="py-3 px-6 flex items-center gap-2 text-white"
                >
                  Call Now
                  <FaPhoneAlt className="text-white" />
                  +(557) 483 483 934
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
