import React, { Fragment } from "react";
import { Text, View } from "react-native";

import {
  Accent,
  AlignItemCenter,
  borderRadiusDynamic,
  FlexDirectionRow,
  FlexWrap,
  fontBasic,
  marginDynamic,
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
              ...FlexWrap,
              ...fontBasic(14, "600", Accent.accent_blue_10),
            }}
          >
            You just added your first credentials.
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", "black", 0.7),
              ...marginDynamic(8),
            }}
          >
            Today, 10:100AM
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
            ...borderRadiusDynamic(50),
            ...SquareBox60px,
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...FlexWrap,
              ...fontBasic(14, "600", Accent.accent_blue_10),
            }}
          >
            You just added your first credentials.
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", "black", 0.7),
              ...marginDynamic(8),
            }}
          >
            Today, 10:100AM
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
            ...SquareBox60px,
            backgroundColor: "grey",
            ...borderRadiusDynamic(50),
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...FlexWrap,
              ...fontBasic(14, "600", Accent.accent_blue_10),
            }}
          >
            You just added your first credentials.
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", "black", 0.7),
              ...marginDynamic(8),
            }}
          >
            Today, 10:100AM
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
            ...SquareBox60px,
            backgroundColor: "grey",
            ...borderRadiusDynamic(50),
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...FlexWrap,
              ...fontBasic(14, "600", Accent.accent_blue_10),
            }}
          >
            You just added your first credentials.
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", "black", 0.7),
              ...marginDynamic(8),
            }}
          >
            Today, 10:100AM
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
            ...SquareBox60px,
            backgroundColor: "grey",
            ...borderRadiusDynamic(50),
            ...marginDynamic(0, 15),
          }}
        />
        <View>
          <Text
            style={{
              ...FlexWrap,
              ...fontBasic(14, "600", Accent.accent_blue_10),
            }}
          >
            You just added your first credentials.
          </Text>
          <Text
            style={{
              ...fontBasic(12, "normal", "black", 0.7),
              ...marginDynamic(8),
            }}
          >
            Today, 10:100AM
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default DiscoverHighlightItem;
