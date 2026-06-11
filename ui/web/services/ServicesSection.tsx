import { servicesData } from "../../components/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="pt-10 md:pt-15  pb-20 bg-base px-3 md:px-6">
      <div className="max-w-6xl mx-auto ">

        <div className="mb-8 text-center">
          <p className="text-gray-500 heading-3 mb-2">
            Services
          </p>

          <h2 className="heading-2  text-dark">
            Our Cleaning Services
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              images={service.images}
              slug={service.slug}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
