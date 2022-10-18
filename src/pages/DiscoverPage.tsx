import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { DiscoverHeroSpace, DiscoverHighlightItem, DiscoverShowStatus } from "../components";
import {
  Accent,
  AlignItemCenter,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  FlexOne,
  FlexWrap,
  fontBasic,
  JustifySpaceBetween,
  marginDynamic,
  paddingDynamic,
  PositionAbsolute,
  ShadowLight,
  titleColors,
  White,
} from "../styles";

const Discover_bg = "../media/discover_bg.png";

export const DiscoverPage = () => {
  return (
    <View
      style={{
        ...FlexOne,
        ...paddingDynamic("10%", 24, 24, 24),
      }}
    >
      <Image
        source={require(Discover_bg)}
        style={{
          ...PositionAbsolute,
          ...borderRadiusDynamic(32),
          ...dimensionDynamic("64%", "120%"),
        }}
        resizeMode="stretch"
      />

      <View
        style={{
          ...marginDynamic("2%"),
          ...FlexDirectionRow,
          ...JustifySpaceBetween,
          ...AlignItemCenter,
          ...paddingDynamic(8, 0, 8, 0),
        }}
      >
        <View>
          <Text
            style={{
              ...fontBasic(12, "normal", Accent.accent_green_1, 0.7),
              ...marginDynamic(8),
            }}
          >
            Welcome,
          </Text>
          <Text
            style={{
              ...fontBasic(16, "800", Accent.accent_green_4),
              ...marginDynamic(8),
            }}
          >
            Joey Chan Chan Chan
          </Text>
        </View>

        <TouchableOpacity>
          <Text
            style={{ ...fontBasic(14, "bold", Accent.accent_green_1, 0.7) }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>

      <DiscoverHeroSpace />

      <View style={{ ...ShadowLight, ...marginDynamic("10%") }}>
        <Text style={{ ...fontBasic(16, "800", White) }}>Current Status</Text>
        <DiscoverShowStatus />
      </View>
      <View
        style={{
          ...paddingDynamic(0, 0, 8),
          ...JustifySpaceBetween,
          ...FlexDirectionRow,
          ...AlignItemCenter,
          ...marginDynamic("8%"),
        }}
      >
        <Text
          style={{
            ...fontBasic(16, "800", titleColors.secondary),
          }}
        >
          Highlights
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              ...fontBasic(12, "normal", "black", 0.7),
            }}
          >
            View All ${"->"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          ...paddingDynamic(8, 24, 0, 24),
          ...marginDynamic(0, -16, -32, -16),
          ...FlexWrap,
        }}
      >
        <DiscoverHighlightItem />
      </ScrollView>
    </View>
  );
};

export default DiscoverPage;
