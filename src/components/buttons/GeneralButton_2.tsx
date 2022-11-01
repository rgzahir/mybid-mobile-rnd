import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

import {
  AlignItemCenter,
  borderMake,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  paddingDynamic,
  POPPINS_SEMIBOLD,
  White,
} from "../../styles";

export const GeneralButton_2: FunctionComponent<TGeneralButtonProps> = ({
  backgroundColor,
  fontColor,
  label,
  marginTop,
  onPressHandler,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...AlignItemCenter,
          backgroundColor: backgroundColor,
          ...paddingDynamic(16, 0, 16),
          ...borderMake(2, White),
          ...borderRadiusDynamic(50),
          ...dimensionDynamic("auto", "45%"),
        }}
        onPress={onPressHandler}
      >
        <Text
          style={{
            ...fontBasic(16, "600", fontColor),
            lineHeight: 24,
            fontFamily: POPPINS_SEMIBOLD,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default GeneralButton_2;
