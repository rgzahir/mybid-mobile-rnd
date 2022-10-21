import React from "react";
import { Text, View } from "react-native";

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
import { BackButton } from "../buttons";

export const AvailableCredentialHeader = () => {
  return (
    <View
      style={{
        ...FlexDirectionRow,
        ...JustifySpaceBetween,
        ...AlignItemCenter,
        ...marginDynamic("8%"),
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

      <BackButton label="X" fontColor={Accent.accent_blue_10} />
    </View>
  );
};

export default AvailableCredentialHeader;
