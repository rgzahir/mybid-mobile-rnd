import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
  dimensionDynamic,
  FlexWrap,
  fontBasic,
  marginDynamic,
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
} from "../../styles";

export const TextItem_3: FunctionComponent<TTextItem_2Props> = ({
  color_1,
  color_2,
  subTitle,
  subText,
  width,
}) => {
  return (
    <View
      style={{
        ...dimensionDynamic("auto", width),
        ...AlignItemCenter,
        ...marginDynamic(0, "auto", 0, "auto"),
      }}
    >
      <Text
        style={{
          ...fontBasic(16, "600", color_1, 1, "normal", 20),
          fontFamily: POPPINS_SEMIBOLD,
          ...marginDynamic(4, 0, 4),
        }}
      >
        {subTitle}
      </Text>
      <Text
        style={{
          ...AlignItemCenter,
          ...FlexWrap,
          ...fontBasic(12, "400", color_2, 1, "normal", 14),
          fontFamily: POPPINS_REGULAR,
          ...marginDynamic(16, 0, 16, 0),
        }}
      >
        {subText}
      </Text>
    </View>
  );
};

export default TextItem_3;
