import React, { Fragment, FunctionComponent } from "react";
import { Text, TextInput, View } from "react-native";

import {
  AlignItemCenter,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  fontBasic,
  marginDynamic,
  Neutral,
  paddingDynamic,
  POPPINS_REGULAR,
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
          ...fontBasic(14, "400", Neutral.neutral_6, 0.8),
          lineHeight: 16,
          fontFamily: POPPINS_REGULAR,
          ...marginDynamic(24, 0, 0, 16),
        }}
      >
        {label}
      </Text>

      <View
        style={{
          ...AlignItemCenter,
          ...borderRadiusDynamic(4),
          ...borderRadiusDynamic(8),
          backgroundColor: White,
          ...dimensionDynamic("auto", "90%"),
          ...FlexDirectionRow,
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
