import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity } from "react-native";

import { checkFontColor } from "../../functions/checkFontColor";
import { fontBasic, marginDynamic } from "../../styles";

export const BackButton: FunctionComponent<TBackButtonProps> = ({
  fontColor,
  label,
  onPressHandler,
}) => {
  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...marginDynamic(16, 0, 16),
        }}
        onPress={onPressHandler}
      >
        <Text
          style={{
            ...fontBasic(16, "600", checkFontColor(fontColor), 1, "normal", 24),
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default BackButton;
