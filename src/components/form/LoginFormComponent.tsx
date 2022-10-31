import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React, { Fragment, FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { fontBasic, marginDynamic } from "../../styles";
import { GeneralButton, IconSwitchButton, NormalIconButton } from "../buttons";
import InputAreaComponent from "./InputAreaComponent";

export const LoginFormComponent: FunctionComponent<TLoginFormComponent> = ({
  passToggle,
  setPassToggle,
  updateToggleFunction,
}) => {
  const checkNav = useNavigation();

  const LoginHandler = () => {
    checkNav.navigate("DashboardScreenStack");
    console.log(checkNav);
  };

  const mail2Icon = () => {
    return (
      <NormalIconButton
        color="black"
        disabledPress={true}
        name="mail2"
        onPressHandler={() => {}}
        size={24}
      />
    );
  };

  const passwordIcon = () => {
    return (
      <IconSwitchButton
        color="black"
        disabledPress={false}
        name="eye"
        name_2="eye-blocked"
        onPressHandler={updateToggleFunction}
        size={24}
        state={passToggle}
      />
    );
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
              icon={mail2Icon}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="me@gmail.com"
              value={values.email}
              //for password use - security
              //secureTextEntry={true}
            />

            <InputAreaComponent
              label="Password:"
              icon={passwordIcon}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              placeholder="At least 6 characters"
              //for password use - security
              secureTextEntry={passToggle}
              value={values.password}
            />

            <TouchableOpacity style={{ ...marginDynamic(24, 0, 0, 16) }}>
              <Text
                style={{
                  ...fontBasic(16, "600", "#01396C"),
                  lineHeight: 24,
                  fontFamily: "Poppins-SemiBold",
                }}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <GeneralButton
              label="Log In"
              onPressHandler={handleSubmit}
              marginTop="50%"
            />
          </View>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginFormComponent;
