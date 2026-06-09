type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function FullNameField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Full Name *</label>
      <input
        name="name"
        value={value}
        onChange={onChange}
        type="text"
        required
        placeholder="Juan Dela Cruz"
        className="w-full p-3 form-field"
      />
    </div>
  );
}
