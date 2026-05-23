# 🍽️ Table-Track — Gestor de Reservas

Aplicación web SPA (Single Page Application) desarrollada para que los anfitriones de un restaurante puedan gestionar las reservas de mesas de manera eficiente. Permite crear, visualizar, editar, filtrar y eliminar reservas en tiempo real.

---

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| React.js + Vite | Framework principal y bundler |
| React Router DOM | Enrutamiento y protección de rutas |
| Tailwind CSS | Estilos y diseño responsive |
| Axios | Peticiones HTTP a la API |
| SweetAlert2 | Alertas y confirmaciones |
| MockAPI | API RESTful simulada |
| LocalStorage | Persistencia de sesión |
| Git + GitHub | Control de versiones |

---

## 🌐 API

La aplicación consume una API RESTful simulada en MockAPI.

**Base URL:*https://6a11e64a3e35d0f37ee3d04a.mockapi.io/reservas/Reservaciones*

**Endpoints disponibles:**

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /Reservaciones | Obtener todas las reservas |
| POST | /Reservaciones | Crear una nueva reserva |
| PUT | /Reservaciones/:id | Actualizar una reserva |
| DELETE | /Reservaciones/:id | Eliminar una reserva |

---

## 💻 Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/table-track.git
```

### 2. Entrar a la carpeta del proyecto

```bash
cd table-track
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### 5. Abrir en el navegador


---

## 📁 Estructura del proyecto

src/
├── components/
│   ├── Navbar.jsx
│   ├── ReservaCard.jsx
│   ├── ReservaForm.jsx
│   ├── FiltroBar.jsx
│   └── Spinner.jsx
├── pages/
│   ├── Login.jsx
│   └── Panel.jsx
├── services/
│   └── Reservaciones.js
├── utils/
│   └── Autenticacion.js
├── App.jsx
└── main.jsx

---

## 👤 Autor

Desarrollado por **Aurelio Marcel Velásquez Aponte**  
Prueba técnica — Desarrollador Frontend Junior  
Mayo 2026