import React from "react";
import { Image, Text, View } from "react-native";

import { BackButton } from "../components/buttons";
import {
    AlignItemCenter,
    backgroundColorDynamic,
    borderRadiusDynamic,
    FlexOne,
    FlexRow,
    fontBasic,
    JustifyFlexStart,
    marginDynamic,
    paddingDynamic,
    White,
} from "../styles";

type TShowCertificateModalProps = {
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

export const ShowCertificateModal: React.FC<TShowCertificateModalProps> = ({
  indicator,
  setIndicator,
}) => {
  const QR_CODE = require("../media/Group.png");
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
          ...FlexRow,
          ...JustifyFlexStart,
          ...AlignItemCenter,
        }}
      >
        <View>
          <BackButton
            label="< Back"
            onPressHandler={updateShowPreviewModal}
            color="white"
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
          ...marginDynamic("40%", "auto", 48, "auto"),
          ...paddingDynamic(32, 32, 32, 32),
          ...backgroundColorDynamic(White),
        }}
      >
        <Image source={QR_CODE} />
      </View>
    </View>
  );
};

export default ShowCertificateModal;
