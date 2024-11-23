import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido al Proyecto de Gestion de Proyectos y actividades
        </h1>
        <p className="text-lg text-gray-600">
          En esta web podras gestionar tus proyectos y actividades de una forma
          sencilla, rapida y eficiente
        </p>
        <span className="text-blue-400 uppercase font-bold">
          <Link
            to="/proyectos"
            className="hover:underline">
            Comienza ahora mismo
          </Link>
        </span>
      </div>
    </div>
  );
}
