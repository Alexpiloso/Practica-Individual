function MissionItem({ item, completarMision, rehacerMision, eliminarMision }) {
  const formatoFecha = (fecha) => {
    if (!fecha) return "Sin fecha";

    const partes = fecha.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  };

  return (
    <div
      className={`item-mision ${item.estado} ${item.estado === "pendiente" && item.rehecha ? "rehecha" : ""
        } ${item.eliminando ? "eliminando" : ""}`}
    >
      <div className="estado-circulo"></div>

      <div className="info-tarea">
        <h4
          style={{
            textDecoration:
              item.estado === "completado" ? "line-through" : "none",
            opacity: item.estado === "completado" ? "0.7" : "1",
          }}
        >
          {item.titulo}
        </h4>

        <span className={`etiqueta ${item.prioridad.toLowerCase()}`}>
          {item.prioridad}
        </span>
      </div>

      <div className="lado-derecho">
        <p className="fecha-tarea">
          <i className="fa-regular fa-calendar-days"></i>{" "}
          {formatoFecha(item.fecha)}
        </p>

        <div className="acciones">
          {item.estado === "pendiente" ? (
            <button
              className="btn-visto"
              onClick={() => completarMision(item.id)}
            >
              <i className="fa-solid fa-check"></i>
            </button>
          ) : (
            <button
              className="btn-rehacer"
              onClick={() => rehacerMision(item.id)}
            >
              <i className="fa-solid fa-rotate-left"></i>
            </button>
          )}

          <button
            className="btn-eliminar"
            onClick={() => eliminarMision(item.id)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MissionItem;