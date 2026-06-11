"use client";

import React, { useEffect, useState } from "react";

type Props = {
  value: File | null;
  onChange: (file: File | null) => void;
};

export default function ImageField({ value, onChange }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  const removeImage = () => {
    onChange(null);
  };

  // ✅ SAFE preview handling
  useEffect(() => {
    if (!value) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(value);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [value]);

  return (
    <div>
      <label className="block text-m font-medium mb-2">
        Upload Photo (Optional)
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-3 form-field"
      />

      {preview && (
        <div className="mt-3 relative inline-block">
          <img
            src={preview}
            alt="preview"
            className="w-40 h-40 object-cover card border"
          />

          <button
            type="button"
            onClick={removeImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full flex items-center justify-center shadow"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
