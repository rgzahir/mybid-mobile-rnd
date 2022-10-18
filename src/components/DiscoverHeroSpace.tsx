import React from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  BorderRadius16,
  borderRadiusBottomDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  FlexRow,
  fontBasic,
  heroColors,
  JustifySpaceBetween,
  marginDynamic,
  Neutral,
  paddingDynamic,
  SquareBox90px,
  titleColors,
  White,
} from "../styles";

export const DiscoverHeroSpace = () => {
  return (
    <View>
      <View
        style={{
          ...backgroundColorDynamic(heroColors.primary),
          ...borderRadiusDynamic(16),
          ...paddingDynamic(24, 24, 24, 24),
          ...marginDynamic("6%"),
          ...FlexDirectionRow,
          ...JustifySpaceBetween,
          ...AlignItemCenter,
        }}
      >
        <View style={{ ...JustifySpaceBetween, ...dimensionDynamic(90) }}>
          <View style={{ ...FlexRow, ...AlignItemCenter }}>
            <Text
              style={{
                ...fontBasic(14, "600", titleColors.primary),
                ...marginDynamic(0, 8),
              }}
            >
              X
            </Text>
            <Text style={{ ...fontBasic(16, "800", heroColors.secondary) }}>
              Your myBID ID
            </Text>
          </View>
          <Text
            style={{
              ...fontBasic(12, "normal", heroColors.secondary, 0.7),
            }}
          >
            joeychan_gmail.com
          </Text>
        </View>
        <View
          style={{
            ...SquareBox90px,
            ...BorderRadius16,
            ...backgroundColorDynamic(White),
          }}
        />
      </View>

      <View
        style={{
          ...borderRadiusBottomDynamic(16),
          ...marginDynamic(0, "auto", 0, "auto"),
          ...dimensionDynamic(5, "85%"),
          ...backgroundColorDynamic(Neutral.neutral_1),
        }}
      />
      <View
        style={{
          ...borderRadiusBottomDynamic(16),
          ...marginDynamic(0, "auto", 0, "auto"),
          ...dimensionDynamic(5, "75%"),
          ...backgroundColorDynamic(White),
        }}
      />
    </View>
  );
};

export default DiscoverHeroSpace;
