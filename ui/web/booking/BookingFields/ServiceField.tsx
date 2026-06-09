import { servicesData } from "../../services/servicesData";

type Props = {
  value: string[];
  onChange: (services: string[]) => void;
};

export default function ServiceField({
  value,
  onChange,
}: Props) {
  const handleToggle = (service: string) => {
    if (value.includes(service)) {
      onChange(
        value.filter((item) => item !== service)
      );
    } else {
      onChange([...value, service]);
    }
  };

  return (
    <div>
      <label className="block mb-3 font-medium">
        Services Needed *
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {servicesData.map((service) => {
          const selected = value.includes(
            service.title
          );

          return (
            <button
              key={service.slug}
              type="button"
              onClick={() =>
                handleToggle(service.title)
              }
              className={`
                text-left p-4 rounded-sm border transition-all
                flex items-center gap-3
                ${
                  selected
                    ? "border-[rgb(var(--color-primary))] bg-orange-50"
                    : "border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]"
                }
              `}
            >
              <div
                className={`
                  w-5 h-5 rounded border flex items-center justify-center shrink-0
                  ${
                    selected
                      ? "bg-[rgb(var(--color-primary))] border-[rgb(var(--color-primary))]"
                      : "border-gray-300"
                  }
                `}
              >
                {selected && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <span className="text-dark">
                {service.title}
              </span>
            </button>
          );
        })}
      </div>

      {value.length > 0 && (
        <p className="mt-3 text-sm text-muted">
          {value.length} service
          {value.length > 1 ? "s" : ""} selected
        </p>
      )}
    </div>
  );
}
