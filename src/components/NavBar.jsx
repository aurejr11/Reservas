import { useNavigate } from "react-router-dom";
import { clearSession } from "../utils/Autenticacion";

export default function NavBar({ session }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearSession();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div>
        <span className="text-xl font-bold">🍽️ Table-Track</span>
        <span className="ml-4 text-sm text-gray-400">
          {session.nombre} — Turno: {session.turno}
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-sm px-4 py-1.5 rounded-lg transition"
      >
        Cerrar sesión
      </button>
    </nav>
  );
}