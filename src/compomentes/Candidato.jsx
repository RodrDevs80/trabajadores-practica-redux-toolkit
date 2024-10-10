/* eslint-disable react/prop-types */
export const Candidato = ({ user, onBuscar, index, onGuardar, valor }) => {
  return (
    <>
      <div className="usuario">
        <div className="foto">
          <img src={user.picture.large} alt={user.name.first} />
        </div>
        <div className="datos">
          <div className="nombre">
            {user.name.title} {user.name.first} {user.name.last}
          </div>
          <div>
            Ubicacion: {user.location.city} ({user.location.country})
          </div>
          <div>
            <a href="#">{user.email}</a>
          </div>
          <div>
            <a href="tel:+">{user.cell}</a>
          </div>
        </div>
        <div className="botones">
          <button onClick={() => onBuscar(index)} className="rojo">
            Ocultar
          </button>
          <button onClick={() => onGuardar(valor, index)} className="verde">
            Guardar
          </button>
        </div>
      </div>
    </>
  );
};
