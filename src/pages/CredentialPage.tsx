import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { CredentialCardsCertificate, CredentialCardsPassport } from "../components/cards";
import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { DummyDataArray } from "../dummyData";
import { Accent, BaseContainer, fontBasic, ItemCard, marginDynamic } from "../styles";

export const CredentialPage = () => {
  const [currentFilter, setCurrentFilter] = useState("All");

  return (
    <View style={BaseContainer}>
      <AvailableCredentialHeader />
      <AvailableCredentialFilter
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <ScrollView>
        {DummyDataArray.map((item, key) => {
          const { credentialType } = item;
          const [isShownLocal, setIsShownLocal] = useState(false);

          if (currentFilter === "All") {
            if (credentialType === "passport") {
              return (
                <CredentialCardsPassport
                  key={key}
                  isShownLocal={isShownLocal}
                  setIsShownLocal={setIsShownLocal}
                  Data={item}
                />
              );
            }
            if (credentialType === "certificate") {
              return (
                <CredentialCardsCertificate
                  key={key}
                  isShownLocal={isShownLocal}
                  setIsShownLocal={setIsShownLocal}
                  Data={item}
                />
              );
            }
          }

          if (currentFilter === "Basic") {
            if (credentialType === "passport") {
              return (
                <CredentialCardsPassport
                  key={key}
                  isShownLocal={isShownLocal}
                  setIsShownLocal={setIsShownLocal}
                  Data={item}
                />
              );
            }
          }

          if (currentFilter === "Education") {
            if (credentialType === "certificate") {
              return (
                <CredentialCardsCertificate
                  key={key}
                  isShownLocal={isShownLocal}
                  setIsShownLocal={setIsShownLocal}
                  Data={item}
                />
              );
            }
          }
        })}

        <View style={ItemCard}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ ...fontBasic(14, "bold", Accent.accent_blue_10) }}>
              Academic Transcript Year 1
            </Text>
            <Text
              style={{
                ...fontBasic(12, "bold", Accent.accent_blue_5, 1, "italic"),
                ...marginDynamic(8),
              }}
            >
              USCI University
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CredentialPage;
