"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

type Props = {
  title: string;
  description: string;
};

const SuccessMessage: React.FC<Props> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 animate-fade-in">
      <div className="animate-bounce">
        <FiCheckCircle className="text-green-500 text-7xl" />
      </div>

      <h2 className="mt-5 text-2xl font-bold text-center">
        {title}
      </h2>

      <p className="mt-2 text-center text-gray-600 max-w-sm">
        {description}
      </p>
    </div>
  );
};

export default SuccessMessage;
