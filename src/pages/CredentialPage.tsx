import React, { useState } from "react";
import { View } from "react-native";

import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { CredentialListComponent } from "../components/lists";
import { paddingDynamic } from "../styles";

export const CredentialPage = () => {
  const [currentFilter, setCurrentFilter] = useState("All");

  return (
    <View
      style={{
        ...paddingDynamic("12%", 24, "40%", 24),
        marginBottom: 88,
        // ...marginDynamic("-16%", -16, 0, -16),
      }}
    >
      <AvailableCredentialHeader />
      <AvailableCredentialFilter
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <CredentialListComponent currentFilter={currentFilter} />
    </View>
  );
};

export default CredentialPage;
