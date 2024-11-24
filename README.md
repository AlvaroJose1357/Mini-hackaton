---

# Proyecto Hackatón MERN y PostgreSQL

---

---

Este proyecto utiliza el stack **MERN (MongoDB, Express, React, Node.js)** combinado con **PostgreSQL** para gestionar proyectos y actividades asociadas. El sistema ofrece un backend robusto para la conexión de bases de datos y un frontend dinámico e intuitivo para la interacción del usuario.

---

## Tabla de Contenidos

1. [Características](#características)  
2. [Requisitos Previos](#requisitos-previos)  
3. [Instalación](#instalación)  
4. [Estructura del Proyecto](#estructura-del-proyecto)  
5. [Descripción del Frontend](#descripción-del-frontend)  
6. [Uso del Sistema](#uso-del-sistema)  
7. [Endpoints del Backend](#endpoints-del-backend)  
8. [Tecnologías Utilizadas](#tecnologías-utilizadas)
9. [Comandos SQL para crear la base de datos] (#Comandos-SQL-para-crear-la-base-de-datos)  

---

## Características

- Gestión de **proyectos** almacenados en **MongoDB**.
- Creación de **actividades** sincronizadas entre **MongoDB** y **PostgreSQL**.
- Listado dinámico de actividades basado en el proyecto seleccionado.
- **Frontend interactivo** construido con React, con validación de formularios usando **React Hook Form**.
- **Backend modular** construido con Node.js, organizado en controladores, rutas y modelos.
- **Integración con TailwindCSS** para un diseño moderno y responsivo.
- Uso de variables de entorno para mayor seguridad y flexibilidad.

---

## Requisitos Previos

- Node.js (v16 o superior)  
- MongoDB y PostgreSQL instalados localmente o en un servidor.  
- Gestor de paquetes `npm` o `yarn`.

---

## Instalación

### Clonar el Repositorio  
```bash
git clone <https://github.com/AlvaroJose1357/Mini-hackaton>
cd <Mini-hackaton>
```

### Configuración del Backend  

1. **Instalar dependencias**  
   ```bash
   cd backend
   npm install
   ```

2. **Configurar el archivo `.env`**  
   Crea un archivo `.env` en la carpeta `backend` con la siguiente configuración:

   ```env
   PORT=5000
   MONGO_URI=<TU_URI_DE_MONGODB>
   POSTGRES_URI=<TU_URI_DE_POSTGRESQL>
   ```

3. **Iniciar el servidor**  
   ```bash
   npm start
   ```

### Configuración del Frontend  

1. **Instalar dependencias**  
   ```bash
   cd frontend
   npm install
   ```

2. **Iniciar la aplicación**  
   ```bash
   npm run dev
   ```

El frontend estará disponible en `http://localhost:5173` y el backend en `http://localhost:5000`.

---

## Estructura del Proyecto

### Backend

```
backend
├── config
│   └── BD.js                  # Configuración de MongoDB y PostgreSQL
├── controllers
│   ├── actividadesController.js # Controlador para actividades
│   ├── mainController.js       # Controlador principal
│   └── proyectosController.js  # Controlador para proyectos
├── models
│   └── Proyecto.js             # Modelo de MongoDB para proyectos
├── routes
│   └── endpoint.js             # Rutas del backend
├── server.js                   # Configuración principal del servidor
└── .env                        # Variables de entorno
```

### Frontend

```
frontend
├── src
│   ├── components
│   │   ├── Error.jsx              # Componente de error
│   │   └── Header.jsx             # Componente del header de la página
│   ├── context
│   │   └── Contexapp.jsx          # Funciones de la página para los formularios
│   ├── data
│   │   └── estado.js              # Script para los estados de los proyectos
│   ├── pages
│   │   ├── CreateActivities.jsx   # Página principal que crea las actividades para el proyecto
│   │   ├── Actividades.jsx        # Página para gestionar actividades
│   │   ├── Error404.jsx           # Página para el error 404 de ruta
│   │   ├── Home.jsx               # Página principal del proyecto
│   │   ├── ListProyect.jsx        # Página para listar los proyectos
│   │   └── Proyects.jsx           # Página principal que envia el proyecto a la base de datos
│   ├── hooks
│   │   └── useFetch.js            # Hook personalizado para peticiones a la API
│   ├── App.jsx                    # Configuración principal de la app
│   ├── index.css                  # Archivo importa el TailwindCSS al proyecto
│   └── main.jsx                   # Archivo principal del proyecto
├── .env                           # Archivo para configurar las variables para la conexión
├── public
│   └── vite.svg                   # Imagen de Vite
└── tailwind.config.js             # Configuración de TailwindCSS
```

---

## Descripción del Frontend

### Funcionalidades

1. **Gestión de Proyectos**
   - Página principal donde se listan los proyectos registrados.
   - Formulario para la creación de nuevos proyectos.

2. **Gestión de Actividades**
   - Formulario para la creación de actividades asociadas a un proyecto.
   - Listado dinámico que muestra las actividades filtradas según el proyecto seleccionado.

3. **Diseño Responsivo**
   - Componentes estilizados con TailwindCSS para adaptarse a diferentes tamaños de pantalla.
   - Uso de colores, tipografía y espaciado consistentes.

4. **Validación Dinámica**
   - Validación en tiempo real de los formularios mediante React Hook Form.
   - Manejo de mensajes de error claros y útiles para el usuario.

5. **Interacción con la API**
   - Todas las acciones (crear, listar) están conectadas al backend mediante **Axios**.
   - Respuestas y errores del servidor son gestionados y mostrados de forma amigable.

---

## Uso del Sistema

1. Accede a la interfaz del frontend (`http://localhost:5173`).
2. **Crear Proyecto**:
   - Haz clic en el formulario de creación de proyectos.
   - Completa los datos requeridos y envíalos.
3. **Crear Actividad**:
   - Selecciona un proyecto del listado.
   - Rellena el formulario de actividad (nombre, descripción) y envía.
4. **Ver Actividades**:
   - Selecciona un proyecto para listar sus actividades relacionadas.

---

## Endpoints del Backend

- **POST** `/api/createProyect`  
  Crea un nuevo proyecto en MongoDB.  

- **POST** `/api/createActivity`  
  Crea una actividad asociada a un proyecto en MongoDB y sincroniza con PostgreSQL.  

- **GET** `/api/readActivity/:proyecto_id`  
  Obtiene las actividades relacionadas a un proyecto.

---

## Tecnologías Utilizadas

### Backend
- Node.js  
- Express  
- MongoDB (Mongoose)  
- PostgreSQL (pg)  

### Frontend
- React  
- React Hook Form  
- Axios  
- TailwindCSS  

---

---
## Comandos SQL para crear la base de datos
CREATE TABLE actividades (
  activities_id serial PRIMARY KEY,
  nombre VARCHAR(100),
  responsable VARCHAR(50),
  fecha_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  proyecto_id varchar(100),
  FOREIGN KEY (proyecto_id) REFERENCES proyectos(proyecto_id)
);

CREATE TABLE proyectos (
  proyecto_id varchar(100) PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);
---
