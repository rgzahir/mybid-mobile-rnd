// In App.js in a new project
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { KeyboardAvoid } from "../components/keyboardAvoid";
import { LoginPage } from "../pages";
import BottomNav from "./BottomNav";

const LoginScreen = ({ navigation }) => {
  // console.log('mnav', navigation);
  // navigation.navigate('LoginScreenStack');
  return <LoginPage navigation={navigation} />;
};

const LoginDetailScreen = ({ navigation }) => {
  return <KeyboardAvoid navigation={navigation} />;
};

const BottomTabStack = () => {
  return <BottomNav />;
};

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"LoginScreen"}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="LoginScreenStack" component={LoginDetailScreen} />
      <Stack.Screen name="DashboardScreenStack" component={BottomTabStack} />
    </Stack.Navigator>
  );
};

export default StackNav;
