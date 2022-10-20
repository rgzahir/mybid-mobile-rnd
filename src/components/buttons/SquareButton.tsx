import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  Primary,
  White,
} from "../../styles";

type TSquareButtonProps = {
  label: string;
  onPressHandler?: any;
  message?: string;
  icon?: "" | any;
};

export const SquareButton: React.FC<TSquareButtonProps> = ({
  label,
  icon,
  onPressHandler,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...paddingDynamic(16, 16, 16, 16),
          ...borderRadiusDynamic(16),
          ...backgroundColorDynamic(Primary.primary_blue),
          ...dimensionDynamic("auto", 160),
          ...AlignItemCenter,
        }}
        onPress={onPressHandler}
      >
        <Image source={icon} />
        <Text style={{ ...fontBasic(12, "500", White), ...marginDynamic(16) }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SquareButton;
