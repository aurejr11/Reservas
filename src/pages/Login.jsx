import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveSession, getSession } from "../utils/Autenticacion";
import { useEffect } from "react";

// Página de login, se maneja el estado del formulario y se guarda la sesión en localStorage al ingresar
export default function Login() {
  const [nombre, setNombre] = useState("");
  const [turno, setTurno] = useState("Mañana");
  const navigate = useNavigate();

// Si ya hay una sesión activa, redirige al panel
  useEffect(() => {
    if (getSession()) navigate("/panel");
  }, []);

// Maneja el submit del formulario, valida que el nombre no esté vacío y guarda la sesión
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;
    saveSession({ nombre, turno });
    navigate("/panel");
  };

// Formulario de login con campos para nombre y turno, y un botón para ingresar al panel
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col gap-5"
      >
        <h1 className="text-3xl font-bold text-black-600 text-center">
          🍽️ Table-Track
        </h1>
        <p className="text-black-500 text-center text-sm">
          Ingresa tus datos para continuar
        </p>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-black-700">
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
          <label className="text-sm font-medium text-black-700">Turno</label>
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
          Ingresar
        </button>
      </form>
    </div>
  );
}