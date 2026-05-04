function MissionFilters({ setFiltro, total, pendientes, completadas }) {
  return (
    <section className="bloque">
      <h3>Filtrar misiones</h3>

      <div className="filtros-resumen">
        <div className="filtros">
          <button onClick={() => setFiltro("todas")} className="filtro-btn">
            <i className="fa-solid fa-list"></i> Todas
          </button>

          <button onClick={() => setFiltro("pendientes")} className="filtro-btn">
            <i className="fa-regular fa-clock"></i> Pendientes
          </button>

          <button onClick={() => setFiltro("completados")} className="filtro-btn">
            <i className="fa-regular fa-circle-check"></i> Completados
          </button>
        </div>

        <div className="resumen">
          <div className="card-resumen">
            <h4>Total</h4>
            <span>{total}</span>
          </div>

          <div className="card-resumen">
            <h4>Pendientes</h4>
            <span>{pendientes}</span>
          </div>

          <div className="card-resumen">
            <h4>Completados</h4>
            <span>{completadas}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionFilters;