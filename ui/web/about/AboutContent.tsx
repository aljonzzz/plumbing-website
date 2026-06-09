import React from "react";

const AboutContent: React.FC = () => {
  return (
    <div className="max-w-lg">
      <p className="heading-3 text-muted mb-2">Trusted Plumbing Experts</p>

<h2 className="relative inline-block heading-2 text-main  text-dark mb-8">
  About Us
  <span className="absolute left-0 -bottom-2 h-[4px] w-20 bg-[rgb(var(--color-primary))]"></span>
</h2>

<p className="text-muted mb-4 leading-relaxed">
  PipeWise Plumbing is committed to delivering professional plumbing and
  heating solutions for residential and commercial properties. Our licensed
  technicians handle everything from routine maintenance to complex repairs,
  ensuring every job is completed safely and efficiently.
</p>

<p className="text-muted leading-relaxed">
  With a reputation built on reliability, quality workmanship, and exceptional
  customer care, we take pride in helping our clients maintain dependable
  plumbing systems. No matter the size of the project, we're dedicated to
  providing service you can count on.
</p>
    </div>
  );
};

export default AboutContent;
