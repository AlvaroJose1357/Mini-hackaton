/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
// import axiosInstance from "../config/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Contextapp = createContext();

export const ContextappProvider = ({ children }) => {
  const reactEnv = import.meta.env.VITE_REACT_APP_API_ENV;
  const [proyects, setProyects] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setValue } = useForm();
  // actividades
  // Función para manejar el envío del formulario al buscar actividades
  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.get(
        `${reactEnv}/readActivity/${data.proyecto_id}`
      );
      setActividades(response.data);
    } catch (err) {
      setErrorMessage("No se pudieron obtener las actividades.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar el envío del formulario al crear una actividad
  const onSubmitCreate = async (data) => {
    console.log(data);
    try {
      // Eliminar fecha_entrega de los datos antes de enviarlos

      const response = await axios.post(`${reactEnv}/createActivity`);
      setActividades(response.data);
      // Mostrar mensaje de éxito si la actividad se crea correctamente
      alert("Actividad creada correctamente");
    } catch (err) {
      console.error(err);
      alert("Error al crear la actividad");
    }
  };

  // Proyectos
  // listar proyectos
  const fetchProyects = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${reactEnv}/proyect`);
      setProyects(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // formulario de crear proyectos
  const formSubmit = async (data) => {
    console.log(data);
    try {
      // Estructurar los datos exactamente como los espera el backend
      const payload = {
        nombre: data.name,
        descripcion: data.description,
        estado: data.category, // Esto corresponde al campo "estado" en el backend
      };

      console.log("Datos enviados al backend:", payload);

      // Realizar la petición POST al endpoint correspondiente
      const response = await axios.post(`${reactEnv}/createProyect`, payload);
      console.log("Respuesta del servidor:", response.data);
      alert("Proyecto creado exitosamente");
      // Actualizar la lista de proyectos para reflejar el nuevo proyecto
      setProyects((prevProyects) => [...prevProyects, response.data]);

      // Redireccionar a la lista de proyectos
      navigate("/listProyect");

      // Resetear los valores del formulario
      setValue("name", "");
      setValue("description", "");
    } catch (error) {
      console.error("Error al crear el proyecto:", error);
      alert("Error al crear el proyecto, revisa los datos enviados");
    }
  };

  return (
    <Contextapp.Provider
      value={{
        proyects,
        onSubmit,
        loading,
        errorMessage,
        onSubmitCreate,
        actividades,
        fetchProyects,
        formSubmit,
      }}>
      {children}
    </Contextapp.Provider>
  );
};
