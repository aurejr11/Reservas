// Página principal del panel de administración, donde se muestran las reservas, se pueden crear, editar, finalizar y eliminar reservas, y filtrar por estado
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getSession } from "../utils/Autenticacion";
import { getAll, create, update, remove } from "../services/Reservaciones";
import NavBar from "../components/NavBar";
import ReservaCard from "../components/ReservaCard";
import ReservaForm from "../components/ReservaForm";
import FiltroBar from "../components/FiltroBar";
import Spinner from "../components/Spinner";

// Página principal del panel de administración, donde se muestran las reservas, se pueden crear, editar, finalizar y eliminar reservas, y filtrar por estado
export default function Panel() {
  const session = getSession();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("Todos");

// Función para cargar todas las reservas desde la API, con manejo de errores y estado de carga
  const fetchAll = async () => {
    setLoading(true);
    try {
      const { data } = await getAll();
      setReservations(data);
    } catch {
      Swal.fire("Error", "No se pudieron cargar las reservas", "error");
    } finally {
      setLoading(false);
    }
  };

// Carga las reservas al montar el componente
  useEffect(() => { fetchAll(); }, []);

 // Función para manejar el submit del formulario de reserva, creando o actualizando según si se está editando o no, con manejo de errores y actualización de la lista de reservas 
  const handleSubmit = async (form) => {
    try {
      if (editing) {
        await update(editing.id, form);
        Swal.fire("✅", "Reserva actualizada", "success");
      } else {
        await create(form);
        Swal.fire("✅", "Reserva creada", "success");
      }
      setShowForm(false);
      setEditing(null);
      fetchAll();
    } catch {
      Swal.fire("Error", "No se pudo guardar la reserva", "error");
    }
  };
// Función para manejar la edición de una reserva, mostrando el formulario con los datos de la reserva seleccionada
  const handleEdit = (r) => {
    setEditing(r);
    setShowForm(true);
  };
// Función para manejar la finalización de una reserva, actualizando su estado a "Finalizada"
  const handleFinalize = async (r) => {
    await update(r.id, { ...r, estado: "Finalizada" });
    fetchAll();
  };

 // Función para manejar la eliminación de una reserva, con confirmación y manejo de errores 
  const handleDelete = async (r) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Cancelar la reserva de ${r.nombreCliente}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Sí, cancelar reserva",
      cancelButtonText: "No",
    });
    if (!result.isConfirmed) return;
    try {
      await remove(r.id);
      Swal.fire("Cancelada", "La reserva fue eliminada", "success");
      fetchAll();
    } catch {
      Swal.fire("Error", "No se pudo eliminar", "error");
    }
  };

// Filtra las reservas según el estado seleccionado en el filtro, mostrando todas si el filtro es "Todos"
  const visible = filter === "Todos"
    ? reservations
    : reservations.filter((r) => r.estado === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar session={session} />

      <main className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-gray-800">Reservas</h2>
          <button
            onClick={() => { setEditing(null); setShowForm(true); }} // Muestra el formulario para crear una nueva reserva, asegurándose de que no haya datos de edición previos
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            + Nueva reserva
          </button>
        </div>

        <FiltroBar active={filter} onChange={setFilter} />

        {showForm && (
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-lg text-gray-800 mb-4">
              {editing ? "Editar reserva" : "Nueva reserva"}
            </h3>
            <ReservaForm
              initial={editing}
              onSubmit={handleSubmit}
              onCancel={() => { setShowForm(false); setEditing(null); }}
            />
          </div>
        )}
        
        {loading ? (
          <Spinner />
        ) : visible.length === 0 ? (
          <p className="text-center text-gray-400 py-12">
            No hay reservas para mostrar.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((r) => (
              <ReservaCard
                key={r.id}
                reservation={r}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onFinalize={handleFinalize}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}