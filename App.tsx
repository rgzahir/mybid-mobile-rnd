/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";

import StackNav from "./src/navigation/StackNav";
import { backgroundColorDynamic, FlexOne } from "./src/styles";

const App = () => {
  return (
    <NavigationContainer>
      <View
        style={{ ...FlexOne, ...backgroundColorDynamic("rgba(242,242,242,1)") }}
      >
        <StackNav />
      </View>
    </NavigationContainer>
  );
};

export default App;
