import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Proyects from "./pages/Proyects";
import Activities from "./pages/Activities";
import CreateActivities from "./pages/CreateActivities";
import ListProyect from "./pages/ListProyect";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
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
          element={<Activities />}
        />
        <Route
          path="/actividades/:proyect_id"
          element={<CreateActivities />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
