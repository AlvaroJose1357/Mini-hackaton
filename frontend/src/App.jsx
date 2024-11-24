import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Proyects from "./pages/Proyects";
import ListProyect from "./pages/ListProyect";
import ListActivitiesForm from "./pages/Activities";
import ActivityForm from "./pages/CreateActivities";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Rutas de la aplicación */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
        <Route
          path="/proyectos"
          element={<Proyects />}
        />
        <Route
          path="/listProyect"
          element={<ListProyect />}
        />
        <Route
          path="/actividades"
          element={<ListActivitiesForm />}
        />
        <Route
          path="/actividades/:proyect_id"
          element={<ActivityForm />}
        />
      </Routes>
    </>
  );
}

export default App;
