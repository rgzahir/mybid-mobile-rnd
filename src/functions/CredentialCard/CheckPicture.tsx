import React from "react";
import { Image, View } from "react-native";

import {
  borderRadiusDynamic,
  marginDynamic,
  SquareBox80px,
  White,
} from "../../styles";

export const CheckPicture = (profilePicture: any) => {
  if (profilePicture) {
    return (
      <View
        style={{
          ...marginDynamic(0, 16),
        }}
      >
        <Image source={profilePicture} />
      </View>
    );
  } else {
    return (
      <View
        style={{
          backgroundColor: White,
          ...SquareBox80px,
          ...borderRadiusDynamic(16),
          ...marginDynamic(0, "10%"),
        }}
      ></View>
    );
  }
};

export default CheckPicture;
