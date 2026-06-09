import React from "react";

const includedItems = [
  "24/7 emergency plumbing support",
  "Licensed and insured technicians",
  "Advanced diagnostic equipment",
  "Pipe repair and installation",
  "Drain and sewer line services",
  "Transparent pricing with no hidden fees",
];

const ServiceIncluded = () => {
  return (
    <div className="mt-10 bg-card p-6 rounded-xl">
      <h2 className="heading-3 mb-4 text-dark">
        What's Included
      </h2>

      <ul className="space-y-3 text-muted">
        {includedItems.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <span className="text-green-600 font-bold text-lg">
              ✓
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceIncluded;
