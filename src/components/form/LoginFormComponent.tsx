import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { fontBasic, marginDynamic } from "../../styles";
import { GeneralButton } from "../buttons";
import InputAreaComponent from "./InputAreaComponent";

type TLoginFormComponent = {
  // navigation?: NavigatorScreenParams<any, any> | undefined;
  passToggle?: boolean;
  setPassToggle?: Function;
};

export const LoginFormComponent: React.FC<TLoginFormComponent> = ({
  navigation,
  passToggle,
  setPassToggle,
}) => {
  const LoginHandler = () => {
    navigation.navigate("DashboardScreenStack");
    console.log(navigation);
  };

  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          LoginHandler();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <InputAreaComponent
              label="Email Address:"
              placeholder="me@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              //for password use - security
              //secureTextEntry={true}
            />

            <InputAreaComponent
              label="Password:"
              placeholder="At least 6 characters"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              //for password use - security
              secureTextEntry={passToggle}
            />

            <TouchableOpacity style={{ ...marginDynamic(24, 0, 0, 16) }}>
              <Text style={{ ...fontBasic(14, "bold", "#01396C") }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <GeneralButton label="Log In" onPressHandler={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginFormComponent;
