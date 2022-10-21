import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";

import { BackButton } from "../components/buttons";
import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  FlexOne,
  fontBasic,
  JustifyFlexStart,
  marginDynamic,
  paddingDynamic,
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
        ...FlexOne,
        ...backgroundColorDynamic("#181818"),
        ...paddingDynamic(48, 16, 0, 16),
      }}
    >
      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...JustifyFlexStart,
        }}
      >
        <View>
          <BackButton
            label="< Back"
            onPressHandler={updateShowPreviewModal}
            fontColor="white"
          />
        </View>

        <Text
          style={{
            ...fontBasic(14, "500", White, 1, "normal", 16),
            ...paddingDynamic(0, 0, 0, "24%"),
          }}
        >
          Preview
        </Text>
      </View>

      <View
        style={{
          ...borderRadiusDynamic(16),
          ...backgroundColorDynamic(White),
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
