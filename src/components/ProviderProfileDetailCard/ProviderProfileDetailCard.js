import "./ProviderProfileDetailCard.scss";

import React from "react";

const ProviderProfileDetailCard = ({ image, title, subtitle }) => {
  return (
    <div className="provider-profile-detail-card">
      <img
        src={image}
        alt={title}
        className="provider-profile-detail-card__image"
      />
      <div className="provider-profile-detail-card-text">
        <p className="provider-profile-detail-card-text__title">{title}</p>
        <p className="provider-profile-detail-card-text__subtitle">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ProviderProfileDetailCard;
