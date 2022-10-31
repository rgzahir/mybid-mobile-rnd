import React, { Fragment, FunctionComponent } from "react";
import { TouchableOpacity } from "react-native";

import { IcoMoon } from "../../icons/CustomIcon";

export const NormalIconButton: FunctionComponent<TIconButtonProps> = ({
  disabledPress,
  color,
  name,
  onPressHandler,
  size,
}) => {
  return (
    <Fragment>
      <TouchableOpacity onPress={onPressHandler} disabled={disabledPress}>
        <IcoMoon name={name} size={size} color={color} />
      </TouchableOpacity>
    </Fragment>
  );
};

export default NormalIconButton;
