import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { CredentialCardsCertificate, CredentialCardsPassport } from "../components/cards";
import { AvailableCredentialFilter } from "../components/filters";
import { AvailableCredentialHeader } from "../components/headers";
import { CredentialDataOne, CredentialDataTwo } from "../dummyData";
import { BaseContainer, ItemCard, NormalMargin, NormalTextWhite } from "../styles";

export const CredentialPage = () => {
  const [currentFilter, setCurrentFilter] = useState('All');
  const [isShownLocal, setIsShownLocal] = useState(false);
  const [isShownLocalV1, setIsShownLocalV1] = useState(false);
  const [showQR, setShowQR] = useState(true);

  return (
    <View style={BaseContainer}>
      <AvailableCredentialHeader />
      <AvailableCredentialFilter
        setCurrentFilter={setCurrentFilter}
        currentFilter={currentFilter}
      />

      <ScrollView>
        <CredentialCardsPassport
          identifier={isShownLocal}
          setIdentifier={setIsShownLocal}
          Data={CredentialDataOne}
        />

        <CredentialCardsCertificate
          identifier={isShownLocalV1}
          setIdentifier={setIsShownLocalV1}
          Data={CredentialDataTwo}
        />

        <View style={ItemCard}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{...NormalTextWhite, fontWeight: 'bold'}}>
              Academic Transcript Year 1
            </Text>
            <Text
              style={{
                ...NormalTextWhite,
                ...NormalMargin,
                fontStyle: 'italic',
              }}>
              USCI University
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CredentialPage;
