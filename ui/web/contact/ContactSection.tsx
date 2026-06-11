import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection: React.FC = () => {
  return (
    <section className="pt-10 md:pt-15  pb-20  px-3 md:px-6">
      <div className="section-spacing grid md:grid-cols-2 gap-6 items-start">

        {/* LEFT */}
        <ContactInfo />

        {/* RIGHT - WHITE CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">

          <p className="heading-3 text-muted mb-2">
            Reach out on us
          </p>

          <h2 className="heading-2 text-dark mb-6">
            Contacts
          </h2>

          <ContactForm />

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
