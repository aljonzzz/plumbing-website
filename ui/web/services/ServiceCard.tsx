import React from "react";
import Link from "next/link";

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
    <div
      className="
        bg-white
        card
        overflow-hidden
        shadow-sm
        border
        border-gray-200
        flex
        flex-col
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Image */}
      <Link href={`/services/${slug}`}>
        <div className="relative h-64 overflow-hidden cursor-pointer">
          <img
            src={images[0]}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
            draggable={false}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>

        <p className="text-muted leading-relaxed flex-1">
          {description}
        </p>

        <Link
          href={`/services/${slug}`}
          className="
            mt-6
            mx-auto
            inline-flex
            items-center
            justify-center
            px-6
            py-2
            text-sm
            rounded-full
            border
            border-[rgb(var(--color-primary))]
            text-[rgb(var(--color-primary))]
            transition-all
            duration-200
            shadow-sm

            hover:bg-[rgb(var(--color-primary))]
            hover:text-white
            hover:scale-[1.03]

            active:bg-[rgb(var(--color-primary))]
            active:text-white
            active:scale-95
            active:translate-y-1
            active:shadow-none
          "
        >
          Request Service
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
