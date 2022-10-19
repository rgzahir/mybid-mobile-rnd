import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
    AlignItemCenter,
    backgroundColorDynamic,
    borderMake,
    borderRadiusDynamic,
    dimensionDynamic,
    fontBasic,
    marginDynamic,
    paddingDynamic,
    White,
} from "../../styles";

type TGeneralButtonProps = {
  onPresshandler?: Any;
};

export const GeneralButton: React.FC<TGeneralButtonProps> = ({
  onPresshandler,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...backgroundColorDynamic("#01396C"),
          ...marginDynamic("60%", "auto", 0, "auto"),
          ...borderRadiusDynamic(32),
          ...borderMake(2, "#01396C"),
          ...dimensionDynamic("auto", "90%"),
          ...paddingDynamic(16, 0, 16, 0),
          ...AlignItemCenter,
        }}
        onPress={() => {
          console.log("Go To Dashboard");
          onPresshandler();
        }}
      >
        <Text style={{ ...fontBasic(20, "500", White) }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GeneralButton;
