import React from "react";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const AboutSection: React.FC = () => {
  return (
    <section className="pt-10 md:pt-15  pb-20  px-3 md:px-6">
      <div className="section-spacing grid md:grid-cols-2 items-center gap-10">

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <AboutImage />
        </div>

        {/* Content */}
        <div className="flex justify-center md:justify-start">
          <AboutContent />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
