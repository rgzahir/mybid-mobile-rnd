import React, { Fragment, FunctionComponent, useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export const CloseButton: FunctionComponent<TGeneralButtonProps> = ({
  fontColor,
  label,
  onPressHandler,
}) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPressHandler}>
        <Text style={{ color: fontColor }}>{label}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default CloseButton;
