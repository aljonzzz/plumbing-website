"use client";

import React, { useState } from "react";

import BookingActions from "./BookingActions";

import FullNameField from "./BookingFields/FullNameField";
import EmailField from "./BookingFields/EmailField";
import PhoneField from "./BookingFields/PhoneField";
import AddressField from "./BookingFields/AddressField";
import ServiceField from "./BookingFields/ServiceField";
import DateField from "./BookingFields/DateField";
import TimeField from "./BookingFields/TimeField";
import NotesField from "./BookingFields/NotesField";

import SuccessMessage from "./SuccessMessage";

type Props = {
  onClose: () => void;
};

const BookingForm: React.FC<Props> = ({
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: value,
      };

      if (name === "preferredDate") {
        updated.preferredTime = "";
      }

      return updated;
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/service-booking",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message || "Failed"
        );
      }

      setSuccess(true);

      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          contact: "",
          address: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          notes: "",
        });

        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error(err);
      alert(
        "Failed to submit booking request."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <SuccessMessage
        title="Booking Submitted!"
        description="Your booking request has been received. We'll contact you shortly to confirm your appointment."
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-5"
    >
      <FullNameField
        value={form.name}
        onChange={handleChange}
      />

      <EmailField
        value={form.email}
        onChange={handleChange}
      />

      <PhoneField
        value={form.contact}
        onChange={handleChange}
      />

      <AddressField
        value={form.address}
        onChange={handleChange}
      />

      <ServiceField
        value={form.service}
        onChange={handleChange}
      />

      <DateField
        value={form.preferredDate}
        onChange={handleChange}
      />

      <TimeField
        value={form.preferredTime}
        onChange={handleChange}
        selectedDate={form.preferredDate}
      />

      <NotesField
        value={form.notes}
        onChange={handleChange}
      />

      <BookingActions
        loading={loading}
        onClose={onClose}
      />
    </form>
  );
};

export default BookingForm;
