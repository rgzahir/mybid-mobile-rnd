import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { fontBasic, marginDynamic } from "../../styles";
import { GeneralButton } from "../buttons";
import InputAreaComponent from "./InputAreaComponent";

export const LoginFormComponent: FunctionComponent<TLoginFormComponent> = ({
  passToggle,
}) => {
  const checkNav = useNavigation();

  const LoginHandler = () => {
    checkNav.navigate("DashboardScreenStack");
    console.log(checkNav);
  };

  return (
    <Fragment>
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
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <View>
            <InputAreaComponent
              label="Email Address:"
              iconName="mail2"
              iconSize={24}
              iconColor="grey"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="me@gmail.com"
              value={values.email}
              //for password use - security
              //secureTextEntry={true}
            />

            <InputAreaComponent
              label="Password:"
              iconName="mail2"
              iconSize={24}
              iconColor="grey"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="At least 6 characters"
              //for password use - security
              secureTextEntry={passToggle}
              value={values.password}
            />

            <TouchableOpacity style={{ ...marginDynamic(24, 0, 0, 16) }}>
              <Text style={{ ...fontBasic(14, "bold", "#01396C") }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <GeneralButton
              label="Log In"
              onPressHandler={handleSubmit}
              marginTop="60%"
            />
          </View>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginFormComponent;
