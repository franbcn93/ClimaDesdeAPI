import React, { useState } from "react";
import { Error } from "./Error";
import PropTypes from "prop-types";

export const Formulario2 = ({
  busqueda,
  guardarBusqueda,
  guardarConsultar,
}) => {
  const [error, guardarError] = useState(false);

  // extraer ciudad y pais
  const { latitud, longitud } = busqueda;

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
    if (latitud.trim() === "" || longitud.trim() === "") {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="latitud"
          id="latitud"
          value={latitud}
          onChange={handleChange}
          placeholder={"41.520"}
        />
        <label htmlFor="latitud">Latitud: </label>
      </div>
      {/* const lat = "41.52046563697905";
          const lon = "2.1504215340059525"; */}
      <div className="input-field col s12">
        <input
          type="text"
          name="longitud"
          id="longitud"
          value={longitud}
          onChange={handleChange}
          placeholder={"2.15042"}
        />
        <label htmlFor="longitud">Longitud: </label>
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

Formulario2.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsultar: PropTypes.func.isRequired,
};
