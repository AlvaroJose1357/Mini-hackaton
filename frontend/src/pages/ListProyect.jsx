import { useEffect } from "react";
import { useRoot } from "../hooks/useRoot";

export default function ListProyect() {
  const { proyects, loading, fetchProyects } = useRoot();
  useEffect(() => {
    fetchProyects();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Lista de Proyectos
      </h2>
      {loading && (
        <p className="text-center text-blue-500">Cargando actividades...</p>
      )}

      {!loading && proyects?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Proyectos:</h3>
          <ul className="mt-4">
            {proyects?.map((proyect) => (
              <li
                key={proyect._id}
                className="border-b py-2">
                <strong>{proyect.nombre}</strong>
                <br />
                <p>Descripcion: {proyect.descripcion}</p> <br />
                <p>Estado: {proyect.estado}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
