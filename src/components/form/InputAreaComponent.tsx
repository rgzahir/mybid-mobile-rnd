import React, { Fragment, FunctionComponent } from "react";
import { Text, TextInput } from "react-native";

import { borderRadiusDynamic, dimensionDynamic, fontBasic, marginDynamic, paddingDynamic, White } from "../../styles";

// import { IcoMoon } from "../../../resources/fonts/CustomIcon";
export const InputArea: FunctionComponent<TInputAreaProps> = ({
  label,
  iconName,
  iconSize,
  iconColor,
  ...props
}) => {
  return (
    <Fragment>
      <Text
        style={{
          ...fontBasic(16, "400", "#676D71", 0.8),
          ...marginDynamic(24, 0, 0, 16),
        }}
      >
        {label}
      </Text>

      <TextInput
        style={{
          ...borderRadiusDynamic(4),
          ...borderRadiusDynamic(8),
          backgroundColor: White,
          ...dimensionDynamic("auto", "90%"),
          ...marginDynamic(8, "auto", 0, "auto"),
          ...paddingDynamic(16, 8, 16, 24),
        }}
        {...props}
      />
    </Fragment>
  );
};

export default InputArea;
