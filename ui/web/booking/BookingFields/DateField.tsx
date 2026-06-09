type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function DateField({ value, onChange }: Props) {
  // get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <label className="block mb-2 font-medium">
        Preferred Date *
      </label>

      <input
        name="preferredDate"
        value={value}
        onChange={onChange}
        type="date"
        min={today}
        required
        className="w-full p-3 form-field"
      />
    </div>
  );
}
