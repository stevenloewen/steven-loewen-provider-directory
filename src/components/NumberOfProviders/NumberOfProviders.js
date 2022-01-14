import "./NumberOfProviders.scss";

import React from "react";

const NumberOfProviders = ({ provinceFullName, number }) => {
  return (
    <div className="number-of-providers">
      <p className="number-of-providers__number">{number}</p>
      <p className="number-of-providers__text">{`providers in ${provinceFullName}`}</p>
    </div>
  );
};

export default NumberOfProviders;
