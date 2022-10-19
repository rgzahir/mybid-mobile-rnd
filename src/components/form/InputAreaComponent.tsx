import React from "react";
import { Text, TextInput, View } from "react-native";

import {
    backgroundColorDynamic,
    borderRadiusDynamic,
    dimensionDynamic,
    fontBasic,
    marginDynamic,
    paddingDynamic,
    White,
} from "../../styles";

type TInputAreaProps = {
  label?: string;
  placeholder?: string;
  onChangeText?: Function;
  onBlur?: Function;
  value?: string;
  secureTextEntry?: boolean;
};

export const InputArea: React.FC<TInputAreaProps> = ({ label, ...props }) => {
  return (
    <View>
      <Text
        style={{
          ...fontBasic(16, "400", "#676D71", 0.8),
          ...marginDynamic(24, 0, 0, 16),
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          ...borderRadiusDynamic(4),
          ...dimensionDynamic("auto", "90%"),
          ...marginDynamic(8, "auto", 0, "auto"),
          ...borderRadiusDynamic(8),
          ...paddingDynamic(16, 8, 16, 24),
          ...backgroundColorDynamic(White),
        }}
        {...props}
      />
    </View>
  );
};

export default InputArea;
