// import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  //   const navigate = useNavigate();
  //   const location = useLocation(); // Obtén la ruta actual

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-bold">
          Gestion de Proyectos y actividades{" "}
        </Link>
        <div className="flex space-x-4 items-center">
          <Link
            to="/proyectos"
            className="hover:text-gray-300">
            Proyectos
          </Link>
          <Link
            to="/actividades"
            className="hover:text-gray-300">
            Actividades
          </Link>
          {/* {location.pathname === "/productos" && usuario ? ( // Mostrar solo en /productos
    //         <>
    //           <div className="flex items-center space-x-2">
    //             <FontAwesomeIcon
    //               icon={faUser}
    //               className="text-gray-300"
    //             />
    //             <span className="text-gray-300">{usuario.nombre}</span>
    //           </div>
    //           <button className="text-red-500 hover:text-red-300 ml-4">
    //             Cerrar Sesión
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           <Link
    //             to="/login"
    //             className="hover:text-gray-300 flex">
    //             <FontAwesomeIcon
    //               icon={faUser}
    //               className="text-gray-300 mx-2 pt-1"
    //             />
    //             <p className="hover:underline">Login</p>
    //           </Link>
    //           <Link
    //             to="/register"
    //             className="hover:text-gray-300 flex">
    //             <FontAwesomeIcon
    //               icon={faUserPlus}
    //               className="text-gray-300 mx-2 pt-1"
    //             />
    //             <p className="hover:underline">Register</p>
    //           </Link>
    //         </>
    //       )} */}
        </div>
      </nav>
    </header>
  );
}
