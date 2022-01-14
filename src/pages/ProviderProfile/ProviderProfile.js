import "./ProviderProfile.scss";

import React, { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";

import { fetchProvider } from "../../api";

import ProviderProfileDetailCard from "../../components/ProviderProfileDetailCard/ProviderProfileDetailCard";

import Chevron from "../../assets/icons/chevron.svg";
import LocationMap from "../../assets/icons/location-map.svg";
import Education from "../../assets/icons/education.svg";
import Language from "../../assets/icons/language.svg";

const ProviderProfile = () => {
  const { id } = useParams();

  const [providerProfileData, setProviderProfileData] = useState({});
  const [languages, setLanguages] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [height, setHeight] = useState("60px");

  const content = useRef(null);

  const toggleReadMore = (e) => {
      setReadMore(!readMore);
      setHeight( readMore ? "60px" : `${content.current.scrollHeight}px`);
  }

  useEffect(() => {
    fetchProvider(id).then((response) => {
      setProviderProfileData(response);
      setLanguages(response.languages.join(', '));
    });
  }, [id]);
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
        <div className="provider-profile-intro-bio" ref={content} style={{ maxHeight: `${height}` }}>
          <p className="provider-profile-intro-bio__text">
            {providerProfileData.bio}
          </p>
        </div>
        <div className="read-more" onClick={toggleReadMore}>
          <p className="read-more__text">Read more</p>
          <img src={Chevron} alt="chevron" className={`read-more__chevron ${readMore && "read-more__chevron--rotate"}`} />
        </div>
      </div>
      <div className="provider-profile-details-container">
        <ProviderProfileDetailCard
          image={LocationMap}
          title="Location"
          subtitle={providerProfileData.location}
        />
        <ProviderProfileDetailCard
          image={Education}
          title="Education"
          subtitle={providerProfileData.education}
        />
        <ProviderProfileDetailCard
          image={Language}
          title="Language"
          subtitle={languages}
        />
      </div>
      <button className="book">Book with us</button>
    </div>
  );
};

export default ProviderProfile;
