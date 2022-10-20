import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderMake,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  White,
} from "../../styles";

type TGeneralButtonProps = {
  label: string;
  onPressHandler?: any;
  message?: string;
  marginTop?: string | number;
};

export const GeneralButton: React.FC<TGeneralButtonProps> = ({
  label,
  onPressHandler,
  marginTop,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...backgroundColorDynamic("#01396C"),
          ...marginDynamic(marginTop, "auto", 0, "auto"),
          ...borderRadiusDynamic(32),
          ...borderMake(2, "#01396C"),
          ...dimensionDynamic("auto", "90%"),
          ...paddingDynamic(12, 0, 12, 0),
          ...AlignItemCenter,
        }}
        onPress={() => {
          onPressHandler();
        }}
      >
        <Text style={{ ...fontBasic(20, "500", White) }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeneralButton;
