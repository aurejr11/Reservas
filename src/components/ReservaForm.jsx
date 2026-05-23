

import { useState, useEffect } from "react";

const DEFAULT = {
  nombreCliente: "",
  fechaHora: "",
  cantidadPersonas: "",
  estado: "En Espera",
};

export default function ReservaForm({ initial, onSubmit, onCancel }) {
  const [form, setForm] = useState(DEFAULT);

  useEffect(() => {
    if (initial) setForm(initial);
    else setForm(DEFAULT);
  }, [initial]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.nombreCliente.trim() || !form.cantidadPersonas) return;
    onSubmit(form);
  };

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