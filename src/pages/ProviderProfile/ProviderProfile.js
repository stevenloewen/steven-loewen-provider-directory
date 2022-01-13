import "./ProviderProfile.scss";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchProvider } from "../../api";

import Chevron from "../../assets/icons/chevron.svg";

const ProviderProfile = () => {
  const { id } = useParams();

  const [providerProfileData, setProviderProfileData] = useState({});

  useEffect(() => {
    fetchProvider(id).then((response) => {
      setProviderProfileData(response);
    });
  }, []);
  console.log("profile data", providerProfileData);

  return (
    <div className="provider-profile">
      <img
        src={providerProfileData.avatarUrl}
        alt={providerProfileData.name}
        className="provider-profile__image"
      />
      <div className="provider-profile-intro">
        <h1 className="provider-profile-intro__name">
          {providerProfileData.name}
        </h1>
        <h3 className="provider-profile-intro__profession">
          {providerProfileData.profession}
        </h3>
        <div className="provider-profile-intro-bio">
          <p className="provider-profile-intro-bio__text">
            {providerProfileData.bio}
          </p>
        </div>
        <div className="read-more">
            <p className="read-more__text">Read more</p>
            <img src={Chevron} alt="chevron" className="read-more__chevron" />
        </div>
      </div>
      
    </div>
  );
};

export default ProviderProfile;
