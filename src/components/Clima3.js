import React from "react";
import PropTypes from "prop-types";
import { BiTime } from "react-icons/bi";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TiWeatherCloudy } from "react-icons/ti";

export const Clima3 = ({ resultado }) => {
  // extraer los valores
  const { cod, city, list } = resultado;

  if (!cod) return null;

  // Grados kelvin
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima en {city.name} es de: </h2>
        <div>
          {list.slice(0, 9).map((res) => (
            <p key={res.dt_txt}>
              <BiTime className="icon" /> {res.dt_txt.slice(10, 16)} {"h "}
              <FaTemperatureLow className="icon" />
              {parseFloat(res.main.temp - kelvin, 10).toFixed(2)}
              {" ºC "}
              <WiHumidity className="icon" />
              {res.main.humidity}
              {"% "}
              <TiWeatherCloudy className="icon" />
              {res.weather[0].description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

Clima3.propTypes = {
  resultado: PropTypes.object.isRequired,
};
