import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { IcoMoon } from "../icons/CustomIcon";
import {
  AlignItemCenter,
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
  White,
} from "../styles";

const Background_img = "../media/initialize_app_bg.png";
const Illustration_img = "../media/initalize_Illustration.png";

export const LoginPage = () => {
  const checkNav = useNavigation();

  const GoToLoginDetail = () => {
    checkNav.navigate("LoginScreenDetail");
    console.log("GoToLoginDetail", checkNav);
  };

  return (
    <View
      style={{
        backgroundColor: "#002E94",
        ...FlexOne,
        ...paddingDynamic("10%", 24, 24, 24),
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
            height: 250,
            width: 250,
            ...marginDynamic("20%", "auto", 0, "auto"),
          }}
        />
      </View>
      <IcoMoon name="eye" size={40} color="white" />

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
              backgroundColor: White,
              ...paddingDynamic(8, 0, 8),
              ...borderMake(2, White),
              ...borderRadiusDynamic(50),
              ...dimensionDynamic("auto", "45%"),
            }}
            onPress={() => {
              // console.log(CustomIcon);
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
