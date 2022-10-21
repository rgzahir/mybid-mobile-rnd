import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { LoginFormComponent } from "../components/form";
import { fontBasic, marginDynamic, paddingDynamic } from "../styles";

type TLoginDetailPageProps = {
  // navigation?: NavigatorScreenParams<any, any> | undefined;
};

export const LoginDetailPage: React.FC<TLoginDetailPageProps> = ({
  navigation,
}) => {
  const [passToggle, setPassToggle] = useState(true);
  const goBackPageHandler = () => {
    navigation.goBack();
    console.log(navigation);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={goBackPageHandler}
        style={{
          ...marginDynamic("20%", 0, 0, 16),
        }}
      >
        <Text>{"< Back"}</Text>
      </TouchableOpacity>

      <Text
        style={{
          ...marginDynamic("30%"),
          ...fontBasic(28, "600", "#1A232B"),
          ...paddingDynamic(0, 0, 0, 16),
        }}
      >
        Log in to myBID
      </Text>

      <LoginFormComponent
        navigation={navigation}
        passToggle={passToggle}
        setPassToggle={setPassToggle}
      />
    </View>
  );
};

export default LoginDetailPage;
