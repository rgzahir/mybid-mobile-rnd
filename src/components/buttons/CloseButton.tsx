import React, { Fragment, FunctionComponent, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { POPPINS_REGULAR } from "../../styles";

export const CloseButton: FunctionComponent<TGeneralButtonProps> = ({
  fontColor,
  label,
  onPressHandler,
}) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={{ color: fontColor, fontFamily: POPPINS_REGULAR }}>
          {label}
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default CloseButton;
