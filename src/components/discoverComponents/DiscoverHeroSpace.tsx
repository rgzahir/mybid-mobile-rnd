import React, { Fragment } from "react";
import { Text, View } from "react-native";

import { userProfile } from "../../dummyData";
import { CheckPicture } from "../../functions/CredentialCard";
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
  const { userEmail, userProfilePicture } = userProfile;

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
            {userEmail}
          </Text>
        </View>

        <View style={{ marginLeft: 16 }}>
          {CheckPicture(userProfilePicture)}
        </View>
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
