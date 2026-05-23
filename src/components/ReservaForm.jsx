
// Componente de formulario para crear o editar una reserva, con campos para el nombre del cliente, fecha y hora, cantidad de personas y estado, y botones para guardar o cancelar
import { useState, useEffect } from "react";

// Componente de formulario para crear o editar una reserva, con campos para el nombre del cliente, fecha y hora, cantidad de personas y estado, y botones para guardar o cancelar
const DEFAULT = {
  nombreCliente: "",
  fechaHora: "",
  cantidadPersonas: "",
  estado: "En Espera",
};

// Componente de formulario para crear o editar una reserva, con campos para el nombre del cliente, fecha y hora, cantidad de personas y estado, y botones para guardar o cancelar
export default function ReservaForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(DEFAULT);

  // Si se recibe una reserva inicial para editar, se carga en el formulario, de lo contrario se resetea al estado por defecto
  useEffect(() => {
    if (initial) setForm(initial);
    else setForm(DEFAULT);
  }, [initial]);

  // Función para manejar los cambios en los campos del formulario, actualizando el estado del formulario con los nuevos valores
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Función para manejar el submit del formulario, validando que el nombre del cliente no esté vacío y que la cantidad de personas sea mayor a 0, y luego llamando a la función onSubmit con los datos del formulario
  const submit = (e) => {
    e.preventDefault();
    if (!form.nombreCliente.trim() || !form.cantidadPersonas) return;
    onSubmit(form);
  };

  // Renderiza el formulario con los campos para el nombre del cliente, fecha y hora, cantidad de personas y estado, y los botones para guardar o cancelar
  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <input
        name="nombreCliente"
        value={form.nombreCliente}
        onChange={handle}
        placeholder="Nombre del cliente *"
        required
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        name="fechaHora"
        value={form.fechaHora}
        onChange={handle}
        type="datetime-local"
        required
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        name="cantidadPersonas"
        value={form.cantidadPersonas}
        onChange={handle}
        type="number"
        min="1"
        placeholder="Cantidad de personas *"
        required
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <select
        name="estado"
        value={form.estado}
        onChange={handle}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <option>En Espera</option>
        <option>Confirmada</option>
        <option>Finalizada</option>
      </select>
      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 transition"
        >
          {initial ? "Guardar cambios" : "Crear reserva"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg py-2 transition"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}