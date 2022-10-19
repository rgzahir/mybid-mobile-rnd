import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
    Accent,
    backgroundColorDynamic,
    borderRadiusBottomDynamic,
    FlexOne,
    FlexRow,
    fontBasic,
    JustifySpaceBetween,
    marginDynamic,
    paddingDynamic,
    Primary,
    Secondary,
} from "../../styles";

type TCredentialCardFooterProps = {
  showQR?: boolean;
  setShowQR?: Function;
  data?: any;
};

export const CredentialCardFooter: React.FC<TCredentialCardFooterProps> = ({
  showQR,
  setShowQR,
  data,
}) => {
  const { lastUpdated } = data;

  return (
    <View
      style={{
        ...backgroundColorDynamic(Primary.primary_blue),
        ...FlexOne,
        ...borderRadiusBottomDynamic(16),
        ...JustifySpaceBetween,
        ...marginDynamic(0, -16, -24, -16),
        ...paddingDynamic(16, 16, 24, 16),
      }}
    >
      <View>
        <TouchableOpacity
          style={{
            ...FlexRow,
            ...JustifySpaceBetween,
          }}
          onPress={() => {
            console.log("Show QR invoked !");
            setShowQR(!showQR);
          }}
        >
          <View style={{ ...FlexRow, ...marginDynamic(0, 0, 4) }}>
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

          <Text style={{ color: Secondary.secondary_green }}>{"->"}</Text>
        </TouchableOpacity>
        <Text
          style={{
            ...fontBasic(12, "normal", Accent.accent_blue_6),
          }}
        >
          Data update on {lastUpdated}
        </Text>
      </View>
    </View>
  );
};

export default CredentialCardFooter;
