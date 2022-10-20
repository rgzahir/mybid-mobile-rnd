import React from "react";
import { Image, Text, View } from "react-native";

import { BackButton } from "../components/buttons";
import { TextItem_3 } from "../components/TextItem";
import {
  Accent,
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexOne,
  FlexRow,
  fontBasic,
  JustifyFlexStart,
  marginDynamic,
  paddingDynamic,
  PositionAbsolute,
  Primary,
  White,
} from "../styles";

type TShowQRCodeModalProps = {
  indicator: boolean;
  setIndicator: any;
  pushNextModalFunction?: any;
  pushNextModalFunction_1?: any;
};

export const ShowQRCodeModal: React.FC<TShowQRCodeModalProps> = ({
  indicator,
  setIndicator,
}) => {
  const BG_SHOW_QR_MODAL = require("../media/BG_BLUE.png");
  const QR_CODE = require("../media/Group.png");
  const updateShowQRModal = () => {
    setIndicator(!indicator);
  };

  return (
    <View
      style={{
        ...FlexOne,
        ...backgroundColorDynamic(White),
        ...paddingDynamic(48, 16, 0, 16),
      }}
    >
      <Image
        source={BG_SHOW_QR_MODAL}
        style={{
          ...PositionAbsolute,
          //   ...borderRadiusDynamic(32),
          //   ...JustifySpaceCenter,
          //   ...AlignItemCenter,
          ...marginDynamic(-48, -48, -32, -48),
          ...dimensionDynamic("140%", "140%"),
        }}
        resizeMode={"cover"}
      />

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
            onPressHandler={updateShowQRModal}
            color={Primary.primary_blue}
          />
        </View>

        <Text
          style={{
            ...fontBasic(14, "500", Accent.accent_blue_1, 1, "normal", 16),
            ...paddingDynamic(0, 0, 0, "24%"),
          }}
        >
          QR Code
        </Text>
      </View>

      <View
        style={{
          // ...dimensionDynamic(150, 150),
          ...borderRadiusDynamic(16),
          ...marginDynamic("40%", "auto", 48, "auto"),
          ...paddingDynamic(32, 32, 32, 32),
          ...backgroundColorDynamic(White),
        }}
      >
        <Image source={QR_CODE} />
      </View>

      <TextItem_3
        subTitle="Scan This QR Code"
        subText="This code contains your graduation certificate"
      />
    </View>
  );
};

export default ShowQRCodeModal;
