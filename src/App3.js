import React, { useState, Fragment, useEffect } from "react";
import { Header } from "./components/Header";
import { Formulario3 } from "./components/Formulario3";
import { Clima3 } from "./components/Clima3";
import { Error } from "./components/Error";
import ApiKey from "./components/ApiKey";

function App3() {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    id: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { id } = busqueda;

  // Id de Barcelona = 3128760

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = ApiKey.myKey;
        const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${appId}`;
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
      <Error mensaje="No hay resultados. No tenemos registrada una ciudad con ese id." />
    );
  } else {
    componente = <Clima3 resultado={resultado} />;
  }

  return (
    <Fragment>
      <Header titulo="Previsión del tiempo de las próximas 24 horas, insertando ID Ciudad" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario3
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

export default App3;
