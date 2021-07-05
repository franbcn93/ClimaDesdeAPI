import React from "react";
import PropTypes from "prop-types";

export const Header = ({ titulo }) => {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-5">
        <a href="#!" className="brand-logo">
          {titulo}
        </a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
