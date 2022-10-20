import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { fontBasic, marginDynamic } from "../../styles";

type TBackButtonProps = {
  label: string;
  onPressHandler?: any;
  message?: string;
  color?: string;
};

export const BackButton: React.FC<TBackButtonProps> = ({
  label,
  onPressHandler,
  color,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...marginDynamic(16, 0, 16),
        }}
        onPress={onPressHandler}
        // onPress={setIndicator(!indicator)}
      >
        <Text
          style={{
            ...fontBasic(16, "600", color, 1, "normal", 24),
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
