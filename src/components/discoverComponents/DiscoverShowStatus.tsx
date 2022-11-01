import React from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  fontBasic,
  heroColors,
  heroColorsText,
  JustifySpaceBetween,
  marginDynamic,
  paddingDynamic,
  POPPINS_SEMIBOLD,
  SquareBox60px,
  titleColors,
} from "../../styles";

export const DiscoverShowStatus = () => {
  return (
    <View
      style={{
        ...JustifySpaceBetween,
        ...FlexDirectionRow,
        ...borderRadiusDynamic(16),
        backgroundColor: titleColors.white,
        ...dimensionDynamic("auto", "100%"),
        ...paddingDynamic(24, 24, 48, 24),
        ...marginDynamic(12),
      }}
    >
      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...borderRadiusDynamic(80),
            backgroundColor: heroColors.secondary,
            ...SquareBox60px,
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "600", heroColorsText.primary),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 16,
          }}
        >
          Basics
        </Text>
      </View>

      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            backgroundColor: heroColors.secondary,
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "600", heroColorsText.primary),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 16,
          }}
        >
          Identity
        </Text>
      </View>

      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            backgroundColor: heroColors.secondary,
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "600", heroColorsText.primary),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 16,
          }}
        >
          Finance
        </Text>
      </View>

      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            backgroundColor: heroColors.secondary,
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(10, "600", heroColorsText.primary),
            fontFamily: POPPINS_SEMIBOLD,
            lineHeight: 16,
          }}
        >
          Education
        </Text>
      </View>
    </View>
  );
};

export default DiscoverShowStatus;
