import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  Accent,
  AlignItemCenter,
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
  setShowQR?: any;
  data?: any;
  showDetailModal: boolean;
  setShowDetailModal: any;
  showQRModal: boolean;
  setShowQRModal: any;
};

export const CredentialCardFooter: React.FC<TCredentialCardFooterProps> = ({
  showQR,
  setShowQR,
  data,
  showDetailModal,
  setShowDetailModal,
  showQRModal,
  setShowQRModal,
}) => {
  const { lastUpdated } = data;
  const updateShowQR = () => {
    setShowQR(!showQR);
  };

  const updateShowQRModal = () => {
    setShowQRModal(!showQRModal);
  };

  const updateShowDetailModal = () => {
    setShowDetailModal(!showDetailModal);
  };

  return (
    <View
      style={{
        ...FlexOne,
        ...FlexRow,
        ...JustifySpaceBetween,
        ...AlignItemCenter,
        ...backgroundColorDynamic(Primary.primary_blue),
        ...borderRadiusBottomDynamic(16),
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
          onPress={updateShowQR}
        >
          <View style={{ ...marginDynamic(0, 0, 4), ...FlexRow }}>
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

      <TouchableOpacity
        onPress={updateShowDetailModal}
        // onPress={() => {
        //   console.log(
        //     "show detail",
        //     showDetailModal,
        //     setShowDetailModal,
        //     updateModal
        //   );
        // }}
      >
        <Text style={{ color: Secondary.secondary_green }}>{">>>"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CredentialCardFooter;
