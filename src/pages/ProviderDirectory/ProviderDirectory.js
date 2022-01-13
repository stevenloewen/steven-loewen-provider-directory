import "./ProviderDirectory.scss";

import React, { useEffect, useState } from "react";
import { fetchProviders } from "../../api";

import Header from "../../components/Header/Header";
import NumberOfProviders from "../../components/NumberOfProviders/NumberOfProviders";
import ProviderDirectoryCard from "../../components/ProviderDirectoryCard/ProviderDirectoryCard";

const ProviderDirectory = () => {
  const [providerList, setProviderList] = useState([]);

  useEffect(() => {
    fetchProviders().then((response) => {
      setProviderList(response);
    });
  }, []);
console.log("provider list", providerList);
  return (
    <div className="provider-directory">
      <Header />
      <NumberOfProviders />
      {providerList.map((provider, index) => {
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
