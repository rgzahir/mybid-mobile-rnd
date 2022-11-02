import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";

import { NormalIconButton } from "../components/buttons";
import {
  AlignItemCenter,
  FlexOne,
  JustifySpaceCenter,
  POPPINS_MEDIUM,
  White,
} from "../styles";

export const ScanCredentialPageModal: FunctionComponent<TBaseModalProps> = ({
  pushNextModalFunction,
}) => {
  return (
    <View
      style={{
        // ...marginDynamic("auto", "auto", "auto", "auto"),
        ...FlexOne,
        ...JustifySpaceCenter,
        ...AlignItemCenter,
        backgroundColor: White,
      }}
    >
      <Text style={{ fontFamily: POPPINS_MEDIUM, marginBottom: 24 }}>
        QuickScan Credential Modal
      </Text>
      <NormalIconButton
        name="cross"
        size={24}
        onPressHandler={() => {
          //   setIndicator(!indicator);
          pushNextModalFunction();
        }}
      />
    </View>
  );
};

export default ScanCredentialPageModal;
