
//Se crea Api en MockAPI para manejar las reservaciones, se crean las funciones para manejar las peticiones a la API
import axios from "axios";

const BASE_URL = "https://6a11e64a3e35d0f37ee3d04a.mockapi.io/reservas/Reservaciones"; // URL

// Funciones para manejar las peticiones a la API
export const getAll = () => axios.get(BASE_URL);
export const create = (data) => axios.post(BASE_URL, data);
export const update = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const remove = (id) => axios.delete(`${BASE_URL}/${id}`);