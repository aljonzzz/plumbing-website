import React from "react";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  selectedDate?: string;
};

const timeSlots = [
  "6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM",
  "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
  "3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM",
  "6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM",
];

function convertToMinutes(time: string) {
  const [t, mod] = time.split(" ");
  let [h, m] = t.split(":").map(Number);

  if (mod === "PM" && h !== 12) h += 12;
  if (mod === "AM" && h === 12) h = 0;

  return h * 60 + m;
}

function getLocalDateString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export default function TimeField({
  value,
  onChange,
  selectedDate,
}: Props) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const isToday = selectedDate === getLocalDateString();

  const availableSlots = timeSlots.filter((t) => {
    if (!isToday) return true;
    return convertToMinutes(t) > currentMinutes;
  });

  return (
    <div>
      <label className="block mb-2 font-medium">Preferred Time *</label>

      <select
        name="preferredTime"
        value={value}
        onChange={onChange}
        required
        className="w-full p-3 form-field"
      >
        <option value="">Select a time</option>

        {availableSlots.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
}
