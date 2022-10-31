import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { MoreDetailsButton, NormalIconButton } from "../components/buttons";
import { DiscoverHeroSpace, DiscoverHighlightItem, DiscoverShowStatus } from "../components/discoverComponents";
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
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...JustifySpaceBetween,
          ...marginDynamic("2%"),
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

        <NormalIconButton
          color="white"
          disabledPress={false}
          name="bell"
          onPressHandler={() => {}}
          size={24}
        />
      </View>

      <DiscoverHeroSpace />

      <View style={{ ...ShadowLight, ...marginDynamic("10%") }}>
        <Text style={{ ...fontBasic(16, "800", White) }}>Current Status</Text>
        <DiscoverShowStatus />
      </View>

      <View
        style={{
          ...AlignItemCenter,
          ...JustifySpaceBetween,
          ...FlexDirectionRow,
          ...paddingDynamic(0, 0, 8),
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

        <MoreDetailsButton
          disabledPress={false}
          color="black"
          label="View All"
          name_icon="arrow-right2"
          onPressHandler={() => {}}
          size={12}
        />
      </View>

      <ScrollView
        style={{
          ...FlexWrap,
          ...paddingDynamic(8, 24, 0, 24),
          ...marginDynamic(0, -16, -32, -16),
        }}
      >
        <DiscoverHighlightItem />
      </ScrollView>
    </View>
  );
};

export default DiscoverPage;
