import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  Accent,
  AlignItemCenter,
  FlexDirectionRow,
  fontBasic,
  JustifySpaceBetween,
  marginDynamic,
  Neutral,
  paddingDynamic,
} from "../../styles";

export const AvailableCredentialHeader = () => {
  return (
    <View
      style={{
        ...marginDynamic("8%"),
        ...FlexDirectionRow,
        ...JustifySpaceBetween,
        ...AlignItemCenter,
        ...paddingDynamic(8, 0, 8, 0),
      }}
    >
      <Text
        style={{
          ...fontBasic(18, "600", Neutral.neutral_10),
        }}
      >
        Available Credentials
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            ...fontBasic(14, "600", Accent.accent_blue_10),
          }}
        >
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AvailableCredentialHeader;
