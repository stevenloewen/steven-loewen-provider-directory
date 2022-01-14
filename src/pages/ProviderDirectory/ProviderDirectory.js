import "./ProviderDirectory.scss";

import React, { useEffect, useState } from "react";
import { fetchProviders } from "../../api";

import Header from "../../components/Header/Header";
import NumberOfProviders from "../../components/NumberOfProviders/NumberOfProviders";
import ProviderDirectoryCard from "../../components/ProviderDirectoryCard/ProviderDirectoryCard";

import { locationMockData, locationNames } from "./LocationMockData";

const ProviderDirectory = () => {
  const [providerList, setProviderList] = useState([]);
  const [province, setProvince] = useState(locationMockData[0]);
  const [provinceFullName, setProvinceFullName] = useState(
    locationNames[0].full
  );

  const fetchListOfProviders = () => {
    fetchProviders().then((response) => {
      setProviderList(response);
    });
  };

  useEffect(() => {
    locationNames.forEach((location) => {
      if (province === location.abbr) {
        setProvinceFullName(location.full);
      }
    });
  }, [province]);

  useEffect(() => {
    fetchListOfProviders();
  }, []);

  const filteredProviderList = providerList.filter((provider) =>
    provider.location.includes(provinceFullName)
  );

  return (
    <div className="provider-directory">
      <Header province={province} setProvince={setProvince} />
      <NumberOfProviders
        provinceFullName={provinceFullName}
        number={(province === "ALL") ? providerList.length : filteredProviderList.length}
      />
      {((province === "ALL") ? providerList : filteredProviderList).map((provider, index) => {
        return (
          <ProviderDirectoryCard
            key={index}
            id={provider.id}
            availability={provider.availability}
            avatarUrl={provider.avatarUrl}
            bio={provider.bio}
            name={provider.name}
            title={provider.title}
            profession={provider.profession}
          />
        );
      })}
    </div>
  );
};

export default ProviderDirectory;
