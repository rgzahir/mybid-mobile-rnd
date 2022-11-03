// In App.js in a new project
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { NormalIconButton } from "../components/buttons";
import { CredentialPage, DiscoverPage, ScanCredentialPage } from "../pages";
import {
  Accent,
  AlignItemCenter,
  FlexOne,
  JustifySpaceCenter,
  marginDynamic,
  POPPINS_MEDIUM,
  Primary,
  ShadowLight,
  White,
} from "../styles";

const { Navigator, Screen } = createBottomTabNavigator();

const DiscoverScreen = () => {
  return <DiscoverPage />;
};

const CredentialScreen = () => {
  return <CredentialPage />;
};

const ScanCredentialScreen = () => {
  return <ScanCredentialPage />;
};

const FinanceScreen = () => {
  return (
    <View
      style={{
        ...FlexOne,
        ...AlignItemCenter,
        ...JustifySpaceCenter,
      }}
    >
      <TouchableOpacity>
        <Text style={{ fontFamily: POPPINS_MEDIUM }}>FINANCE SCREEN</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProfileScreen = () => {
  const checkNav = useNavigation();
  const logOutHandler = () => {
    checkNav.navigate("LoginScreen");
    console.log(checkNav);
  };
  return (
    <View style={{ ...marginDynamic("auto", "auto", "auto", "auto") }}>
      <TouchableOpacity onPress={logOutHandler}>
        <Text style={{ fontFamily: POPPINS_MEDIUM }}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomNav = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Primary.primary_blue,
        tabBarInactiveTintColor: Accent.accent_blue_2,
        tabBarAllowFontScaling: true,
      }}
      // tabBar={(props) => <TabBar props={props} />}
      initialRouteName={"Discover"}
    >
      <Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <NormalIconButton
                  color={Primary.primary_blue}
                  disabledPress={true}
                  name="safari"
                  size={24}
                />
                <Image
                  source={require("../media/Polygon_1.png")}
                  // resizeMode="contain"
                  style={{
                    marginLeft: -22,
                    marginTop: 54,
                    position: "absolute",
                  }}
                />
              </View>
            ) : (
              <NormalIconButton
                color={Accent.accent_blue_2}
                disabledPress={true}
                name="safari"
                size={24}
              />
            ),
        }}
      />

      <Screen
        name="Credentials"
        component={CredentialScreen}
        options={{
          tabBarLabel: "Credentials",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <NormalIconButton
                  color={Primary.primary_blue}
                  disabledPress={true}
                  name="folder-open"
                  size={24}
                />
                <Image
                  source={require("../media/Polygon_1.png")}
                  // resizeMode="contain"
                  style={{
                    marginLeft: -22,
                    marginTop: 54,
                    position: "absolute",
                  }}
                />
              </View>
            ) : (
              <NormalIconButton
                color={Accent.accent_blue_2}
                disabledPress={true}
                name="folder-open"
                size={24}
              />
            ),
        }}
      />

      <Screen
        name="ScanCredential"
        component={ScanCredentialScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <View
              style={{
                position: "absolute",
                bottom: -8, // space from bottombar
                backgroundColor: Primary.primary_blue,
                height: 68,
                width: 68,
                borderRadius: 68,
                padding: 8,
                justifyContent: "center",
                alignItems: "center",
                ...ShadowLight,
              }}
            >
              <NormalIconButton
                color={White}
                disabledPress={true}
                name="qrcode"
                size={40}
              />
            </View>
          ),
        }}
      />

      <Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          tabBarBadge: 8,
          tabBarLabel: "Finance",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <NormalIconButton
                  color={Primary.primary_blue}
                  disabledPress={true}
                  name="credit-card"
                  size={24}
                />
                <Image
                  source={require("../media/Polygon_1.png")}
                  // resizeMode="contain"
                  style={{
                    marginLeft: -22,
                    marginTop: 54,
                    position: "absolute",
                  }}
                />
              </View>
            ) : (
              <NormalIconButton
                color={Accent.accent_blue_2}
                disabledPress={true}
                name="credit-card"
                size={24}
              />
            ),
        }}
      />

      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View>
                <NormalIconButton
                  color={Primary.primary_blue}
                  disabledPress={true}
                  name="user"
                  size={24}
                />
                <Image
                  source={require("../media/Polygon_1.png")}
                  // resizeMode="contain"
                  style={{
                    marginLeft: -22,
                    marginTop: 54,
                    position: "absolute",
                  }}
                />
              </View>
            ) : (
              <NormalIconButton
                color={Accent.accent_blue_2}
                disabledPress={true}
                name="user"
                size={24}
              />
            ),
        }}
      />
    </Navigator>
  );
};

export default BottomNav;
