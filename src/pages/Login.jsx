import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSession, getSession } from "../utils/Autenticacion";
import { useEffect } from "react";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const [turno, setTurno] = useState("Mañana");
  const navigate = useNavigate();

  useEffect(() => {
    if (getSession()) navigate("/panel");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    saveSession({ nombre, turno });
    navigate("/panel");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          🍽️ Table-Track
        </h1>
        <p className="text-gray-500 text-center text-sm">
          Ingresa tus datos para continuar
        </p>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Nombre completo
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Ana Gómez"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Turno</label>
          <select
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2 transition"
        >
          Ingresar al panel
        </button>
      </form>
    </div>
  );
}