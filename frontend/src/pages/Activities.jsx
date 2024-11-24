import { useForm } from "react-hook-form";
import { useRoot } from "../hooks/useRoot";

const ListActivitiesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actividades, onSubmit, loading, errorMessage } = useRoot();

  // Función para manejar el envío del formulario

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Lista de Actividades por Proyecto
      </h2>

      {/* Formulario */}
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

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Buscar Actividades
          </button>
        </div>
      </form>

      {/* Mostrar mensaje de error si ocurre un problema */}
      {errorMessage && (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      )}

      {/* Mostrar actividades */}
      {loading && (
        <p className="text-center text-blue-500">Cargando actividades...</p>
      )}

      {!loading && actividades?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Actividades:</h3>
          <ul className="mt-4">
            {actividades?.map((actividad) => (
              <li
                key={actividad.id}
                className="border-b py-2">
                <strong>{actividad.nombre}</strong>
                <br />
                Responsable: {actividad.responsable} <br />
                Fecha de Entrega: {actividad.fecha_entrega}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListActivitiesForm;
