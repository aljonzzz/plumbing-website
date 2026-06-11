import React from "react";
import Link from "next/link";

type Props = {
  slug: string;
  children: React.ReactNode;
};

const ServiceLink: React.FC<Props> = ({ slug, children }) => {
  return (
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
      {children}
    </Link>
  );
};

export default ServiceLink;
