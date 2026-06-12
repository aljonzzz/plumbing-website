import React from "react";

interface Props {
  service: {
    description: string;
    fullDescription?: string;
  };
}

const ServiceContent = ({ service }: Props) => {
  return (
    <div className="mt-6 space-y-6 ">
      <p className="text-muted body">
        {service.description}
      </p>

      {service.fullDescription && (
        <p className="body text-muted">
          {service.fullDescription}
        </p>
      )}
    </div>
  );
};

export default ServiceContent;
