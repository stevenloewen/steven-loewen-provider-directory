import "./ProviderDirectoryCard.scss";

import React from "react";
import { Link } from "react-router-dom";

const ProviderDirectoryCard = ({
  id,
  availability,
  avatarUrl,
  bio,
  name,
  title,
  profession,
}) => {
  return (
    <Link to={`/${id}`} className="provider-directory-card">
      <div className="provider-header">
        <div className="provider-avatar">
          <img src={avatarUrl} alt="" className="provider-avatar__image" />
        </div>
        <div className="provider-name-profession">
          <div className="provider-name-title">
            <h2 className="provider-name-title__name">{name}</h2>
            <h2 className="provider-name-title__title">{`, ${title}`}</h2>
          </div>
          <h4 className="provider-name-profession__profession">{profession}</h4>
        </div>
      </div>
      <p className="provider-bio">{bio}</p>
      <div className="availability">
        <p className="availability__text">{`Available ${availability}`}</p>
      </div>
    </Link>
  );
};

export default ProviderDirectoryCard;
