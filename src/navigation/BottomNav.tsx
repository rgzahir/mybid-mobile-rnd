// In App.js in a new project
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CredentialPage, DiscoverPage } from "../pages";
import { Accent, marginDynamic, Primary } from "../styles";

// interface IProfileScreen {
//   navigation: NativeStackNavigationProp<>;
// }

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
    // navigation.goBack();
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

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
            >
              <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Primary.primary_blue,
        tabBarInactiveTintColor: Accent.accent_blue_2,
        tabBarActiveBackgroundColor: Accent.accent_green_1,
        tabBarAllowFontScaling: true,
      }}
      initialRouteName={"Discover"}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color, size, focused }) =>
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
      <Tab.Screen
        name="Credentials"
        component={CredentialScreen}
        options={{
          tabBarLabel: "Credentials",
          tabBarIcon: ({ color, size, focused }) =>
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
      <Tab.Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          tabBarLabel: "Finance",
          tabBarIcon: ({ color, size, focused }) =>
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
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) =>
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
    </Tab.Navigator>
  );
};

export default BottomNav;
