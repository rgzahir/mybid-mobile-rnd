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

export const DataCredentialCertificate: FunctionComponent<
  TDataCredentialCertificateProps
> = ({ data, showQR, setShowQR }) => {
  const { profilePicture, fullName, dateOfIssue } = data;

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
              marginTop: 16,
            }}
          >
            Date of Issue
          </Text>
          <Text
            style={{
              ...fontBasic(14, "500", White),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 16,
            }}
          >
            {dateOfIssue}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default DataCredentialCertificate;
