/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import axiosInstance from "../config/axios";

const ActivityForm = ({ setActividades }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función para manejar el envío del formulario
  const onSubmit = async (data) => {
    console.log(data);
    try {
      // Eliminar fecha_entrega de los datos antes de enviarlos

      const response = await axiosInstance.post("/createActivity");
      setActividades(response.data);
      // Mostrar mensaje de éxito si la actividad se crea correctamente
      alert("Actividad creada correctamente");
    } catch (err) {
      console.error(err);
      alert("Error al crear la actividad");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Agregar Actividad
      </h2>

      {/* Formulario usando React Hook Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="proyecto_id"
            className="block text-sm font-medium text-gray-700">
            ID del Proyecto:
          </label>
          <input
            id="proyecto_id"
            type="text"
            {...register("proyecto_id", {
              required: "El ID del proyecto es obligatorio",
            })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.proyecto_id && (
            <p className="text-red-500 text-xs mt-1">
              {errors.proyecto_id.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700">
            Nombre de la Actividad:
          </label>
          <input
            id="nombre"
            type="text"
            {...register("nombre", {
              required: "El nombre de la actividad es obligatorio",
            })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.nombre && (
            <p className="text-red-500 text-xs mt-1">{errors.nombre.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="responsable"
            className="block text-sm font-medium text-gray-700">
            Responsable:
          </label>
          <input
            id="responsable"
            type="text"
            {...register("responsable", {
              required: "El responsable es obligatorio",
            })}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.responsable && (
            <p className="text-red-500 text-xs mt-1">
              {errors.responsable.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Crear Actividad
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityForm;
