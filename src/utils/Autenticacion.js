
// Funciones para manejar la autenticación de usuario, guardando la sesión en localStorage
export const getSession = () => JSON.parse(localStorage.getItem("session"));

//
export const saveSession = (data) =>
  localStorage.setItem("session", JSON.stringify(data));

export const clearSession = () => localStorage.removeItem("session");