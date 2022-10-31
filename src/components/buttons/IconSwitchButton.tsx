import React, { Fragment, FunctionComponent, useState } from "react";
import { TouchableOpacity } from "react-native";

import { IcoMoon } from "../../icons/CustomIcon";

export const IconSwitchButton: FunctionComponent<TIconSwitchButtonProps> = ({
  disabledPress,
  color,
  name,
  name_2,
  onPressHandler,
  size,
  state,
}) => {
  return (
    <Fragment>
      {state ? (
        <TouchableOpacity onPress={onPressHandler} disabled={disabledPress}>
          <IcoMoon name={name} size={size} color={color} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressHandler} disabled={disabledPress}>
          <IcoMoon name={name_2} size={size} color={color} />
        </TouchableOpacity>
      )}
    </Fragment>
  );
};

export default IconSwitchButton;
