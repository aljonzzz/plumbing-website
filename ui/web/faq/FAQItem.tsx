"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full
        bg-card
        border border-[rgb(var(--color-border-faq))]
        transition-all
      "
    >
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          px-5
          py-4
          text-left
          text-main
          font-medium
          text-dark
        "
      >
        {question}

        <ChevronDown
          className={`
            transition-transform duration-300
            ${open ? "rotate-180" : ""}
          `}
          size={18}
        />
      </button>

      {/* CONTENT */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300
          ${open ? "max-h-40 px-5 pb-4" : "max-h-0"}
        `}
      >
        <p className="text-muted ">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
