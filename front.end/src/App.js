import { useState } from "react";
import "./Styles/global.css";
import "./Styles/Header.css";
import "./Styles/layout.css";
import "./Styles/MissionFilters.css";
import "./Styles/MissionForm.css";
import "./Styles/MissionItem.css";
import "./Styles/MissionList.css";
import "./Styles/Sidebar.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import MissionForm from "./Components/MissionForm";
import MissionFilters from "./Components/MissionFilters";
import MissionList from "./Components/MissionList";

function App() {
  const [misiones, setMisiones] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  const agregarMision = (nuevaMision) => {
    setMisiones([...misiones, nuevaMision]);
  };

  const completarMision = (id) => {
    setMisiones(
      misiones.map((item) =>
        item.id === id
          ? { ...item, estado: "completado", rehecha: false }
          : item
      )
    );
  };

  const rehacerMision = (id) => {
    setMisiones(
      misiones.map((item) =>
        item.id === id
          ? { ...item, estado: "pendiente", rehecha: true }
          : item
      )
    );
  };

  const eliminarMision = (id) => {
    setMisiones(
      misiones.map((item) =>
        item.id === id ? { ...item, eliminando: true } : item
      )
    );

    setTimeout(() => {
      setMisiones((actuales) => actuales.filter((item) => item.id !== id));
    }, 1000);
  };

  const misionesFiltradas = misiones.filter((item) => {
    if (filtro === "todas") return true;
    if (filtro === "pendientes") return item.estado === "pendiente";
    if (filtro === "completados") return item.estado === "completado";
    return true;
  });

  const total = misiones.length;
  const pendientes = misiones.filter((item) => item.estado === "pendiente").length;
  const completadas = misiones.filter((item) => item.estado === "completado").length;

  return (
    <div className="contenedor">
      <Sidebar />

      <main className="principal">
        <Header />

        <MissionForm agregarMision={agregarMision} />

        <MissionFilters
          setFiltro={setFiltro}
          total={total}
          pendientes={pendientes}
          completadas={completadas}
        />

        <MissionList
          misiones={misionesFiltradas}
          completarMision={completarMision}
          rehacerMision={rehacerMision}
          eliminarMision={eliminarMision}
        />

        <hr className="separador" />

        <footer className="footer">© 2026 Mis Tareas Gamer</footer>
      </main>
    </div>
  );
}

export default App;