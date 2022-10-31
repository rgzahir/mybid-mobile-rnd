import React, { Fragment, FunctionComponent } from "react";
import { Text, TextInput, View } from "react-native";

import {
  AlignItemCenter,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  White,
} from "../../styles";

export const InputArea: FunctionComponent<TInputAreaProps> = ({
  icon,
  label,
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

      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...borderRadiusDynamic(4),
          ...borderRadiusDynamic(8),
          backgroundColor: White,
          ...dimensionDynamic("auto", "90%"),
          ...marginDynamic(8, "auto", 0, "auto"),
          ...paddingDynamic(16, 8, 16, 24),
        }}
      >
        {icon ? <View>{icon()}</View> : null}

        <TextInput
          style={{
            ...paddingDynamic(0, 0, 0, 16),
          }}
          {...props}
        />
      </View>
    </Fragment>
  );
};

export default InputArea;
