"use client";

import React from "react";

type Props = {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
};

const TextareaField: React.FC<Props> = ({
  name,
  value,
  placeholder,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-1">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full p-3 border bg-transparent text-main min-h-[120px]
          border-[rgb(var(--color-primary))]
          focus:outline-none  focus:border-[rgb(var(--color-primary))] form-field
        "
      />

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default TextareaField;
