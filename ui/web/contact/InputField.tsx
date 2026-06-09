"use client";

import React from "react";

type Props = {
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const InputField: React.FC<Props> = ({
  name,
  value,
  placeholder,
  type = "text",
  onChange,
  error,
}) => {
  return (
    <div className="space-y-1">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
className="
  w-full p-3 border bg-transparent
  border-[rgb(var(--color-border))]
  focus:outline-none
  focus:border-[rgb(var(--color-primary))]
  transition-all
  form-field
"
      />

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default InputField;
