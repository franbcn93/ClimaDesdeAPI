import React, { useState, Fragment, useEffect } from "react";
import { Header } from "./components/Header";
import { Formulario2 } from "./components/Formulario2";
import { Clima } from "./components/Clima";
import { Error } from "./components/Error";
import ApiKey from "./components/ApiKey";

function App2() {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    latitud: "",
    longitud: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { latitud, longitud } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = ApiKey.myKey;
        // const lat = "41.52046563697905";
        // const lon = "2.1504215340059525";
        const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

        guardarResultado(resultado);
        guardarConsultar(false);

        // Detecta si hubo resultados correctos en la consulta

        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {
    componente = (
      <Error mensaje="No hay resultados. No tenemos registrada una ciudad con ese nombre." />
    );
  } else {
    componente = <Clima resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header titulo="Previsión del tiempo, insertando Latitud y Longitud" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario2
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App2;
