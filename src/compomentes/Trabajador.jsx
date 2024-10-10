import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
export const Trabajador = ({ valor, indice, onActualizar, onEliminar }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  );
  return (
    <>
      <div className="columna">
        <div className="foto-usuario">
          <img src={valor.picture.large} alt={valor.name.first} />
        </div>
        <div className="nombre-usuario">
          <strong>
            {valor.name.title} {valor.name.first} {valor.name.last}
          </strong>
        </div>
        <div>
          Ubicacion: {valor.location.city} ({valor.location.country})
        </div>
        <select onChange={(event) => onActualizar(event.target.value, indice)}>
          <option>Selecciona:</option>
          {departamentos.map((esteValor, i) =>
            valor.departamento === esteValor ? (
              <option selected key={i}>
                {esteValor}
              </option>
            ) : (
              <option key={i}>{esteValor}</option>
            )
          )}
        </select>
        <div>
          <button onClick={() => onEliminar(indice)} className="rojo">
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};
