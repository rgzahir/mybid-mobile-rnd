import React, { Fragment } from "react";
import { Text, View } from "react-native";

import {
  AlignItemCenter,
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
  POPPINS_REGULAR,
  POPPINS_SEMIBOLD,
  White,
} from "../../styles";
import { NormalIconButton } from "../buttons";

export const DiscoverHeroSpace = () => {
  return (
    <Fragment>
      <View
        style={{
          ...AlignItemCenter,
          backgroundColor: heroColors.primary,
          ...borderRadiusDynamic(16),
          ...FlexDirectionRow,
          ...JustifySpaceBetween,
          ...marginDynamic("6%"),
          ...paddingDynamic(24, 24, 24, 24),
        }}
      >
        <View style={{ ...JustifySpaceBetween, ...dimensionDynamic(90) }}>
          <View style={{ ...AlignItemCenter, ...FlexDirectionRow }}>
            <NormalIconButton
              color={heroColors.secondary}
              disabledPress={true}
              name="map"
              onPressHandler={() => {}}
              size={16}
            />
            <Text
              style={{
                ...fontBasic(20, "600", heroColors.secondary),
                fontFamily: POPPINS_SEMIBOLD,
                lineHeight: 24,
                marginLeft: 8,
              }}
            >
              Your myBID ID
            </Text>
          </View>
          <Text
            style={{
              ...fontBasic(12, "400", heroColors.secondary, 0.7),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 14,
            }}
          >
            joeychan_gmail.com
          </Text>
        </View>
        <View
          style={{
            ...borderRadiusDynamic(16),
            backgroundColor: White,
            ...dimensionDynamic(90, 90),
          }}
        />
      </View>

      <View
        style={{
          ...borderRadiusBottomDynamic(16),
          backgroundColor: Neutral.neutral_1,
          ...marginDynamic(0, "auto", 0, "auto"),
          ...dimensionDynamic(5, "85%"),
        }}
      />
      <View
        style={{
          ...borderRadiusBottomDynamic(16),
          backgroundColor: White,
          ...marginDynamic(0, "auto", 0, "auto"),
          ...dimensionDynamic(5, "75%"),
        }}
      />
    </Fragment>
  );
};

export default DiscoverHeroSpace;
