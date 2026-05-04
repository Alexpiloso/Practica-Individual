import { useState } from "react";

function MissionForm({ agregarMision }) {
  const [mision, setMision] = useState("");
  const [prioridad, setPrioridad] = useState("Media");
  const [fecha, setFecha] = useState("");

  const manejarAgregar = () => {
    if (mision.trim() === "") return;

    const nuevaMision = {
      id: Date.now(),
      titulo: mision,
      prioridad,
      fecha,
      estado: "pendiente",
      eliminando: false,
      rehecha: false,
    };

    agregarMision(nuevaMision);

    setMision("");
    setPrioridad("Media");
    setFecha("");
  };

  return (
    <section className="bloque">
      <h3>Agregar nueva misión</h3>

      <form className="formulario">
        <div className="campo">
          <label>Misión</label>
          <input
            type="text"
            placeholder="¿Qué quieres completar hoy?"
            value={mision}
            onChange={(e) => setMision(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Prioridad</label>
          <select
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>

        <div className="campo">
          <label>Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <button type="button" onClick={manejarAgregar} className="btn">
          <i className="fa-solid fa-plus"></i> Agregar misión
        </button>
      </form>
    </section>
  );
}

export default MissionForm;