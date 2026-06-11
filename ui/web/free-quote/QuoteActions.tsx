type Props = {
  loading: boolean;
  onClose: () => void;
};

export default function BookingActions({ loading, onClose }: Props) {
  return (
    <div className="flex gap-3 pt-2">
      <button
        type="button"
        onClick={onClose}
        disabled={loading}
        className="flex-1 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={loading}
        className="flex-1 py-3 rounded-xl font-semibold bg-[rgb(var(--color-primary))] text-white hover:opacity-90 transition"
      >
        {loading ? "Submitting..." : "Submit Quote"}
      </button>
    </div>
  );
}
