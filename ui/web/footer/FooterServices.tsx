import Link from "next/link";
import React from "react";
import { servicesData } from "@/ui/web/services/servicesData";

const FooterServices: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-main text-white">
        Services
      </h3>

      <ul className="space-y-2 text-sm">
        {servicesData.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="text-footer-link transition hover:text-white"
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterServices;
