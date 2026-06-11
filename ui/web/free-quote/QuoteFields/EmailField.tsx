type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function EmailField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Email Address *</label>
      <input
        name="email"
        value={value}
        onChange={onChange}
        type="email"
        required
        placeholder="juan@email.com"
        className="w-full p-3 form-field"
      />
    </div>
  );
}
