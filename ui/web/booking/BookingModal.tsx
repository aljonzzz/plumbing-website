"use client";

import React, { useEffect } from "react";
import BookingModalHeader from "./BookingModalHeader";
import BookingForm from "./BookingForm";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    onClose();

    if (window.history.state?.bookingModal) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    const handlePopState = () => {
      onClose();
    };

    if (isOpen) {
      window.history.pushState(
        { bookingModal: true },
        ""
      );

      document.addEventListener(
        "keydown",
        handleEsc
      );

      window.addEventListener(
        "popstate",
        handlePopState
      );

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleEsc
      );

      window.removeEventListener(
        "popstate",
        handlePopState
      );

      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
      />

      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white card shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <BookingModalHeader
            onClose={handleClose}
          />

          <BookingForm
            onClose={handleClose}
          />
        </div>
      </div>
    </>
  );
};

export default BookingModal;
