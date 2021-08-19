import React, { useState } from "react";
import { Error } from "./Error";
import PropTypes from "prop-types";

export const Formulario3 = ({
  busqueda,
  guardarBusqueda,
  guardarConsultar,
}) => {
  const [error, guardarError] = useState(false);

  // extraer ciudad y pais
  const { id } = busqueda;

  // función que coloca los elementos en el state
  const handleChange = (e) => {
    // actualizar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario da submit al formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no esté vacio
    if (id.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="El Id de la ciudad no es correcta" /> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="id"
          id="id"
          value={id}
          onChange={handleChange}
          placeholder="Ex: Id Barcelona es  3128760"
        />
        <label htmlFor="ciudad">ID: </label>
      </div>

      <div>
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 input-field col s12"
        />
      </div>
    </form>
  );
};

Formulario3.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
};
