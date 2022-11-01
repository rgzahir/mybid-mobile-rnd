import React, { Fragment } from "react";
import { Text, View } from "react-native";

import {
  Accent,
  AlignItemCenter,
  borderRadiusDynamic,
  FlexDirectionRow,
  fontBasic,
  marginDynamic,
  POPPINS_MEDIUM,
  POPPINS_REGULAR,
  SquareBox60px,
} from "../../styles";

export const DiscoverHighlightItem = () => {
  return (
    <Fragment>
      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...marginDynamic(0, 0, 16),
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "500", Accent.accent_blue_10),
              fontFamily: POPPINS_MEDIUM,
              lineHeight: 16,
              ...marginDynamic(0, 0, 8),
            }}
          >
            You have just added your first credentials.
          </Text>

          <Text
            style={{
              ...fontBasic(12, "400", Accent.accent_blue_2, 0.7),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 14,
              // ...marginDynamic(8),
            }}
          >
            Today, 10:10 AM
          </Text>
        </View>
      </View>

      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...marginDynamic(0, 0, 16),
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "500", Accent.accent_blue_10),
              fontFamily: POPPINS_MEDIUM,
              lineHeight: 16,
              ...marginDynamic(0, 0, 8),
            }}
          >
            You have just added your first credentials.
          </Text>

          <Text
            style={{
              ...fontBasic(12, "400", Accent.accent_blue_2, 0.7),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 14,
              // ...marginDynamic(8),
            }}
          >
            Today, 10:10 AM
          </Text>
        </View>
      </View>

      <View
        style={{
          ...AlignItemCenter,
          ...FlexDirectionRow,
          ...marginDynamic(0, 0, 16),
        }}
      >
        <View
          style={{
            backgroundColor: "grey",
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "500", Accent.accent_blue_10),
              fontFamily: POPPINS_MEDIUM,
              lineHeight: 16,
              ...marginDynamic(0, 0, 8),
            }}
          >
            You have just added your first credentials.
          </Text>

          <Text
            style={{
              ...fontBasic(12, "400", Accent.accent_blue_2, 0.7),
              fontFamily: POPPINS_REGULAR,
              lineHeight: 14,
              // ...marginDynamic(8),
            }}
          >
            Today, 10:10 AM
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default DiscoverHighlightItem;
