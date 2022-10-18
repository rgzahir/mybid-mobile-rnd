import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { CredentialCardsCertificate, CredentialCardsPassport } from "../components/cards";
import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { DummyDataArray } from "../dummyData";
import { Accent, backgroundColorDynamic, borderRadiusDynamic, FlexWrap, fontBasic, marginDynamic, paddingDynamic } from "../styles";

export const CredentialPage = () => {
  const [currentFilter, setCurrentFilter] = useState("All");

  return (
    <View
      style={{
        ...paddingDynamic("12%", 24, 0, 24),
        // ...marginDynamic("-16%", -16, 0, -16),
      }}
    >
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

        <View
          style={{
            ...borderRadiusDynamic(16),
            ...paddingDynamic(24, 16, 24, 16),
            ...marginDynamic(16, 0, 16, 0),
            ...FlexWrap,
            ...backgroundColorDynamic(Accent.accent_green_3),
          }}
        >
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
