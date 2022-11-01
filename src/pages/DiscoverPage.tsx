import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { MoreDetailsButton, NormalIconButton } from "../components/buttons";
import {
  DiscoverHeroSpace,
  DiscoverHighlightItem,
  DiscoverShowStatus,
} from "../components/discoverComponents";
import { userProfile } from "../dummyData";
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
  POPPINS_MEDIUM,
  POPPINS_SEMIBOLD,
  Primary,
  ShadowLight,
  titleColors,
  White,
} from "../styles";

const Discover_bg = "../media/discover_bg.png";

const { userEmail, userFirstName, userLastName, userNotifications } =
  userProfile;

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
          position: "absolute",
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
              ...fontBasic(12, "500", Accent.accent_green_1, 0.7, "normal", 14),
              fontFamily: POPPINS_MEDIUM,
              ...marginDynamic(8),
            }}
          >
            Welcome,
          </Text>

          <Text
            style={{
              ...fontBasic(20, "600", Accent.accent_green_4, 1, "normal", 24),
              fontFamily: POPPINS_SEMIBOLD,
              ...marginDynamic(8),
            }}
          >
            {userFirstName + " " + userLastName}
          </Text>
        </View>

        <View>
          <NormalIconButton
            color="white"
            disabledPress={false}
            name="bell"
            onPressHandler={() => {}}
            size={24}
          />
          <View
            style={{
              position: "absolute",
              backgroundColor: Primary.primary_blue,
              borderRadius: 16,
              padding: 4,
              ...marginDynamic(-4, -16, 0, -8),
            }}
          >
            <Text style={{ ...fontBasic(10, "700", White, 1, "normal", 12) }}>
              {userNotifications}
            </Text>
          </View>
        </View>
      </View>

      <DiscoverHeroSpace />

      <View style={{ ...ShadowLight, ...marginDynamic("10%") }}>
        <Text
          style={{
            ...fontBasic(16, "600", White, 1, "normal", 20),
            fontFamily: POPPINS_SEMIBOLD,
          }}
        >
          Current Status
        </Text>
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
            ...fontBasic(16, "600", titleColors.secondary, 1, "normal", 20),
            fontFamily: POPPINS_SEMIBOLD,
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
