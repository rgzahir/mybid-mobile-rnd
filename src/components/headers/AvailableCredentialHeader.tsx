import React from "react";
import { Text, View } from "react-native";

import { AlignItemCenter, FlexDirectionRow, fontBasic, JustifySpaceBetween, marginDynamic, Neutral, paddingDynamic } from "../../styles";
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
          ...fontBasic(18, "600", Neutral.neutral_10),
        }}
      >
        Available Credentials
      </Text>

      <NormalIconButton name="omega" size={16} color={Neutral.neutral_10} />
    </View>
  );
};

export default AvailableCredentialHeader;
