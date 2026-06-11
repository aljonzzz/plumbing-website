import Image from "next/image";
import React from "react";

const reasons = [
  {
    title: "Experienced Professionals",
    desc: "Our team is trained, skilled, and experienced in delivering high-quality service every time.",
  },
  {
    title: "Fast & Reliable Service",
    desc: "We value your time. Expect quick response and on-time completion of every job.",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges. You get the best value for your money.",
  },
  {
    title: "Customer Satisfaction",
    desc: "We prioritize your satisfaction and make sure the job is done right the first time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-20 bg-base pt-40 md:pt-25 px-3 md:px-6 ">
      <div className="section-spacing grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <div className="relative w-full h-[420px] md:h-[500px] card overflow-hidden shadow-md">
          <Image
            src="/img/why-choosee-us.jpg"
            alt="Plumbing Service Team"
            fill
            className="object-cover "
            priority
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* TEXT SIDE */}
        <div>
          <h2 className="heading-2 text-dark mb-4">
            Why Choose Us
          </h2>

          <p className="text-muted mb-8">
            We don’t just fix problems — we deliver long-term solutions with quality and care you can trust.
          </p>

          <div className="space-y-5">
            {reasons.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-6 md:h-9 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="heading-4 text-dark">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
