// In App.js in a new project
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { NormalIconButton } from "../components/buttons";
import { CredentialPage, DiscoverPage } from "../pages";
import { Accent, marginDynamic, Primary, White } from "../styles";

const { Navigator, Screen } = createBottomTabNavigator();

const DiscoverScreen = () => {
  return <DiscoverPage />;
};

const CredentialScreen = () => {
  return <CredentialPage />;
};

const ScanCredentialScreen = () => {
  return (
    <View style={{ ...marginDynamic("auto", "auto", "auto", "auto") }}>
      <Text>Scan Credential Screen</Text>
      {/* <BaseModal
        Detail={ShowQRCodeModal}
        indicator={showQRModal}
        setIndicator={setShowQRModal}
      /> */}
    </View>
  );
};

const FinanceScreen = () => {
  return (
    <View style={{ ...marginDynamic("auto", "auto", "auto", "auto") }}>
      <TouchableOpacity>
        <Text>FINANCE SCREEN</Text>
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
        <Text>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const BottomNav = () => {
  const [quickScan, setQuickScan] = useState(false);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Primary.primary_blue,
        tabBarInactiveTintColor: Accent.accent_blue_2,
        // tabBarActiveBackgroundColor: Accent.accent_green_1,
        tabBarAllowFontScaling: true,
      }}
      initialRouteName={"Discover"}
    >
      <Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <NormalIconButton
                color={Primary.primary_blue}
                disabledPress={true}
                name="safari"
                size={24}
              />
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
              <NormalIconButton
                color={Primary.primary_blue}
                disabledPress={true}
                name="folder-open"
                size={24}
              />
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
        name="Scan Credential"
        component={ScanCredentialScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  position: "absolute",
                  bottom: -8, // space from bottombar
                  backgroundColor: White,
                  height: 68,
                  width: 68,
                  borderRadius: 68,
                  padding: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NormalIconButton
                  color={Primary.primary_blue}
                  disabledPress={true}
                  name="qrcode"
                  size={40}
                />
              </View>
            ) : (
              <View
                style={{
                  position: "absolute",
                  bottom: -8, // space from bottombar
                  backgroundColor: White,
                  height: 68,
                  width: 68,
                  borderRadius: 68,
                  padding: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NormalIconButton
                  color={Accent.accent_blue_2}
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
          tabBarLabel: "Finance",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <NormalIconButton
                color={Primary.primary_blue}
                disabledPress={true}
                name="credit-card"
                size={24}
              />
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
              <NormalIconButton
                color={Primary.primary_blue}
                disabledPress={true}
                name="user"
                size={24}
              />
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
