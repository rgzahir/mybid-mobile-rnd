import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  AlignItemCenter,
  FlexDirectionRow,
  fontBasic,
  POPPINS_SEMIBOLD,
} from "../../styles";
import NormalIconButton from "./NormalIconButton";

export const MoreDetailsButton: FunctionComponent<TMoreDetailsButtonProps> = ({
  disabledPress,
  color,
  label,
  name_icon,
  onPressHandler,
  size,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...FlexDirectionRow,
          ...AlignItemCenter,
        }}
        onPress={onPressHandler}
        disabled={disabledPress}
      >
        <Text
          style={{
            ...fontBasic(12, "600", color, 0.7),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 16,
            marginRight: 8,
          }}
        >
          {label}
        </Text>
        <NormalIconButton
          name={name_icon}
          disabledPress={true}
          size={size}
          color={"black"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MoreDetailsButton;
