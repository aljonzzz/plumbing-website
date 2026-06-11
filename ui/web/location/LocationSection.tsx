import React from "react";
import Button from "@/ui/components/Button";
import { FiCalendar, FiCheck } from "react-icons/fi";

type Props = {
  onOpenBooking: () => void;
};

const LocationSection: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <section className="pt-10 md:pt-15 pb-20 px-3 md:px-6">
      <div className="section-spacing grid md:grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div className="max-w-lg order-2 md:order-1">

          <p className="heading-3 text-muted mb-2">
            Based in Austin, Texas
          </p>

          <h2 className="heading-2 text-dark mb-6 relative inline-block">
            Serving Nearby Communities
            <span className="absolute left-0 -bottom-2 h-[4px] w-20 bg-[rgb(var(--color-primary))]" />
          </h2>

          <p className="text-muted leading-relaxed mb-6">
            PipeWise Plumbing proudly serves Austin and surrounding Central Texas with fast and reliable service.
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-link">Austin (24/7)</span>
            <span className="text-link">Round Rock</span>
            <span className="text-link">Cedar Park</span>
            <span className="text-link">Pflugerville</span>
            <span className="text-link">Georgetown</span>
            <span className="text-link">San Marcos</span>
            <span className="text-link">New Braunfels</span>
            <span className="text-link">Leander</span>
          </div>

<div className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted">

  <div className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    Licensed & Insured
  </div>

  <div className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    Emergency Service
  </div>

  <div className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    Residential & Commercial
  </div>

  <div className="flex items-center gap-2">
    <FiCheck className="text-green-500" />
    Upfront Pricing
  </div>

</div>

<div className="mt-6">
  <Button
    onClick={onOpenBooking}
    variant="primary"
    className="w-full sm:w-auto py-3 px-6 flex items-center justify-center gap-2"
  >
    <FiCalendar />
    Try Our Free Quote
  </Button>
</div>

        </div>

        {/* RIGHT MAP */}
        <div className="order-1 md:order-2">
          <div className="h-[420px] rounded-lg overflow-hidden shadow-md bg-card">
<iframe
  src="https://www.google.com/maps?q=Austin,Texas&output=embed"
  width="100%"
  height="100%"
  loading="lazy"
  className="border-0 w-full h-full"
  referrerPolicy="no-referrer-when-downgrade"
/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;
