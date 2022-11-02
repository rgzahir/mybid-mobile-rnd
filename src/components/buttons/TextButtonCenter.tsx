import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

import {
  fontBasic,
  marginDynamic,
  POPPINS_SEMIBOLD,
  Primary,
} from "../../styles";

export const TextButtonCenter: FunctionComponent<TTextButtonCenterProps> = ({
  label,
  onPressHandler,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...marginDynamic(0, "auto", 0, "auto"),
          width: "100%",
          // backgroundColor: "black",
        }}
        onPress={onPressHandler}
      >
        <Text
          style={{
            alignSelf: "center",
            ...fontBasic(16, "600", Primary.primary_blue, 1, "normal", 24),
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

export default TextButtonCenter;
