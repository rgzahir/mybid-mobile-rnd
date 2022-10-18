import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { DiscoverHeroSpace, DiscoverHighlightItem, DiscoverShowStatus } from "../components";
import {
  Accent,
  BaseContainer,
  BaseContainerCounter,
  CurrentStatusSpace,
  DiscoverBg,
  HeaderSpace,
  HeaderSpaceAddTest,
  HighlightSpace,
  MediumText,
  MediumTextWhite,
  NormalMargin,
  NormalTextWhite,
  TextComment,
  TextCommentWhite,
} from "../styles";

export const DiscoverPage = () => {
  const discover_bg = '../media/discover_bg.png';

  return (
    <View style={{...BaseContainer}}>
      <Image
        source={require(discover_bg)}
        style={DiscoverBg}
        resizeMode="stretch"
      />
      <View style={{...HeaderSpace, ...HeaderSpaceAddTest}}>
        <View>
          <Text
            style={{
              ...TextCommentWhite,
              ...NormalMargin,
              color: Accent.accent_green_1,
            }}>
            Welcome,
          </Text>
          <Text
            style={{
              ...MediumTextWhite,
              ...NormalMargin,
              color: Accent.accent_green_4,
            }}>
            Joey Chan Chan Chan
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={NormalTextWhite}>X</Text>
        </TouchableOpacity>
      </View>
      <DiscoverHeroSpace />

      <View style={CurrentStatusSpace}>
        <Text style={MediumTextWhite}>Current Status</Text>
        <DiscoverShowStatus />
      </View>
      <View style={HighlightSpace}>
        <Text style={{...MediumText}}>Highlights</Text>
        <TouchableOpacity>
          <Text style={TextComment}>View All ${'->'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          ...BaseContainerCounter,
          marginTop: 1,
          paddingTop: 1,
          marginBottom: -32,
          // backgroundColor: 'lightblue',
        }}>
        <DiscoverHighlightItem />
      </ScrollView>
    </View>
  );
};

export default DiscoverPage;
