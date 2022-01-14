import "./Header.scss";

import React, { useState, useRef } from "react";

import MenuItem from "../MenuItem/MenuItem";

import { locationMockData } from "../../pages/ProviderDirectory/LocationMockData";

import LocationIcon from "../../assets/icons/location-icon.svg";
import Chevron from "../../assets/icons/chevron.svg";

const Header = ({ province, setProvince }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState("37px");

  const content = useRef(null);

  const toggleMenuOpen = (e) => {
    setMenuOpen(!menuOpen);
    setHeight(menuOpen ? "37px" : `${content.current.scrollHeight}px`);
  };

  const selectProvince = (e) => {
    setProvince(e);
  };

  return (
    <div className="header">
      <h1 className="header__title">Browse our providers</h1>
      <h3 className="header__subtitle">Mental Wellness</h3>
      <div
        className="location-container"
        onClick={toggleMenuOpen}
        ref={content}
        style={{ maxHeight: `${height}` }}
      >
        <div className="location">
          <img
            className="location__icon"
            src={LocationIcon}
            alt="location icon"
          />
          <p className="location__province">{province}</p>
          <img
            className={`location__chevron ${
              menuOpen && "location__chevron--rotate"
            }`}
            src={Chevron}
            alt="chevron"
          />
        </div>
        <div className="location-menu">
          {locationMockData.map((location, index) => {
            return (
              <MenuItem
                key={index}
                location={location}
                toggleMenuOpen={toggleMenuOpen}
                selectProvince={() => selectProvince(location)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
