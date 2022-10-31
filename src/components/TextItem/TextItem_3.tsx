import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

import { AlignItemCenter, dimensionDynamic, FlexWrap, fontBasic, marginDynamic, textAlignDynamic } from "../../styles";

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
          ...marginDynamic(4, 0, 4),
        }}
      >
        {subTitle}
      </Text>
      <Text
        style={{
          ...textAlignDynamic("center"),
          ...FlexWrap,
          ...fontBasic(12, "400", color_2, 1, "normal", 14),
          ...marginDynamic(16, 0, 16, 0),
        }}
      >
        {subText}
      </Text>
    </View>
  );
};

export default TextItem_3;
