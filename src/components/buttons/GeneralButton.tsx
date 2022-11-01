import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

import { checkBackgroundColor } from "../../functions";
import { checkFontColor } from "../../functions/checkFontColor";
import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderMake,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  POPPINS_SEMIBOLD,
} from "../../styles";

export const GeneralButton: FunctionComponent<TGeneralButtonProps> = ({
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
          ...backgroundColorDynamic(checkBackgroundColor(backgroundColor)),
          ...borderRadiusDynamic(32),
          ...borderMake(2, "#01396C"),
          ...dimensionDynamic("auto", "90%"),
          ...paddingDynamic(12, 0, 12, 0),
          ...marginDynamic(marginTop, "auto", 0, "auto"),
        }}
        onPress={() => {
          onPressHandler();
        }}
      >
        <Text
          style={{
            ...fontBasic(16, "600", checkFontColor(fontColor)),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 24,
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default GeneralButton;
