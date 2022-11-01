import React, { Fragment, FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CheckPicture } from "../../functions/CredentialCard";
import {
  FlexDirectionRow,
  FlexOne,
  fontBasic,
  marginDynamic,
  paddingDynamic,
  POPPINS_REGULAR,
  White,
} from "../../styles";

export const DataCredentialPassport: FunctionComponent<
  TDataCredentialPassportProps
> = ({ data, showQR, setShowQR }) => {
  const { profilePicture, fullName, nationality, passportNumber } = data;

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
        {CheckPicture(profilePicture)}

        <View style={{ ...FlexOne }}>
          <Text
            style={{
              ...fontBasic(10, "400", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 12,
              ...marginDynamic(0, 0, 4, 0),
            }}
          >
            Full Name
          </Text>
          <Text
            style={{
              ...fontBasic(14, "500", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 16,
            }}
          >
            {fullName}
          </Text>
          <Text
            style={{
              ...fontBasic(10, "400", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 12,
              ...marginDynamic(8, 0, 4, 0),
            }}
          >
            Nationality
          </Text>
          <Text
            style={{
              ...fontBasic(14, "500", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 16,
            }}
          >
            {nationality}
          </Text>
          <Text
            style={{
              ...fontBasic(10, "400", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 12,
              ...marginDynamic(8, 0, 4, 0),
            }}
          >
            Passport Number
          </Text>
          <Text
            style={{
              ...fontBasic(14, "500", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 16,
            }}
          >
            {passportNumber}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default DataCredentialPassport;
