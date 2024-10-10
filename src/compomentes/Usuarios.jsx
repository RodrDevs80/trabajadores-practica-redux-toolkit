import { useEffect, useState } from "react";
import { Candidato } from "./Candidato";
import { useDispatch, useSelector } from "react-redux";
import { agregarUnValor } from "../store/miSlice";
import { Link } from "react-router-dom";

export const Usuarios = () => {
  const dispactch = useDispatch();
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );
  const [usuarios, setUsuarios] = useState([]);
  const fetchUsuarios = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const data = await response.json(response);
      setUsuarios(data.results);
      //console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsuarios();
  }, []);
  const buscarUno = async (indice) => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=1");
      const data = await response.json(response);
      const provisional = [...usuarios];
      provisional[indice] = { ...data.results[0] };
      setUsuarios(provisional);
    } catch (error) {
      console.log(error);
    }
  };
  const guardar = (valor, indice) => {
    const nuevoValor = { ...valor, departamento: "" };
    dispactch(agregarUnValor(nuevoValor));
    buscarUno(indice);
  };
  return (
    <>
      <h1>Candidatos:</h1>
      <Link to={"/gestion"}>
        <button className="verde">trabajadores</button>
      </Link>
      <div className="presentacion">
        {usuarios &&
          usuarios.map((user, index) => (
            <Candidato
              key={index}
              user={user}
              onBuscar={buscarUno}
              index={index}
              onGuardar={guardar}
              valor={user}
            />
          ))}
      </div>
      <hr />
      <div className="candidatos">
        {listaTrabajadores.map((valor, indice) => (
          <Link to={"/gestion"} key={indice}>
            <button>{valor.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  );
};
