import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { HeaderSpace, HeaderSpaceAddTest, MediumMargin, Neutral, NormalText } from "../../styles";

export const AvailableCredentialHeader = () => {
  return (
    <View style={{...HeaderSpace, ...HeaderSpaceAddTest}}>
      <Text style={{...NormalText, ...MediumMargin, color: Neutral.neutral_10}}>
        Available Credentials
      </Text>
      <TouchableOpacity>
        <Text style={NormalText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AvailableCredentialHeader;
