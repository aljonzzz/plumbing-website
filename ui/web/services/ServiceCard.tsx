import React from "react";
import Link from "next/link";
import ServiceLink from "./ServiceLink";

type Props = {
  title: string;
  description: string;
  images: string[];
  slug: string;
};

const ServiceCard: React.FC<Props> = ({
  title,
  description,
  images,
  slug,
}) => {
  return (
    <div className="
      bg-white card overflow-hidden shadow-sm border border-gray-200
      flex flex-col transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg
    ">

      {/* Image */}
      <Link href={`/services/${slug}`}>
        <div className="relative h-64 overflow-hidden cursor-pointer">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            draggable={false}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="heading-3 font-semibold text-dark mb-3">
          {title}
        </h3>

        <p className="text-muted leading-relaxed flex-1">
          {description}
        </p>

        <ServiceLink slug={slug}>
          View Service
        </ServiceLink>
      </div>
    </div>
  );
};

export default ServiceCard;
