import React, { Fragment, FunctionComponent, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import {
  backgroundColorDynamic,
  borderRadiusDynamic,
  FlexDirectionRow,
  FlexOne,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  Primary,
  SquareBox80px,
} from "../../styles";

export const DataCredentialCertificate: FunctionComponent<
  TDataCredentialCertificateProps
> = ({ data, showQR, setShowQR }) => {
  const { profilePicture, fullName, dateOfIssue } = data;
  const pic = () => {
    if (profilePicture) {
      return (
        <View
          style={{
            ...marginDynamic(0, 16),
          }}
        >
          <Image source={profilePicture} />
        </View>
      );
    } else {
      return (
        <View
          style={{
            ...SquareBox80px,
            ...borderRadiusDynamic(16),
            ...marginDynamic(0, "10%"),
            ...backgroundColorDynamic(Primary.primary_blue),
          }}
        ></View>
      );
    }
  };

  return (
    <Fragment>
      <TouchableOpacity
        style={{
          ...FlexDirectionRow,
          ...marginDynamic(24, 0, 24, 0),
          ...paddingDynamic(8, 0, 8, 0),
        }}
        onPress={() => {
          setShowQR(!showQR);
        }}
      >
        {pic()}

        <View style={{ ...FlexOne }}>
          <Text
            style={{
              ...fontBasic(12, "normal", Primary.primary_blue, 0.7),
              ...marginDynamic(0, 0, 4, 0),
            }}
          >
            Full Name
          </Text>
          <Text
            style={{
              ...fontBasic(14, "600", Primary.primary_blue),
            }}
          >
            {fullName}
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", Primary.primary_blue, 0.7),
              ...marginDynamic(8, 0, 4, 0),
            }}
          >
            Nationality
          </Text>
          <Text style={{ ...fontBasic(14, "600", Primary.primary_blue) }}>
            {dateOfIssue}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default DataCredentialCertificate;
