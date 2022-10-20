import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { fontBasic, marginDynamic, Primary } from "../../styles";

type TSTextButtonCenterProps = {
  label: string;
  onPressHandler?: any;
  message?: string;
  icon?: "" | any;
};

export const TextButtonCenter: React.FC<TSTextButtonCenterProps> = ({
  label,
  icon,
  onPressHandler,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...marginDynamic(16, "auto", 0, "auto"),
        }}
        onPress={onPressHandler}
      >
        <Text
          style={{
            ...fontBasic(16, "600", Primary.primary_blue, 1, "normal", 24),
            alignSelf: "center",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextButtonCenter;
