import React from "react";
import { Text, View } from "react-native";

import { AlignItemCenter, dimensionDynamic, FlexWrap, fontBasic, marginDynamic } from "../../styles";

type TTextItemProps = {
  subTitle: string;
  subText: string;
  color_1?: string;
  color_2?: string;
  width?: string | number;
};

export const TextItem_3: React.FC<TTextItemProps> = ({
  subTitle,
  subText,
  color_1,
  color_2,
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
          ...fontBasic(12, "400", color_2, 1, "normal", 14),
          ...marginDynamic(16, 0, 16, 0),
          textAlign: "center",
          ...FlexWrap,
        }}
      >
        {subText}
      </Text>
    </View>
  );
};

export default TextItem_3;
