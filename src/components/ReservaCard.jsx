
// Componente para mostrar la información de una reserva en una tarjeta, con botones para editar, finalizar o eliminar la reserva según su estado
const colorMap = {
  Confirmada: "bg-green-100 text-green-700",
  "En Espera": "bg-yellow-100 text-yellow-700",
  Finalizada: "bg-gray-100 text-gray-500",
};

// Componente para mostrar la información de una reserva en una tarjeta, con botones para editar, finalizar o eliminar la reserva según su estado
export default function ReservaCard({ reservation, onEdit, onDelete, onFinalize }) {
  const { nombreCliente, fechaHora, cantidadPersonas, estado } = reservation;

  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-3">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-bold text-gray-800 text-lg">{nombreCliente}</p>
          <p className="text-sm text-gray-500">{fechaHora}</p>
          <p className="text-sm text-gray-500">👥 {cantidadPersonas} personas</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colorMap[estado]}`}>
          {estado}
        </span>
      </div>

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onEdit(reservation)}
          className="text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded-lg transition"
        >
          ✏️ Editar
        </button>
        {estado !== "Finalizada" && (
          <button
            onClick={() => onFinalize(reservation)}
            className="text-sm bg-green-50 text-green-600 hover:bg-green-100 px-3 py-1 rounded-lg transition"
          >
            ✅ Finalizar
          </button>
        )}
        <button
          onClick={() => onDelete(reservation)}
          className="text-sm bg-red-50 text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg transition"
        >
          🗑️ Cancelar
        </button>
      </div>
    </div>
  );
}