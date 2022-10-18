import React from "react";
import { Text, View } from "react-native";

import {
  Accent,
  AlignItemCenter,
  backgroundColorDynamic,
  borderRadiusDynamic,
  FlexDirectionRow,
  FlexWrap,
  fontBasic,
  marginDynamic,
  SquareBox60px,
} from "../styles";

export const DiscoverHighlightItem = () => {
  return (
    <View>
      <View
        style={{
          ...marginDynamic(0, 0, 16),
          ...AlignItemCenter,
          ...FlexDirectionRow,
        }}
      >
        <View
          style={{
            ...backgroundColorDynamic("grey"),
            ...marginDynamic(0, 15),
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_10),
              ...FlexWrap,
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
          ...marginDynamic(0, 0, 16),
          ...AlignItemCenter,
          ...FlexDirectionRow,
        }}
      >
        <View
          style={{
            ...backgroundColorDynamic("grey"),
            ...marginDynamic(0, 15),
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_10),
              ...FlexWrap,
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
          ...marginDynamic(0, 0, 16),
          ...AlignItemCenter,
          ...FlexDirectionRow,
        }}
      >
        <View
          style={{
            ...backgroundColorDynamic("grey"),
            ...marginDynamic(0, 15),
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_10),
              ...FlexWrap,
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
          ...marginDynamic(0, 0, 16),
          ...AlignItemCenter,
          ...FlexDirectionRow,
        }}
      >
        <View
          style={{
            ...backgroundColorDynamic("grey"),
            ...marginDynamic(0, 15),
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_10),
              ...FlexWrap,
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
          ...marginDynamic(0, 0, 16),
          ...AlignItemCenter,
          ...FlexDirectionRow,
        }}
      >
        <View
          style={{
            ...backgroundColorDynamic("grey"),
            ...marginDynamic(0, 15),
            ...SquareBox60px,
            ...borderRadiusDynamic(50),
          }}
        />
        <View>
          <Text
            style={{
              ...fontBasic(14, "600", Accent.accent_blue_10),
              ...FlexWrap,
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
    </View>
  );
};

export default DiscoverHighlightItem;
