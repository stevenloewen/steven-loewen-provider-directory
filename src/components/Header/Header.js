import "./Header.scss";

import LocationIcon from "../../assets/icons/location-icon.svg";

import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Browse our providers</h1>
      <h3 className="header__subtitle">Mental Wellness</h3>
      <div className="location">
        <img className="location__icon" src={LocationIcon}></img>
        <p className="location__province">ON</p>
      </div>
    </div>
  );
};

export default Header;
