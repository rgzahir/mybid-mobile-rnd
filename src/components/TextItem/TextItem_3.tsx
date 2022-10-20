import React from "react";
import { Text, View } from "react-native";

import { AlignItemCenter, dimensionDynamic, FlexWrap, fontBasic, marginDynamic, White } from "../../styles";

type TTextItemProps = {
  subTitle: string;
  subText: string;
};

export const TextItem_3: React.FC<TTextItemProps> = ({ subTitle, subText }) => {
  return (
    <View
      style={{
        ...dimensionDynamic("auto", "60%"),
        ...AlignItemCenter,
        ...marginDynamic(0, "auto", 0, "auto"),
      }}
    >
      <Text
        style={{
          ...fontBasic(16, "600", White, 1, "normal", 20),
          ...marginDynamic(4, 0, 4),
        }}
      >
        {subTitle}
      </Text>
      <Text
        style={{
          ...fontBasic(12, "400", White, 1, "normal", 14),
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
