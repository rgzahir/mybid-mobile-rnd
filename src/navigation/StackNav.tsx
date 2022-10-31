import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { KeyboardAvoid } from "../components/keyboardAvoid";
import { LoginPage } from "../pages";
import BottomNav from "./BottomNav";

const { Navigator, Screen } = createNativeStackNavigator();

const LoginScreen = () => {
  // console.log('nav', navigation);
  // navigation.navigate('LoginScreenStack');
  return <LoginPage />;
};

const LoginDetailScreen = () => {
  return <KeyboardAvoid />;
};

const BottomTabStack = () => {
  return <BottomNav />;
};

const StackNav = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"LoginScreen"}
    >
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="LoginScreenDetail" component={LoginDetailScreen} />
      <Screen name="DashboardScreenStack" component={BottomTabStack} />
    </Navigator>
  );
};

export default StackNav;
