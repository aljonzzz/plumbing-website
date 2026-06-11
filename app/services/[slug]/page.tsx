import { notFound } from "next/navigation";

import Footer from "@/ui/web/footer/Footer";
import Nav from "@/ui/web/navbar/Nav";

import { servicesData } from "@/ui/components/servicesData";

import OtherServices from "./OtherServices";
import ServiceContent from "./ServiceContent";
import ServiceHero from "./ServiceHero";
import ServiceIncluded from "./ServiceIncluded";
import ServiceWhyChoose from "./ServiceWhyChoose";

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

      <main className="pt-10 md:pt-15  pb-20  px-3 md:px-6">
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
