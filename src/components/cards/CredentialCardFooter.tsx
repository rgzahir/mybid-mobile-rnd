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
  POPPINS_REGULAR,
  Primary,
  Secondary,
} from "../../styles";
import { NormalIconButton } from "../buttons";

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
          <View style={{ ...marginDynamic(0, 0, 12), ...FlexDirectionRow }}>
            <NormalIconButton
              name="map"
              color={Secondary.secondary_green}
              size={16}
              disabledPress={true}
            />
            <Text
              style={{
                ...fontBasic(12, "bold", Secondary.secondary_green),
                fontFamily: POPPINS_REGULAR,
                lineHeight: 16,
              }}
            >
              {"    "}Show QR Code
            </Text>
          </View>
        </TouchableOpacity>

        <Text
          style={{
            ...fontBasic(10, "400", Accent.accent_blue_6),
            fontFamily: POPPINS_REGULAR,
            lineHeight: 12,
          }}
        >
          Data update on {lastUpdated}
        </Text>
      </View>

      <NormalIconButton
        name="arrow-right2"
        size={24}
        color={Secondary.secondary_green}
        onPressHandler={updateShowDetailModal}
        disabledPress={false}
      />
    </View>
  );
};

export default CredentialCardFooter;
