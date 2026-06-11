type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function AddressField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Property Address *</label>
      <textarea
        name="address"
        value={value}
        onChange={onChange}
        required
        rows={3}
        placeholder="Enter complete address"
        className="w-full p-3 form-field resize-none"
      />
    </div>
  );
}
