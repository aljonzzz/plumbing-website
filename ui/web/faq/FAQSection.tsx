import React from "react";
import FAQItem from "./FAQItem";
import { faqData } from "./FAQData";

const FAQSection: React.FC = () => {
  return (
    <section className="bg-base py-16 px-3 md:px-6">
      <div className="section-spacing">
        {/* TITLE */}
        <div className="mb-8">
          <p className="heading-3 text-muted pb-3">Might help you with</p>
          <h2 className="heading-2 text-main text-dark ">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
