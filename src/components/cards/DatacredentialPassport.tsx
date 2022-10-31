import React, { Fragment, FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { CheckPicture } from "../../functions/CredentialCard";
import { FlexDirectionRow, FlexOne, fontBasic, marginDynamic, paddingDynamic, White } from "../../styles";

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
              ...fontBasic(12, "normal", White, 0.7),
              ...marginDynamic(0, 0, 4, 0),
            }}
          >
            Full Name
          </Text>
          <Text style={{ ...fontBasic(14, "600", White) }}>{fullName}</Text>
          <Text
            style={{
              ...fontBasic(12, "normal", White, 0.7),
              ...marginDynamic(8, 0, 4, 0),
            }}
          >
            Nationality
          </Text>
          <Text style={{ ...fontBasic(14, "600", White) }}>{nationality}</Text>
          <Text
            style={{
              ...fontBasic(12, "normal", White, 0.7),
              ...marginDynamic(8, 0, 4, 0),
            }}
          >
            Passport Number
          </Text>
          <Text style={{ ...fontBasic(14, "600", White) }}>
            {passportNumber}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

export default DataCredentialPassport;
