import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";

import { BackButton } from "../components/buttons";
import { TextItem_3 } from "../components/TextItem";
import {
  Accent,
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
  PositionAbsolute,
  Primary,
  White,
} from "../styles";

export const ShowQRCodeModal: FunctionComponent<TModalProps> = ({
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
          ...marginDynamic(-48, -48, -32, -48),
          ...dimensionDynamic("140%", "140%"),
        }}
        resizeMode={"cover"}
      />

      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...JustifyFlexStart,
        }}
      >
        <View>
          <BackButton
            fontColor={Primary.primary_blue}
            label="< Back"
            onPressHandler={updateShowQRModal}
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
          ...borderRadiusDynamic(16),
          ...backgroundColorDynamic(White),
          ...marginDynamic("40%", "auto", 48, "auto"),
          ...paddingDynamic(32, 32, 32, 32),
        }}
      >
        <Image source={QR_CODE} />
      </View>

      <TextItem_3
        color_1={White}
        color_2={White}
        subTitle="Scan This QR Code"
        subText="This code contains your graduation certificate"
        width="60%"
      />
    </View>
  );
};

export default ShowQRCodeModal;
