import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  Accent,
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusBottomDynamic,
  FlexDirectionRow,
  FlexOne,
  fontBasic,
  JustifySpaceBetween,
  marginDynamic,
  paddingDynamic,
  Primary,
  Secondary,
} from "../../styles";
import { BackButton } from "../buttons";

export const CredentialCardFooter: FunctionComponent<
  TCredentialCardFooterProps
> = ({ data, showQR, setShowQR, showDetailModal, setShowDetailModal }) => {
  const { lastUpdated } = data;
  const updateShowQR = () => {
    setShowQR(!showQR);
  };

  const updateShowDetailModal = () => {
    setShowDetailModal(!showDetailModal);
  };

  return (
    <View
      style={{
        ...AlignItemCenter,
        ...FlexOne,
        ...FlexDirectionRow,
        ...JustifySpaceBetween,
        ...backgroundColorDynamic(Primary.primary_blue),
        ...borderRadiusBottomDynamic(16),
        ...marginDynamic(0, -16, -24, -16),
        ...paddingDynamic(16, 16, 24, 16),
      }}
    >
      <View>
        <TouchableOpacity
          style={{
            ...FlexDirectionRow,
            ...JustifySpaceBetween,
          }}
          onPress={updateShowQR}
        >
          <View style={{ ...marginDynamic(0, 0, 4), ...FlexDirectionRow }}>
            <Text
              style={{
                ...fontBasic(14, "bold", Secondary.secondary_green),
              }}
            >
              X
            </Text>
            <Text
              style={{
                ...fontBasic(14, "bold", Secondary.secondary_green),
              }}
            >
              {"  "}Show QR Code
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            ...fontBasic(12, "normal", Accent.accent_blue_6),
          }}
        >
          Data update on {lastUpdated}
        </Text>
      </View>

      <BackButton
        fontColor={Secondary.secondary_green}
        label=">>>"
        onPressHandler={updateShowDetailModal}
      />
    </View>
  );
};

export default CredentialCardFooter;
