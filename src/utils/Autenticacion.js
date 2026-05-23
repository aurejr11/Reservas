export const getSession = () => JSON.parse(localStorage.getItem("session"));

export const saveSession = (data) =>
  localStorage.setItem("session", JSON.stringify(data));

export const clearSession = () => localStorage.removeItem("session");