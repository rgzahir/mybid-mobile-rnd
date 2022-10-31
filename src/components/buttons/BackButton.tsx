import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

import { checkFontColor } from "../../functions/checkFontColor";
import { IcoMoon } from "../../icons/CustomIcon";
import { AlignItemCenter, FlexDirectionRow, fontBasic, marginDynamic } from "../../styles";

export const BackButton: FunctionComponent<TBackButtonProps> = ({
  fontColor,
  iconColor,
  label,
  onPressHandler,
}) => {
  const checkIconColor = () => {
    if (iconColor) {
      return iconColor;
    }

    return "black";
  };

  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...FlexDirectionRow,
          ...AlignItemCenter,
          ...marginDynamic(16, 0, 16),
        }}
        onPress={onPressHandler}
      >
        <IcoMoon name="arrow-left2" size={16} color={checkIconColor()} />
        <Text
          style={{
            ...fontBasic(16, "600", checkFontColor(fontColor), 1, "normal", 24),
            ...marginDynamic(0, 0, 0, 8),
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default BackButton;
