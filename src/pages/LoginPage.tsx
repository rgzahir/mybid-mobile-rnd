import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderMake,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  FlexOne,
  FlexWrap,
  fontBasic,
  JustifySpaceCenter,
  JustifySpaceEvenly,
  marginDynamic,
  paddingDynamic,
  PositionAbsolute,
  SquareBox250px,
  White,
} from "../styles";

const Background_img = "../media/initialize_app_bg.png";
const Illustration_img = "../media/initalize_Illustration.png";

export const LoginPage = ({ navigation }) => {
  const GoToLoginDetail = () => {
    navigation.navigate("LoginScreenStack");
    console.log("GoToLoginDetail", navigation);
  };

  return (
    <View
      style={{
        ...FlexOne,
        ...paddingDynamic("10%", 24, 24, 24),
        ...backgroundColorDynamic("#002E94"),
      }}
    >
      <View
        style={{
          ...JustifySpaceCenter,
          ...PositionAbsolute,
          ...dimensionDynamic(1, 1),
        }}
      >
        <Image source={require(Background_img)} />
      </View>

      <View
        style={{ ...FlexDirectionRow, ...FlexWrap, ...marginDynamic("30%") }}
      >
        <Text style={{ ...fontBasic(28, "600", White) }}>
          Managing your credential {"\n"}is easy with
          <Text style={{ ...fontBasic(28, "bold", "#02C9A5") }}> myBID</Text>
        </Text>
      </View>
      <View>
        <Image
          source={require(Illustration_img)}
          style={{
            ...SquareBox250px,
            ...marginDynamic("20%", "auto", 0, "auto"),
          }}
        />
      </View>
      <View style={{ ...marginDynamic("40%") }}>
        <View
          style={{
            ...FlexDirectionRow,
            ...JustifySpaceEvenly,
            ...marginDynamic(0, 0, "15%"),
          }}
        >
          <TouchableOpacity
            style={{
              ...AlignItemCenter,
              ...paddingDynamic(8, 0, 8),
              ...borderMake(2, White),
              ...borderRadiusDynamic(50),
              ...dimensionDynamic("auto", "45%"),
            }}
            onPress={GoToLoginDetail}
          >
            <Text style={{ ...fontBasic(20, "500", White) }}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...AlignItemCenter,
              ...paddingDynamic(8, 0, 8),
              ...borderMake(2, White),
              ...borderRadiusDynamic(50),
              ...dimensionDynamic("auto", "45%"),
              ...backgroundColorDynamic(White),
            }}
          >
            <Text style={{ ...fontBasic(20, "500", "#01396C") }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...fontBasic(12, "normal", White, 0.7),
            ...marginDynamic(0, "auto", 0, "auto"),
          }}
        >
          By continuing you accept the Terms of Use
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;
