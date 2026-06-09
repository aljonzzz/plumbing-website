import React from "react";

const FooterBrand: React.FC = () => {
  return (
    <div>
      {/* TEXT LOGO */}
      <h2 className="title-brand text-main mb-4 tracking-wide text-white">
        PipeWise Plumbing
      </h2>

      {/* DESCRIPTION */}
<p className="text-gray-300 text-sm leading-relaxed">
        Fast, reliable plumbing and heating services available 24/7. Expert solutions for repairs, installations, drain cleaning, and emergencies.

      </p>
    </div>
  );
};

export default FooterBrand;
