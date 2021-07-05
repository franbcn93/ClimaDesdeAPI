import React from "react";
import PropTypes from "prop-types";

export const Error = ({ mensaje }) => {
  return <p className="red darken-5 error">{mensaje}</p>;
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};
