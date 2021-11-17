import React, { useState, Fragment, useEffect } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { Clima } from "./components/Clima";
import { Error } from "./components/Error";
import ApiKey from "./components/ApiKey";

function App() {
  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = ApiKey.myKey;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        // const url =
        //   "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=Barcelona,ES&appid=da1b2b293687420fea212e2b0350f9a4";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
        console.log(respuesta);
        console.log(resultado.cod);

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
      <Header titulo="Previsión del tiempo, insertando Ciudad y País" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
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

export default App;
