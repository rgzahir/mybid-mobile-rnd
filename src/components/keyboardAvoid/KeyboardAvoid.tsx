import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

import { LoginDetailPage } from "../../pages";
import { FlexOne, marginDynamic, paddingDynamic } from "../../styles";

export const KeyboardAvoid = () => {
  return (
    <KeyboardAvoidingView
      style={{
        ...FlexOne,
        ...marginDynamic("-16%", -16, 0, -16),
        ...paddingDynamic("10%", 24, 24, 24),
        ...paddingDynamic("16%", 24, 0, 24),
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginDetailPage />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
