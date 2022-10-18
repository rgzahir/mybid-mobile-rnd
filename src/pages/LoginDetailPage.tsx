import { Formik } from "formik";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderMake,
  borderRadiusDynamic,
  dimensionDynamic,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  White,
} from "../styles";

export const LoginDetailPage = ({ navigation }) => {
  const [passToggle, setPassToggle] = useState(true);
  const goBackPageHandler = () => {
    navigation.goBack();
    console.log(navigation);
  };

  const loginHandlerHandler = () => {
    navigation.navigate("DashboardScreenStack");
    console.log(navigation);
  };

  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={goBackPageHandler}
        style={{
          ...marginDynamic("20%", 0, 0, 16),
        }}
      >
        <Text>{"< Back"}</Text>
      </TouchableOpacity>

      <Text
        style={{
          ...marginDynamic("30%"),
          ...fontBasic(28, "600", "#1A232B"),
          ...paddingDynamic(0, 0, 0, 16),
        }}
      >
        Log in to myBID
      </Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          loginHandlerHandler();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <InputArea
              label="Email Address:"
              placeholder="me@gmail.com"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              //for password use - security
              //secureTextEntry={true}
            />
            <InputArea
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

            <TouchableOpacity
              style={{
                ...backgroundColorDynamic("#01396C"),
                ...marginDynamic("60%", "auto", 0, "auto"),
                ...borderRadiusDynamic(32),
                ...borderMake(2, "#01396C"),
                ...dimensionDynamic("auto", "90%"),
                ...paddingDynamic(16, 0, 16, 0),
                ...AlignItemCenter,
              }}
              onPress={() => {
                console.log("Go To Dashboard");
                handleSubmit();
              }}
            >
              <Text style={{ ...fontBasic(20, "500", White) }}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

const InputArea = ({ label, ...props }) => {
  return (
    <View>
      <Text
        style={{
          ...fontBasic(16, "400", "#676D71", 0.8),
          ...marginDynamic(24, 0, 0, 16),
        }}
      >
        {label}
      </Text>
      <TextInput
        style={{
          ...borderRadiusDynamic(4),
          ...dimensionDynamic("auto", "90%"),
          ...marginDynamic(8, "auto", 0, "auto"),
          ...borderRadiusDynamic(8),
          ...paddingDynamic(16, 8, 16, 24),
          ...backgroundColorDynamic(White),
        }}
        {...props}
      />
    </View>
  );
};

export default LoginDetailPage;
