import React from "react";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "James Wilson",
    location: "Austin, Texas",
    feedback:
      "PipeWise exceeded our expectations. Their plumber diagnosed the issue within minutes and completed the repair the same day. Fantastic customer service.",
  },
  {
    name: "Emily Carter",
    location: "Charlotte, North Carolina",
    feedback:
      "I've used several plumbing companies before, but none were as responsive and professional as this team. Fair pricing and quality workmanship.",
  },
  {
    name: "Robert Martinez",
    location: "Tampa, Florida",
    feedback:
      "Our water heater failed unexpectedly, and they had a technician at our home within hours. The installation was flawless. Five stars all the way.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className=" bg-[#eef1f5] px-3 md:px-6 " >
      <div className="container mx-auto section-spacing">
        <div className="max-w-2xl mb-8 text-left">
          <p className="text-muted heading-3  tracking-wider">
            Testimonials
          </p>

          <h2 className="heading-2 mt-3 text-dark">
            What Our Customers Say
          </h2>


        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white card p-6 shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FiStar
                    key={index}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-muted mb-6">
                "{item.feedback}"
              </p>

              <div>
                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
