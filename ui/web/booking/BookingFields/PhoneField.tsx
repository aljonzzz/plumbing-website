type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function PhoneField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Phone Number *</label>
      <input
        name="contact"
        value={value}
        onChange={onChange}
        type="tel"
        required
        placeholder="+63 912 345 6789"
        className="w-full p-3 form-field"
      />
    </div>
  );
}
