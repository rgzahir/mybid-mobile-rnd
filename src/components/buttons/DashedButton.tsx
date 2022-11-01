import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

import { checkFontColor } from "../../functions";
import {
  AlignItemCenter,
  borderMake,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  POPPINS_SEMIBOLD,
} from "../../styles";

export const DashedButton: FunctionComponent<TBackButtonProps> = ({
  fontColor,
  label,
  onPressHandler,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={{
          borderStyle: "dashed",
          ...AlignItemCenter,
          ...borderRadiusDynamic(32),
          ...borderMake(2, "#01396C"),
          ...dimensionDynamic("auto", "90%"),
          ...marginDynamic(16, "auto", 240, "auto"),
          ...paddingDynamic(8, 0, 16, 0),
        }}
        onPress={onPressHandler}
      >
        <Text
          style={{
            ...fontBasic(16, "600", checkFontColor(fontColor)),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 24,
          }}
        >
          <Text
            style={{
              ...fontBasic(16, "600", checkFontColor(fontColor)),
              fontFamily: POPPINS_SEMIBOLD,
              lineHeight: 24,
            }}
          >
            + {"\t"}{" "}
          </Text>
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default DashedButton;
