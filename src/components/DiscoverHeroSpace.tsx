import React from "react";
import { Text, View } from "react-native";

import {
    FlexRow,
    heroColors,
    HeroSpace,
    HeroSpaceBackOne,
    HeroSpaceBackTwo,
    HeroSpaceText,
    ImageDiscover,
    MediumText,
    NormalTextWhite,
    TextCommentWhite,
} from "../styles";

export const DiscoverHeroSpace = () => {
  return (
    <View>
      <View style={HeroSpace}>
        <View style={HeroSpaceText}>
          <View style={FlexRow}>
            <Text style={{...NormalTextWhite, marginRight: 8}}>X</Text>
            <Text style={{...MediumText, color: heroColors.secondary}}>
              Your myBID ID
            </Text>
          </View>
          <Text style={{...TextCommentWhite, color: heroColors.secondary}}>
            joeychan_gmail.com
          </Text>
        </View>
        <View style={ImageDiscover} />
      </View>
      <View style={HeroSpaceBackOne} />
      <View style={HeroSpaceBackTwo} />
    </View>
  );
};

export default DiscoverHeroSpace;
