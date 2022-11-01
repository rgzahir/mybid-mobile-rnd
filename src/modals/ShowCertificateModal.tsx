import React, { FunctionComponent } from "react";
import { Image, StatusBar, Text, View } from "react-native";

import { BackButton } from "../components/buttons";
import {
  AlignItemCenter,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  FlexOne,
  fontBasic,
  JustifyFlexStart,
  marginDynamic,
  paddingDynamic,
  POPPINS_MEDIUM,
  White,
} from "../styles";

export const ShowCertificateModal: FunctionComponent<TModalProps> = ({
  indicator,
  setIndicator,
}) => {
  const CERTIFICATE_PREVIEW = require("../media/image 6.png");
  const updateShowPreviewModal = () => {
    setIndicator(!indicator);
  };

  return (
    <View
      style={{
        backgroundColor: "#181818",
        ...FlexOne,
        ...paddingDynamic(48, 16, 0, 16),
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...JustifyFlexStart,
        }}
      >
        <View>
          <BackButton
            fontColor={White}
            iconColor={White}
            label="Back"
            onPressHandler={updateShowPreviewModal}
          />
        </View>

        <Text
          style={{
            ...fontBasic(14, "500", White, 1, "normal", 16),
            fontFamily: POPPINS_MEDIUM,
            ...paddingDynamic(0, 0, 0, "24%"),
          }}
        >
          Preview
        </Text>
      </View>

      <View
        style={{
          ...borderRadiusDynamic(16),
          backgroundColor: White,
          ...marginDynamic("40%", "auto", 48, "auto"),
          ...paddingDynamic(32, 32, 32, 32),
        }}
      >
        <Image
          source={CERTIFICATE_PREVIEW}
          style={{ ...dimensionDynamic(200, 200) }}
        />
      </View>
    </View>
  );
};

export default ShowCertificateModal;
