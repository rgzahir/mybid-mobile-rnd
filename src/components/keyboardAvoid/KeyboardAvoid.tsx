import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

import { LoginDetailPage } from "../../pages";
import { BaseContainer, BaseContainerCounter } from "../../styles";

export const KeyboardAvoid = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{...BaseContainer, ...BaseContainerCounter}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginDetailPage navigation={navigation} />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoid;
