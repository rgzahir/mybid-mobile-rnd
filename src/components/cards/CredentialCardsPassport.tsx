import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusBottomDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexOne,
  FlexRow,
  fontBasic,
  JustifySpaceBetween,
  marginDynamic,
  paddingDynamic,
  SquareBox80px,
} from "../../styles";
import { Accent, Primary, Secondary } from "../../styles/colors";

type CredentialCardsPassportProps = {
  isShownLocal: boolean;
  setIsShownLocal: Function;
  Data?: Any;
};

export const CredentialCardsPassport: React.FC<
  CredentialCardsPassportProps
> = ({ isShownLocal, setIsShownLocal, Data }) => {
  return (
    <View
      style={{
        ...backgroundColorDynamic(Accent.accent_green_3),
        ...borderRadiusDynamic(16),
        ...paddingDynamic(24, 16, 24, 16),
        ...marginDynamic(16, 0, 16, 0),
        ...FlexOne,
      }}
    >
      <TouchableOpacity
        style={{
          ...FlexRow,
          ...AlignItemCenter,
          ...JustifySpaceBetween,
        }}
        onPress={() => {
          setIsShownLocal(!isShownLocal);
        }}
      >
        <View>
          <Text style={{ ...fontBasic(14, "bold", Accent.accent_blue_10) }}>
            {Data.credentialName}
          </Text>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_5, 1, "italic"),
              ...marginDynamic(8),
            }}
          >
            {Data.credentialProvider}
          </Text>
        </View>
        <Text style={{ ...fontBasic(16, "bold", Accent.accent_blue_5) }}>
          X
        </Text>
      </TouchableOpacity>
      <View>
        {isShownLocal ? <CredentialDataDetails Data={Data} /> : <View />}
      </View>
    </View>
  );
};

const CredentialDataDetails = ({ Data }) => {
  const [identifier, setIdentifier] = useState(true);
  const showQRHandler = () => {
    setIdentifier(!identifier);
  };

  return (
    <View>
      {identifier ? (
        <TouchableOpacity
          style={{
            ...FlexRow,
            ...marginDynamic(24, 0, 24, 0),
            ...paddingDynamic(8, 0, 8, 0),
          }}
          onPress={() => {
            showQRHandler();
          }}
        >
          <View
            style={{
              ...SquareBox80px,
              ...borderRadiusDynamic(16),
              ...marginDynamic(0, "10%"),
              ...backgroundColorDynamic(Primary.primary_blue),
            }}
          />
          <View>
            <Text
              style={{
                ...fontBasic(12, "normal", Primary.primary_blue, 0.7),
                ...marginDynamic(0, 0, 4, 0),
              }}
            >
              Full Name
            </Text>
            <Text style={{ ...fontBasic(14, "600", Primary.primary_blue) }}>
              {Data.fullName}
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
              {Data.nationality}
            </Text>
            <Text
              style={{
                ...fontBasic(12, "normal", Primary.primary_blue, 0.7),
                ...marginDynamic(8, 0, 4, 0),
              }}
            >
              Passport Number
            </Text>
            <Text style={{ ...fontBasic(14, "600", Primary.primary_blue) }}>
              {Data.passportNumber}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            ...FlexRow,
            ...marginDynamic(24, 0, 24, 0),
            ...paddingDynamic(8, 0, 8, 0),
          }}
          onPress={() => {
            showQRHandler();
          }}
        >
          <View
            style={{
              ...dimensionDynamic(150, 150),
              ...borderRadiusDynamic(16),
              ...marginDynamic(0, "auto", 0, "auto"),
              ...backgroundColorDynamic(Primary.primary_blue),
            }}
          />
        </TouchableOpacity>
      )}

      <View
        style={{
          ...backgroundColorDynamic(Primary.primary_blue),
          ...FlexOne,
          ...borderRadiusBottomDynamic(16),
          ...JustifySpaceBetween,
          ...marginDynamic(0, -16, -24, -16),
          ...paddingDynamic(16, 16, 24, 16),
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              ...FlexRow,
              ...JustifySpaceBetween,
            }}
            onPress={() => {
              console.log("Show QR invoked !");
              showQRHandler();
            }}
          >
            <View style={{ ...FlexRow, ...marginDynamic(0, 0, 4) }}>
              <Text
                style={{
                  ...fontBasic(14, "bold", Secondary.secondary_green),
                }}
              >
                X
              </Text>
              <Text
                style={{
                  ...fontBasic(14, "bold", Secondary.secondary_green),
                }}
              >
                {"  "}Show QR Code
              </Text>
            </View>

            <Text style={{ color: Secondary.secondary_green }}>{"->"}</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...fontBasic(12, "normal", Accent.accent_blue_6),
            }}
          >
            Data update on 4 April 2022 at 10:00 AM
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CredentialCardsPassport;
