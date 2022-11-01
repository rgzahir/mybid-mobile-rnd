import React, { Fragment, FunctionComponent } from "react";
import { Text } from "react-native";

import {
  Accent,
  fontBasic,
  marginDynamic,
  POPPINS_REGULAR,
  Primary,
} from "../../styles";

export const TextItem_2: FunctionComponent<TTextItem_1Props> = ({
  subTitle,
  subText,
}) => {
  return (
    <Fragment>
      <Text
        style={{
          ...fontBasic(16, "600", Primary.primary_blue, 1, "normal", 20),
          fontFamily: POPPINS_REGULAR,
          ...marginDynamic(4, 0, 4),
        }}
      >
        {subTitle}
      </Text>
      <Text
        style={{
          ...fontBasic(10, "400", Accent.accent_blue_4, 1, "normal", 12),
          fontFamily: POPPINS_REGULAR,
          ...marginDynamic(0, 0, 16),
        }}
      >
        {subText}
      </Text>
    </Fragment>
  );
};

export default TextItem_2;
