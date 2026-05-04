function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="logo-box">
          <div className="logo-icono"></div>
          <h1>
            <i className="fa-brands fa-playstation"></i>
          </h1>
          <h2>Gaming</h2>
          <p>Organiza tu mundo gamer</p>
        </div>

        <nav className="menu">
          <details className="menu-desplegable">
            <summary className="activo">
              <i className="fa-solid fa-list"></i> Todas las tareas
            </summary>

            <div className="submenu">
              <a href="#pendientes">
                <i className="fa-regular fa-clock"></i> Pendientes
              </a>
              <a href="#completados">
                <i className="fa-regular fa-circle-check"></i> Completados
              </a>
              <a href="#calendario">
                <i className="fa-regular fa-calendar"></i> Calendario
              </a>
              <a href="#estadisticas">
                <i className="fa-solid fa-chart-column"></i> Estadísticas
              </a>
              <a href="#ajustes">
                <i className="fa-solid fa-gear"></i> Ajustes
              </a>
            </div>
          </details>
        </nav>
      </div>

      <div className="frase">
        <hr className="separador" />
        <i className="fa-solid fa-gamepad"></i> Cada partida es una nueva
        oportunidad para mejorar.
      </div>
    </aside>
  );
}

export default Sidebar;