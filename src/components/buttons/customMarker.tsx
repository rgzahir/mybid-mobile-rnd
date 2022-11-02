import React from "react";
import { View } from "react-native";

import { FlexOne, marginDynamic, Primary, White } from "../../styles";
import NormalIconButton from "./NormalIconButton";

export const CustomMarker = () => {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        backgroundColor: Primary.primary_blue,
        borderRadius: 60,
        marginLeft: 56,
        marginTop: 58,
      }}
    >
      <View
        style={{
          ...FlexOne,
          ...marginDynamic(10, "auto", "auto", "auto"),
        }}
      >
        <NormalIconButton
          disabledPress={true}
          color={White}
          name="Brand-logo-132"
          size={32}
        />
      </View>
    </View>
  );
};

export default CustomMarker;
