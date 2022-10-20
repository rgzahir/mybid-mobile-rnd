import React from "react";
import { Text, View } from "react-native";

import { Accent, fontBasic, marginDynamic, Primary } from "../../styles";

type TTextItemProps = {
  subTitle: string;
  subText: string;
};

export const TextItem_2: React.FC<TTextItemProps> = ({ subTitle, subText }) => {
  return (
    <View>
      <Text
        style={{
          ...fontBasic(16, "600", Primary.primary_blue, 1, "normal", 20),
          ...marginDynamic(4, 0, 4),
        }}
      >
        {subTitle}
      </Text>
      <Text
        style={{
          ...fontBasic(10, "400", Accent.accent_blue_4, 1, "normal", 12),
          ...marginDynamic(0, 0, 16),
        }}
      >
        {subText}
      </Text>
    </View>
  );
};

export default TextItem_2;
