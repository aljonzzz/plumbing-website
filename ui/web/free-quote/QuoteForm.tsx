"use client";

import React, { useState } from "react";

import BookingActions from "./QuoteActions";
import EmailField from "./QuoteFields/EmailField";
import FullNameField from "./QuoteFields/FullNameField";
import PhoneField from "./QuoteFields/PhoneField";
import ServiceField from "./QuoteFields/ServiceField";
import NotesField from "./QuoteFields/NotesField";
import ImageField from "./QuoteFields/ImageField";
import SuccessMessage from "../../components/SuccessMessage";

type Props = {
  onClose: () => void;
};

const QuoteForm: React.FC<Props> = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    service: [] as string[],
    notes: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServicesChange = (services: string[]) => {
    setForm((prev) => ({
      ...prev,
      service: services,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("contact", form.contact);
      formData.append("notes", form.notes);

      // services as multiple values (BEST PRACTICE)
      form.service.forEach((item) => {
        formData.append("service", item);
      });

      if (form.image) {
        formData.append("image", form.image);
      }

      const res = await fetch("/api/free-quote", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Server did not return JSON");
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed");
      }

      setSuccess(true);

      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          contact: "",
          service: [],
          notes: "",
          image: null,
        });

        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error(err);
      alert("Failed to submit quote request.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <SuccessMessage
        title="Quote Request Sent!"
        description="We received your request. We'll contact you soon."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-5">
      <FullNameField value={form.name} onChange={handleChange} />
      <EmailField value={form.email} onChange={handleChange} />
      <PhoneField value={form.contact} onChange={handleChange} />

      <ServiceField value={form.service} onChange={handleServicesChange} />

<ImageField
  value={form.image}
  onChange={(file) =>
    setForm((prev) => ({
      ...prev,
      image: file,
    }))
  }
/>

      <NotesField value={form.notes} onChange={handleChange} />

      <BookingActions loading={loading} onClose={onClose} />
    </form>
  );
};

export default QuoteForm;
