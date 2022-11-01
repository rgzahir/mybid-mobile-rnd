import React, { Fragment, FunctionComponent } from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import { checkBackgroundColor } from "../../functions";
import { checkFontColor } from "../../functions/checkFontColor";
import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  POPPINS_REGULAR,
} from "../../styles";

export const SquareButton: FunctionComponent<TSquareButtonProps> = ({
  label,
  icon,
  onPressHandler,
  backgroundColor,
  fontColor,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...AlignItemCenter,
          ...borderRadiusDynamic(16),
          ...backgroundColorDynamic(checkBackgroundColor(backgroundColor)),
          ...dimensionDynamic("auto", 160),
          ...paddingDynamic(16, 16, 16, 16),
        }}
        onPress={onPressHandler}
      >
        <Image source={icon} />
        <Text
          style={{
            ...fontBasic(12, "500", checkFontColor(fontColor)),
            fontFamily: POPPINS_REGULAR,
            lineHeight: 16,
            ...marginDynamic(16),
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default SquareButton;
