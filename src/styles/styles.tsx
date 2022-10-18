import { TextStyle, ViewStyle } from "react-native";

import { Accent, heroColors, heroColorsText, Neutral, Primary, titleColors, White } from "./colors";
import { fontBasic } from "./text";
import {
  AlignItemCenter,
  backgroundColorDynamic,
  BackgroundColorWhite,
  borderMake,
  BorderRadius16,
  BorderRadiusBottomOnly16,
  borderRadiusDynamic,
  ButtonGeneral,
  dimensionDynamic,
  FlexDirectionRow,
  FlexOne,
  FlexWrap,
  JustifySpaceBetween,
  JustifySpaceCenter,
  JustifySpaceEvenly,
  marginDynamic,
  paddingDynamic,
  PositionAbsolute,
  ShadowLight,
  SquareBox250px,
  SquareBox60px,
  SquareBox80px,
  SquareBox90px,
} from "./view";

export const BaseContainer: ViewStyle = {
  ...FlexOne,
  ...paddingDynamic('10%', 24, 24, 24),
};

export const BaseContainerCounter: ViewStyle = {
  ...paddingDynamic('16%', 24, 0, 24),
  ...marginDynamic('-16%', -16, 0, -16),
};

export const InputSpace: ViewStyle = {
  ...borderRadiusDynamic(4),
  ...dimensionDynamic('auto', '90%'),
  ...marginDynamic(8, 'auto', 0, 'auto'),
  ...borderRadiusDynamic(8),
  ...paddingDynamic(16, 8, 16, 24),
  ...backgroundColorDynamic(White),
  // ...BackgroundColorWhite,
  // backgroundColor: 'red',
};

export const ForgetClick: ViewStyle = {
  ...marginDynamic(24, 0, 0, 16),
};

export const Button: ViewStyle = {
  borderColor: '#01396C',
  backgroundColor: '#01396C',
  ...marginDynamic('85%', 'auto', 0, 'auto'),
  ...borderRadiusDynamic(32),
  ...dimensionDynamic('auto', '90%'),
  ...paddingDynamic(16, 0, 16, 0),
  ...ButtonGeneral,
  ...AlignItemCenter,
};

export const NormalMargin: ViewStyle = {
  ...marginDynamic(8),
};

export const MediumMargin: ViewStyle = {
  ...marginDynamic(16, 8, 8, 8),
};

export const HeaderSpace: ViewStyle = {
  ...marginDynamic('2%'),
  ...FlexDirectionRow,
  ...JustifySpaceBetween,
  ...AlignItemCenter,
  ...paddingDynamic(8, 0, 8, 0),
};

export const HeaderSpaceAddTest: ViewStyle = {
  // marginTop: 20,
  // backgroundColor: 'blue',
};

export const HeroSpace: ViewStyle = {
  backgroundColor: heroColors.primary,
  ...borderRadiusDynamic(16),
  ...paddingDynamic(24, 24, 24, 24),
  ...marginDynamic('6%'),
  ...FlexDirectionRow,
  ...JustifySpaceBetween,
  ...AlignItemCenter,
};

export const FlexRow: ViewStyle = {
  ...FlexDirectionRow,
};

export const HeroSpaceBackOne: ViewStyle = {
  backgroundColor: Neutral.neutral_1,
  ...BorderRadiusBottomOnly16,
  ...marginDynamic(0, 'auto', 0, 'auto'),
  ...dimensionDynamic('auto', '80%'),
};

export const HeroSpaceBackTwo: ViewStyle = {
  ...HeroSpaceBackOne,
  ...BackgroundColorWhite,
  ...dimensionDynamic('auto', '70%'),
};

export const ImageDiscover: ViewStyle = {
  ...SquareBox90px,
  ...BorderRadius16,
  ...BackgroundColorWhite,
};

export const CurrentStatusSpace: ViewStyle = {
  ...ShadowLight,
  ...marginDynamic('10%'),
};

export const CurrentStatusItem: ViewStyle = {
  ...AlignItemCenter,
  ...dimensionDynamic(60, '20%'),
};

export const CurrentStatusImg: ViewStyle = {
  backgroundColor: heroColors.secondary,
  ...SquareBox60px,
  ...borderRadiusDynamic(80),
  ...marginDynamic(0, 0, 8),
};

export const CurrentStatus: ViewStyle = {
  backgroundColor: titleColors.white,
  ...JustifySpaceBetween,
  ...FlexDirectionRow,
  ...paddingDynamic(24, 24, 48, 24),
  ...marginDynamic(12),
  ...borderRadiusDynamic(16),
  ...dimensionDynamic('auto', '100%'),
};

export const HighlightSpace: ViewStyle = {
  ...paddingDynamic(0, 0, 8),
  ...JustifySpaceBetween,
  ...FlexDirectionRow,
  ...AlignItemCenter,
  ...marginDynamic('8%'),
};

export const HighlightItem: ViewStyle = {
  ...marginDynamic(0, 0, 16),
  ...AlignItemCenter,
  ...FlexDirectionRow,
};

export const HighlightPic: ViewStyle = {
  backgroundColor: 'grey',
  ...marginDynamic(0, 15),
  ...SquareBox60px,
  ...borderRadiusDynamic(50),
};

export const vectorImg: ViewStyle = {
  ...SquareBox250px,
  ...marginDynamic('20%', 'auto', 0, 'auto'),
};

export const title: ViewStyle = {
  ...FlexDirectionRow,
  ...FlexWrap,
  ...marginDynamic('30%'),
};

export const buttonRow: ViewStyle = {
  ...FlexDirectionRow,
  ...JustifySpaceEvenly,
  ...marginDynamic(0, 0, '15%'),
};

export const button: ViewStyle = {
  ...paddingDynamic(15, 0, 15),
  ...AlignItemCenter,
  ...borderMake(4, White),
  ...borderRadiusDynamic(50),
  ...dimensionDynamic('auto', '45%'),
};

export const buttonInverse: ViewStyle = {
  ...button,
  backgroundColor: 'white',
};

export const marginAuto: ViewStyle = {
  ...marginDynamic(0, 'auto', 0, 'auto'),
};

export const footer: ViewStyle = {
  ...marginDynamic('40%'),
};

export const ItemCard: ViewStyle = {
  backgroundColor: '#02C9A5',
  ...borderRadiusDynamic(16),
  ...paddingDynamic(24, 16, 24, 16),
  ...marginDynamic(16, 0, 16),
};

export const certImg: ViewStyle = {
  backgroundColor: Primary.primary_blue,
  ...SquareBox80px,
  ...borderRadiusDynamic(24),
  ...marginDynamic(0, '10%'),
};

export const QRCodeSpace: ViewStyle = {
  backgroundColor: Primary.primary_blue,
  ...BorderRadiusBottomOnly16,
  ...FlexDirectionRow,
  ...JustifySpaceBetween,
  ...AlignItemCenter,
  ...marginDynamic(48, -16, -24, -16),
  ...paddingDynamic(16, 16, 16, 16),
};

export const InitializeBg: ViewStyle = {
  ...JustifySpaceCenter,
  ...PositionAbsolute,
  ...dimensionDynamic(1, 1),
};

export const DiscoverBg: ViewStyle = {
  ...PositionAbsolute,
  ...borderRadiusDynamic(32),
  ...dimensionDynamic('64%', '120%'),
};

export const Title: TextStyle = {
  ...marginDynamic('30%'),
  ...fontBasic(28, '600', '#1A232B'),
  ...paddingDynamic(0, 0, 0, 16),
};

export const Label: TextStyle = {
  ...fontBasic(16, '400', '#676D71', 0.8),
  ...marginDynamic(24, 0, 0, 16),
};

export const ForgetText: TextStyle = {
  ...fontBasic(14, 'bold', '#01396C'),
};

export const textButtonInverse: TextStyle = {
  ...fontBasic(20, '500', '#01396C'),
};

export const textComment: TextStyle = {
  ...fontBasic(12, 'normal', White, 0.7),
};

export const textTitle: TextStyle = {
  ...fontBasic(28, '600', White),
};

export const textTitleSpan: TextStyle = {
  ...fontBasic(14, 'bold', '#02C9A5'),
};

export const textButton: TextStyle = {
  ...fontBasic(20, '500', White),
};

export const HeroSpaceText: TextStyle = {
  color: heroColors.secondary,
  ...JustifySpaceBetween,
  ...dimensionDynamic(90),
};

export const CurrentStatusImgText: TextStyle = {
  ...fontBasic(12, 'normal', heroColorsText.primary),
};

export const ButtonText: TextStyle = {
  ...fontBasic(20, '500', White),
};

export const NormalText = {
  ...fontBasic(16, '600', Accent.accent_blue_10),
};

export const NormalTextWhite: TextStyle = {
  ...fontBasic(14, '600', titleColors.primary),
};

export const MediumText: TextStyle = {
  ...fontBasic(16, '800', titleColors.secondary),
};

export const MediumTextWhite: TextStyle = {
  ...fontBasic(16, '800', White),
};

export const TextComment: TextStyle = {
  ...fontBasic(12, 'normal', 'black', 0.7),
};

export const TextCommentWhite: TextStyle = {
  ...fontBasic(12, 'normal', White, 0.7),
};
