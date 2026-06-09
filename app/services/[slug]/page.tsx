import { notFound } from "next/navigation";

import Nav from "@/ui/web/navbar/Nav";
import Footer from "@/ui/web/footer/Footer";

import { servicesData } from "@/ui/web/services/servicesData";

import ServiceHero from "./ServiceHero";
import ServiceContent from "./ServiceContent";
import ServiceIncluded from "./ServiceIncluded";
import ServiceWhyChoose from "./ServiceWhyChoose";
import OtherServices from "./OtherServices";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({
  params,
}: Props) {
  const { slug } = await params;

  const service = servicesData.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter(
    (item) => item.slug !== slug
  );

  return (
    <>
      <Nav />

      <main className="py-4 md:py-8 px-3 md:px-6">
        <div className="section-spacing">
          <ServiceHero service={service} />

          <ServiceContent service={service} />

          <ServiceIncluded />

          <ServiceWhyChoose />

          <OtherServices services={otherServices} />
        </div>
      </main>

      <Footer />
    </>
  );
}
