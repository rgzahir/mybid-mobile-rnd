import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StatusBar, Text, View } from "react-native";

import { GeneralButton_2, NormalIconButton } from "../components/buttons";
import { IcoMoon } from "../icons/CustomIcon";
import {
  dimensionDynamic,
  FlexDirectionRow,
  FlexOne,
  FlexWrap,
  fontBasic,
  JustifySpaceCenter,
  JustifySpaceEvenly,
  marginDynamic,
  paddingDynamic,
  POPPINS_SEMIBOLD,
  PositionAbsolute,
  White,
} from "../styles";

export const LoginPage = () => {
  const BACKGROUND_IMAGE = "../media/initialize_app_bg.png";
  const ILLUSTRATION_IMAGE = "../media/initalize_Illustration.png";
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
      <StatusBar barStyle={"default"} />
      <View
        style={{
          ...JustifySpaceCenter,
          ...PositionAbsolute,
          ...dimensionDynamic(1, 1),
        }}
      >
        <Image source={require(BACKGROUND_IMAGE)} />
      </View>

      <View
        style={{ ...FlexDirectionRow, ...FlexWrap, ...marginDynamic("30%") }}
      >
        <Text
          style={{
            ...fontBasic(24, "600", White),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 32,
          }}
        >
          Managing your credential {"\n"}is easy with
          <Text
            style={{
              ...fontBasic(24, "600", "#02C9A5"),
              fontFamily: POPPINS_SEMIBOLD,
              lineHeight: 32,
            }}
          >
            {" "}
            myBID
          </Text>
        </Text>
      </View>

      <View>
        <Image
          source={require(ILLUSTRATION_IMAGE)}
          style={{
            height: 250,
            width: 250,
            ...marginDynamic("20%", "auto", 0, "auto"),
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IcoMoon name="eye" size={24} color="white" />
        <IcoMoon name="make-group" size={24} color="white" />
        <IcoMoon name="strikethrough" size={24} color="white" />
        <NormalIconButton
          color="white"
          disabledPress={false}
          name="eye"
          onPressHandler={() => {}}
          size={24}
        />
        <NormalIconButton
          color="white"
          disabledPress={false}
          name="mail2"
          onPressHandler={() => {}}
          size={24}
        />
        <NormalIconButton
          color="white"
          disabledPress={true}
          name="make-group"
          onPressHandler={() => {}}
          size={24}
        />
      </View>

      <View style={{ ...marginDynamic("40%") }}>
        <View
          style={{
            ...FlexDirectionRow,
            ...JustifySpaceEvenly,
            ...marginDynamic(0, 0, "8%"),
          }}
        >
          <GeneralButton_2
            label="Sign In"
            onPressHandler={GoToLoginDetail}
            fontColor={White}
          />

          <GeneralButton_2
            backgroundColor={White}
            fontColor={"#01396C"}
            label="Sign Up"
            onPressHandler={() => {}}
          />
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
