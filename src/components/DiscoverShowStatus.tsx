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
        ...paddingDynamic(24, 24, 48, 24),
        ...marginDynamic(12),
        ...borderRadiusDynamic(16),
        ...dimensionDynamic("auto", "100%"),
        ...backgroundColorDynamic(titleColors.white),
      }}
    >
      <View style={{ ...AlignItemCenter, ...dimensionDynamic(60, "20%") }}>
        <View
          style={{
            ...SquareBox60px,
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
            ...backgroundColorDynamic(heroColors.secondary),
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
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
            ...backgroundColorDynamic(heroColors.secondary),
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
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
            ...backgroundColorDynamic(heroColors.secondary),
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
            ...borderRadiusDynamic(80),
            ...marginDynamic(0, 0, 8),
            ...backgroundColorDynamic(heroColors.secondary),
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
