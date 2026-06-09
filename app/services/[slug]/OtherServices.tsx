import React from "react";
import Link from "next/link";

interface Service {
  slug: string;
  title: string;
  description: string;
  images: string[]; // ✅ FIXED
}

interface Props {
  services: Service[];
}

const OtherServices = ({ services }: Props) => {
  return (
    <div className="mt-16">
      <h2 className="heading-2 mb-6 text-dark">
        Other Services
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="
              bg-card
              rounded-xl
              overflow-hidden
              group
              hover:shadow-md
              transition
            "
          >
            <div className="h-60 overflow-hidden">
              <img
                src={item.images[0]} // ✅ FIXED
                alt={item.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-300
                  md:group-hover:scale-105
                "
              />
            </div>

            <div className="p-4">
              <h3 className="heading-3 font-semibold text-dark">
                {item.title}
              </h3>

              <p className="text-muted  mt-2">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;
