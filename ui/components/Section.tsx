import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Section = ({ children, className = "", noPadding }: SectionProps) => {
  return (
    <section className={`${!noPadding ? "section" : ""} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
