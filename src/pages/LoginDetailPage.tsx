import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";

import { NormalIconButton } from "../components/buttons";
import { LoginFormComponent } from "../components/form";
import {
  fontBasic,
  marginDynamic,
  Neutral,
  paddingDynamic,
  Primary,
} from "../styles";

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
        <NormalIconButton
          color={Primary.primary_blue}
          name="arrow-left2"
          onPressHandler={goBackPageHandler}
          size={24}
        />
      </View>

      <Text
        style={{
          ...marginDynamic("30%"),
          ...fontBasic(24, "600", Neutral.neutral_9),
          ...paddingDynamic(0, 0, 0, 24),
          fontFamily: "Poppins-SemiBold",
          lineHeight: 32,
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
