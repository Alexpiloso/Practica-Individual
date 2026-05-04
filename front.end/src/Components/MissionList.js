import MissionItem from "./MissionItem";

function MissionList({
  misiones,
  completarMision,
  rehacerMision,
  eliminarMision,
}) {
  return (
    <section className="bloque">
      <h3>Lista de misiones</h3>

      <div className="lista">
        {misiones.map((item) => (
          <MissionItem
            key={item.id}
            item={item}
            completarMision={completarMision}
            rehacerMision={rehacerMision}
            eliminarMision={eliminarMision}
          />
        ))}
      </div>
    </section>
  );
}

export default MissionList;