import React, { Fragment } from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusBottomDynamic,
  borderRadiusDynamic,
  dimensionDynamic,
  FlexDirectionRow,
  fontBasic,
  heroColors,
  JustifySpaceBetween,
  marginDynamic,
  Neutral,
  paddingDynamic,
  titleColors,
  White,
} from "../../styles";

export const DiscoverHeroSpace = () => {
  return (
    <Fragment>
      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...JustifySpaceBetween,
          ...backgroundColorDynamic(heroColors.primary),
          ...borderRadiusDynamic(16),
          ...marginDynamic("6%"),
          ...paddingDynamic(24, 24, 24, 24),
        }}
      >
        <View style={{ ...JustifySpaceBetween, ...dimensionDynamic(90) }}>
          <View style={{ ...AlignItemCenter, ...FlexDirectionRow }}>
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
            ...borderRadiusDynamic(16),
            ...backgroundColorDynamic(White),
            ...dimensionDynamic(90, 90),
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
    </Fragment>
  );
};

export default DiscoverHeroSpace;
