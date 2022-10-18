import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import {
  BaseContainer,
  button,
  buttonInverse,
  buttonRow,
  footer,
  InitializeBg,
  marginAuto,
  textButton,
  textButtonInverse,
  textComment,
  textTitle,
  textTitleSpan,
  title,
  vectorImg,
} from "../styles";

export const LoginPage = ({navigation}) => {
  // const checkNav = useNavigation();
  const GoToLoginDetail = () => {
    navigation.navigate('LoginScreenStack');
    console.log('GoToLoginDetail', navigation);
  };

  const background_img = '../media/initialize_app_bg.png';
  const illustration_img = '../media/initalize_Illustration.png';

  return (
    <View style={{...BaseContainer, backgroundColor: '#002E94'}}>
      <View style={InitializeBg}>
        <Image source={require(background_img)} />
      </View>

      <View style={title}>
        <Text style={textTitle}>
          Managing your credential {'\n'}is easy with
          <Text style={textTitleSpan}> myBID</Text>
        </Text>
      </View>
      <View>
        <Image source={require(illustration_img)} style={vectorImg} />
      </View>
      <View style={footer}>
        <View style={buttonRow}>
          <TouchableOpacity style={button} onPress={GoToLoginDetail}>
            <Text style={textButton}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonInverse}>
            <Text style={textButtonInverse}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={{...textComment, ...marginAuto}}>
          By continuing you accept the Terms of Use
        </Text>
      </View>
    </View>
  );
};

export default LoginPage;
