"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SuccessMessage from "../booking/SuccessMessage";

type FormData = {
  name: string;
  email: string;
  contact: string;
  message: string;
};

type Errors = Partial<FormData>;

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.contact.trim()) {
      newErrors.contact = "Contact is required";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(form.contact)) {
      newErrors.contact = "Invalid contact number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        contact: "",
        message: "",
      });

      setErrors({});

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <SuccessMessage
        title="Message Sent!"
        description="Thank you for contacting us. We'll get back to you shortly."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        error={errors.name}
      />

      <InputField
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        error={errors.email}
      />

      <InputField
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact No."
        error={errors.contact}
      />

      <TextareaField
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        error={errors.message}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl font-semibold bg-[rgb(var(--color-primary))] text-white hover:opacity-90 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
