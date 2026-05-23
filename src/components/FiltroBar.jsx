

const ESTADOS = ["Todos", "Confirmada", "En Espera", "Finalizada"];

export default function FiltroBar({ active, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {ESTADOS.map((e) => (
        <button
          key={e}
          onClick={() => onChange(e)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            active === e
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {e}
        </button>
      ))}
    </div>
  );
}