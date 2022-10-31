import React, { Fragment, FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CheckPicture } from "../../functions/CredentialCard";
import { FlexDirectionRow, FlexOne, fontBasic, marginDynamic, paddingDynamic, White } from "../../styles";

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
              ...fontBasic(12, "normal", White),
              ...marginDynamic(0, 0, 4, 0),
            }}
          >
            Full Name
          </Text>
          <Text
            style={{
              ...fontBasic(14, "600", White),
            }}
          >
            {fullName}
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", White, 0.7),
              ...marginDynamic(8, 0, 4, 0),
            }}
          >
            Nationality
          </Text>
          <Text style={{ ...fontBasic(14, "600", White) }}>{dateOfIssue}</Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default DataCredentialCertificate;
