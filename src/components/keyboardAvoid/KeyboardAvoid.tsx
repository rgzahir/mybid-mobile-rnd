import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

import { LoginDetailPage } from "../../pages";
import { FlexOne, marginDynamic, paddingDynamic } from "../../styles";

export const KeyboardAvoid = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={{
        ...FlexOne,
        ...paddingDynamic("10%", 24, 24, 24),
        ...paddingDynamic("16%", 24, 0, 24),
        ...marginDynamic("-16%", -16, 0, -16),
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginDetailPage navigation={navigation} />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
