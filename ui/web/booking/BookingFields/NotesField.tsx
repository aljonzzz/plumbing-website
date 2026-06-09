type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function NotesField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Additional Notes</label>
      <textarea
        name="notes"
        value={value}
        onChange={onChange}
        rows={4}
        placeholder="Anything we should know? or any specific service you need..."
        className="w-full p-3 form-field resize-none"
      />
    </div>
  );
}
