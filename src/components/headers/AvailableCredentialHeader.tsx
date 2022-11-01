import React from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
  FlexDirectionRow,
  fontBasic,
  JustifySpaceBetween,
  marginDynamic,
  Neutral,
  paddingDynamic,
  POPPINS_SEMIBOLD,
} from "../../styles";
import { NormalIconButton } from "../buttons";

export const AvailableCredentialHeader = () => {
  return (
    <View
      style={{
        ...FlexDirectionRow,
        ...JustifySpaceBetween,
        ...AlignItemCenter,
        ...marginDynamic("16%"),
        ...paddingDynamic(8, 0, 8, 0),
      }}
    >
      <Text
        style={{
          ...fontBasic(20, "600", Neutral.neutral_10),
          fontFamily: POPPINS_SEMIBOLD,
          lineHeight: 24,
        }}
      >
        Available Credentials
      </Text>

      <NormalIconButton name="omega" size={16} color={Neutral.neutral_10} />
    </View>
  );
};

export default AvailableCredentialHeader;
