import React from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  fontBasic,
  heroColors,
  heroColorsText,
  JustifySpaceBetween,
  marginDynamic,
  paddingDynamic,
  SquareBox60px,
  titleColors,
} from "../styles";

export const DiscoverShowStatus = () => {
  return (
    <View
      style={{
        ...JustifySpaceBetween,
        ...FlexDirectionRow,
        ...borderRadiusDynamic(16),
        ...backgroundColorDynamic(titleColors.white),
        ...dimensionDynamic("auto", "100%"),
        ...paddingDynamic(24, 24, 48, 24),
        ...marginDynamic(12),
      }}
    >
      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            ...borderRadiusDynamic(80),
            ...backgroundColorDynamic(heroColors.secondary),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "normal", heroColorsText.primary),
          }}
        >
          Basics
        </Text>
      </View>

      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            ...backgroundColorDynamic(heroColors.secondary),
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "normal", heroColorsText.primary),
          }}
        >
          Identity
        </Text>
      </View>

      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            ...backgroundColorDynamic(heroColors.secondary),
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "normal", heroColorsText.primary),
          }}
        >
          Finance
        </Text>
      </View>

      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            ...backgroundColorDynamic(heroColors.secondary),
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
          }}
        />
        <Text
          style={{
            ...fontBasic(12, "normal", heroColorsText.primary),
          }}
        >
          Education
        </Text>
      </View>
    </View>
  );
};

export default DiscoverShowStatus;
