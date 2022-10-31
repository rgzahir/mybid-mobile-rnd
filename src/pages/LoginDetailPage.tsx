import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { BackButton } from "../components/buttons";
import { LoginFormComponent } from "../components/form";
import { fontBasic, marginDynamic, paddingDynamic } from "../styles";

type TLoginDetailPageProps = {
  // navigation?: NavigatorScreenParams<any, any> | undefined;
};

export const LoginDetailPage: React.FC<TLoginDetailPageProps> = () => {
  const [passToggle, setPassToggle] = useState(true);
  const updatePassToggle = () => {
    setPassToggle(!passToggle);
  };

  const checkNav = useNavigation();
  const goBackPageHandler = () => {
    checkNav.goBack();
    console.log(checkNav);
  };

  return (
    <View>
      <View
        style={{
          ...marginDynamic("20%", 0, 0, 16),
        }}
      >
        <BackButton
          fontColor="black"
          label="Back"
          onPressHandler={goBackPageHandler}
        />
      </View>

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
        passToggle={passToggle}
        setPassToggle={setPassToggle}
        updateToggleFunction={updatePassToggle}
      />
    </View>
  );
};

export default LoginDetailPage;
