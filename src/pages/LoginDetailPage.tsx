import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { Button, ButtonText, fontBasic, ForgetClick, ForgetText, InputSpace, Label, marginDynamic, paddingDynamic } from "../styles";

const InputArea = ({label, ...props}) => {
  return (
    <View>
      <Text style={Label}>{label}</Text>
      <TextInput style={InputSpace} {...props} />
    </View>
  );
};

export const LoginDetailPage = ({navigation}) => {
  const [passToggle, setPassToggle] = useState(true);
  const goBackPageHandler = () => {
    navigation.goBack();
    console.log(navigation);
  };

  const loginHandlerHandler = () => {
    navigation.navigate('DashboardScreenStack');
    console.log(navigation);
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={goBackPageHandler}
        style={{
          ...marginDynamic('20%', 0, 0, 16),
        }}>
        <Text>{'< Back'}</Text>
      </TouchableOpacity>

      <Text
        style={{
          ...marginDynamic('30%'),
          ...fontBasic(28, '600', '#1A232B'),
          ...paddingDynamic(0, 0, 0, 16),
        }}>
        Log in to myBID
      </Text>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          console.log(values);
          loginHandlerHandler();
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <InputArea
              label="Email Address:"
              placeholder="me@gmail.com"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              //for password use - security
              //secureTextEntry={true}
            />
            <InputArea
              label="Password:"
              placeholder="At least 6 characters"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              //for password use - security
              secureTextEntry={passToggle}
            />
            <TouchableOpacity style={ForgetClick}>
              <Text style={ForgetText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={Button}
              onPress={() => {
                console.log('Go To Dashboard');
                handleSubmit();
              }}>
              <Text style={ButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginDetailPage;
