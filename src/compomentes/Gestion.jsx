import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Trabajador } from "./Trabajador";
import { eliminarUnValor, modificarUnValor } from "../store/miSlice";

export const Gestion = () => {
  const dispatch = useDispatch();
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );
  const actualizar = (continente, index) => {
    dispatch(
      modificarUnValor({
        indice: index,
        nuevoContinente: continente,
      })
    );
  };
  const eliminar = (indice) => {
    dispatch(eliminarUnValor(indice));
  };
  return (
    <>
      <h1>Trabajadores</h1>
      <Link to={"/"}>
        <button className="verde">Candidatos</button>
      </Link>
      <div className="usuarios">
        {listaTrabajadores.map((valor, indice) => (
          <Trabajador
            key={indice}
            valor={valor}
            indice={indice}
            onActualizar={actualizar}
            onEliminar={eliminar}
          />
        ))}
      </div>
    </>
  );
};
