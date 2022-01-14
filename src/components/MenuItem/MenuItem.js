import "./MenuItem.scss";

import React from "react";

const MenuItem = ({ location, toggleMenuOpen, selectProvince }) => {
  return (
    <div
      className="menu-item"
      onClick={() => {
        toggleMenuOpen();
        selectProvince();
      }}
    >
      <p className="menu-item__option">{location}</p>
    </div>
  );
};

export default MenuItem;
