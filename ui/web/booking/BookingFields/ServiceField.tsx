type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function ServiceField({ value, onChange }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium">Service Needed *</label>

      <select
        name="service"
        value={value}
        onChange={onChange}
        required
        className="w-full p-3 form-field"
      >
        <option value="">Select a service</option>
         <option>
            Emergency Plumbing
          </option>

          <option>
            Leak Detection & Repair
          </option>

          <option>
            Drain Cleaning
          </option>

          <option>
            Pipe Repair & Installation
          </option>

          <option>
            Water Heater Services
          </option>

          <option>
            Bathroom Plumbing
          </option>

          <option>
            Kitchen Plumbing
          </option>

          <option>
            Sewer Line Repair
          </option>

          <option>
            Commercial Plumbing
          </option>

          <option>
            Plumbing Maintenance
          </option>
      </select>
    </div>
  );
}
