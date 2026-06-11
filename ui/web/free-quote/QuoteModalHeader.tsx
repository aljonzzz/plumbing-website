import React from "react";

type Props = {
  onClose: () => void;
};

const BookingModalHeader: React.FC<Props> = ({
  onClose,
}) => {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 bg-white">
      <div>
        <h2 className="text-2xl font-bold text-dark">
          Request Quote Plumbing Service
        </h2>

        <p className="text-muted mt-1">
          Fill out the form and we'll contact you shortly.
        </p>
      </div>

      <button
        onClick={onClose}
        className="text-3xl leading-none text-gray-500 hover:text-black"
      >
        ×
      </button>
    </div>
  );
};

export default BookingModalHeader;
