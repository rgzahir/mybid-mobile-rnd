// In App.js in a new project
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CredentialPage, DiscoverPage } from "../pages";
import { Accent, marginDynamic, Primary } from "../styles";


const { Navigator, Screen } = createBottomTabNavigator();

const DiscoverScreen = () => {
  return <DiscoverPage />;
};

const CredentialScreen = () => {
  return <CredentialPage />;
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

const ProfileScreen = ({ navigation }) => {
  const checkNav = useNavigation();
  const logOutHandler = () => {
    checkNav.navigate("LoginScreen");
    console.log(navigation);
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
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Primary.primary_blue,
        tabBarInactiveTintColor: Accent.accent_blue_2,
        tabBarActiveBackgroundColor: Accent.accent_green_1,
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
              <View>
                <Text style={{ color: Primary.primary_blue }}>F</Text>
              </View>
            ) : (
              <View>
                <Text style={{ color: Accent.accent_blue_2 }}>F</Text>
              </View>
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
                <Text style={{ color: Primary.primary_blue }}>F</Text>
              </View>
            ) : (
              <View>
                <Text style={{ color: Accent.accent_blue_2 }}>F</Text>
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
              <View>
                <Text style={{ color: Primary.primary_blue }}>F</Text>
              </View>
            ) : (
              <View>
                <Text style={{ color: Accent.accent_blue_2 }}>F</Text>
              </View>
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
                <Text style={{ color: Primary.primary_blue }}>F</Text>
              </View>
            ) : (
              <View>
                <Text style={{ color: Accent.accent_blue_2 }}>F</Text>
              </View>
            ),
        }}
      />
    </Navigator>
  );
};

export default BottomNav;
