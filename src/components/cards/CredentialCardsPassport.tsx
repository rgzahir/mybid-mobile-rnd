import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Accent, Primary, Secondary, White } from "../../styles/colors";
import { certImg, ItemCard, NormalMargin, NormalText, NormalTextWhite, QRCodeSpace, textComment } from "../../styles/styles";

type CredentialCardsPassportProps = {
  identifier: boolean;
  setIdentifier: Function;
  Data?: Any;
};

export const CredentialCardsPassport: React.FC<
  CredentialCardsPassportProps
> = ({identifier, setIdentifier, Data}) => {
  return (
    <View style={ItemCard}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => {
          setIdentifier(!identifier);
        }}>
        <View>
          <Text style={{...NormalText, fontWeight: 'bold'}}>
            {Data.credentialName}
          </Text>
          <Text
            style={{
              ...NormalText,
              ...NormalMargin,
              fontStyle: 'italic',
              color: Accent.accent_blue_5,
            }}>
            {Data.credentialProvider}
          </Text>
        </View>
        <Text style={{...NormalText, color: Accent.accent_blue_5}}>X</Text>
      </TouchableOpacity>
      <View>
        {identifier ? <CredentialDataDetails Data={Data} /> : <View />}
      </View>
    </View>
  );
};

const CredentialDataDetails = ({Data}) => {
  return (
    <View>
      <View style={{marginTop: 24}} />
      {/* <Image source={require(card_item_bg)} style={{position: 'absolute', zIndex: 2}} resizeMode='contain' /> */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
        }}>
        <View style={certImg} />
        <View>
          <Text
            style={{
              ...textComment,
              ...NormalMargin,
              color: Primary.primary_blue,
            }}>
            Full Name
          </Text>
          <Text style={{...NormalTextWhite, color: Primary.primary_blue}}>
            {Data.fullName}
          </Text>
          <Text
            style={{
              ...textComment,
              ...NormalMargin,
              color: Primary.primary_blue,
            }}>
            Nationality
          </Text>
          <Text style={{...NormalTextWhite, color: Primary.primary_blue}}>
            {Data.nationality}
          </Text>
          <Text
            style={{
              ...textComment,
              ...NormalMargin,
              color: Primary.primary_blue,
            }}>
            Passport Number
          </Text>
          <Text style={{...NormalTextWhite, color: Primary.primary_blue}}>
            {Data.passportNumber}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={QRCodeSpace}>
        <View>
          <TouchableOpacity
            style={{flexDirection: 'row', marginBottom: 8}}
            onPress={() => {
              console.log('Show QR invoked !');
            }}>
            <Text style={{...NormalText, color: Secondary.secondary_green}}>
              X{' '}
            </Text>
            <Text style={{...NormalText, color: Secondary.secondary_green}}>
              Show QR Code
            </Text>
          </TouchableOpacity>
          <Text style={{...textComment, color: Accent.accent_blue_6}}>
            Data update on 4 April 2022 at 10:00 AM
          </Text>
        </View>
        <View>
          <Text style={{color: White}}>{'->'}</Text>
        </View>
      </View>
    </View>
  );
};

export default CredentialCardsPassport;
