import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Proyects from "./pages/Proyects";
import Activities from "./pages/Activities";
import CreateActivities from "./pages/CreateActivities";

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
          element={<h1>Not Found</h1>}
        />
        <Route
          path="/proyectos"
          element={<Proyects />}
        />
        <Route
          path="/actividades"
          element={<Activities />}
        />
        <Route
          path="/actividades/:"
          element={<CreateActivities />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
