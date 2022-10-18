import { ViewStyle } from "react-native";

type marginDynamicProps = {
  a?: string | number | any;
  b?: string | number | any;
  c?: string | number | any;
  d?: string | number | any;
};

export const AlignItemCenter: ViewStyle = {alignItems: 'center'} as const;

export const borderRadiusDynamic = (num: number) => {
  return {borderRadius: num};
};

export const borderMake = (b?: number, c?: string) => {
  return {
    borderWidth: b,
    borderColor: c,
  };
};

export const paddingTopDynamic = (x: string | number) => {
  return {paddingTop: x};
};

export const marginTopDynamic = (x: string | number) => {
  return {marginTop: x};
};

export const marginBottomDynamic = (x: string | number) => {
  return {marginTop: x};
};

export const marginDynamic = (
  a?: string | number,
  b?: string | number,
  c?: string | number,
  d?: string | number,
) => {
  return {
    marginTop: a,
    marginRight: b,
    marginBottom: c,
    marginLeft: d,
  };
};

export const paddingDynamic = (
  a?: string | number,
  b?: string | number,
  c?: string | number,
  d?: string | number,
) => {
  return {
    paddingTop: a,
    paddingRight: b,
    paddingBottom: c,
    paddingLeft: d,
  };
};

export const dimensionDynamic = (h?: string | number, w?: string | number) => {
  return {
    height: h,
    width: w,
  };
};

export const backgroundColorDynamic = (a: number | string) => {
  return {backgroundColor: a};
};

export const BorderRadius8: ViewStyle = {borderRadius: 8} as const;

export const BorderRadius16: ViewStyle = {borderRadius: 16} as const;

export const BorderRadius24: ViewStyle = {borderRadius: 24} as const;

export const BorderRadius32: ViewStyle = {borderRadius: 32} as const;

export const BorderRadiusBottomOnly16: ViewStyle = {
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
} as const;

export const BackgroundColorWhite: ViewStyle = {
  backgroundColor: '#fffff',
} as const;

export const BackgroundColorDark: ViewStyle = {
  backgroundColor: '#251B37',
} as const;

export const BorderWidth4px: ViewStyle = {borderWidth: 4} as const;

export const Container: ViewStyle = {
  paddingHorizontal: 24,
  paddingTop: '10%',
} as const;

export const ContainerCounter: ViewStyle = {
  marginHorizontal: -24,
  paddingHorizontal: 24,
  marginTop: '-10%',
  paddingTop: '10%',
} as const;

export const DiscoverBgDimension: ViewStyle = {
  height: '64%',
  width: '120%',
} as const;

export const FlexOne: ViewStyle = {flex: 1} as const;

export const FlexDirectionRow: ViewStyle = {flexDirection: 'row'} as const;

export const FlexWrap: ViewStyle = {flexWrap: 'wrap'} as const;

export const ButtonGeneral: ViewStyle = {
  ...AlignItemCenter,
  ...borderRadiusDynamic(32),
  ...dimensionDynamic('auto', '90%'),
  ...paddingDynamic(16, 0, 16, 0),
  ...marginDynamic('60%', 'auto', 0, 'auto'),
  borderColor: '#01396C',
  backgroundColor: '#01396C',
} as const;

export const JustifySpaceBetween: ViewStyle = {
  justifyContent: 'space-between',
} as const;

export const JustifySpaceAround: ViewStyle = {
  justifyContent: 'space-around',
} as const;

export const JustifySpaceEvenly: ViewStyle = {
  justifyContent: 'space-evenly',
} as const;

export const JustifySpaceCenter: ViewStyle = {
  justifyContent: 'center',
} as const;

export const MarginAutoHorizontal: ViewStyle = {
  marginLeft: 'auto',
  marginRight: 'auto',
} as const;

export const MarginTop24: ViewStyle = {marginTop: 24} as const;

export const MarginTop16: ViewStyle = {marginTop: 16} as const;

export const MarginTop8: ViewStyle = {marginTop: 8} as const;

export const MarginLeft24: ViewStyle = {marginLeft: 24} as const;

export const MarginLeft16: ViewStyle = {marginLeft: 16} as const;

export const MarginLeft8: ViewStyle = {marginLeft: 8} as const;

export const MarginBottom24: ViewStyle = {marginBottom: 24} as const;

export const MarginBottom16: ViewStyle = {marginBottom: 16} as const;

export const MarginBottom8: ViewStyle = {marginBottom: 8} as const;

export const MarginTopCounter24: ViewStyle = {marginTop: -24} as const;

export const MarginTopCounter16: ViewStyle = {marginTop: -16} as const;

export const MarginTopCounter8: ViewStyle = {marginTop: -8} as const;

export const MarginLeftCounter24: ViewStyle = {marginLeft: -24} as const;

export const MarginLeftCounter16: ViewStyle = {marginLeft: -16} as const;

export const MarginLeftCounter8: ViewStyle = {marginLeft: -8} as const;

export const MarginAll8: ViewStyle = {margin: 8} as const;

export const MarginAll16: ViewStyle = {margin: 16} as const;

export const MarginAll24: ViewStyle = {margin: 24} as const;

export const MarginAll32: ViewStyle = {margin: 32} as const;

export const MarginAllCounter8: ViewStyle = {margin: -8} as const;

export const MarginAllCounter16: ViewStyle = {margin: -16} as const;

export const MarginAllCounter24: ViewStyle = {margin: -24} as const;

export const MarginAllCounter32: ViewStyle = {margin: -32} as const;

export const MarginTop16Percent: ViewStyle = {marginTop: '16%'} as const;

export const MarginTop24Percent: ViewStyle = {marginTop: '24%'} as const;

export const MarginTop32Percent: ViewStyle = {marginTop: '32%'} as const;

export const MarginTop16PercentCounter: ViewStyle = {
  marginTop: '-16%',
} as const;

export const MarginTop24PercentCounter: ViewStyle = {
  marginTop: '-24%',
} as const;

export const MarginTop32PercentCounter: ViewStyle = {
  marginTop: '-32%',
} as const;

export const MarginHorizontal24: ViewStyle = {marginHorizontal: 24} as const;

export const MarginHorizontalCounter24: ViewStyle = {
  marginHorizontal: -24,
} as const;

export const PaddingTop24: ViewStyle = {paddingTop: 24} as const;

export const PaddingTop16: ViewStyle = {paddingTop: 16} as const;

export const PaddingTop8: ViewStyle = {paddingTop: 8} as const;

export const PaddingLeft24: ViewStyle = {paddingLeft: 24} as const;

export const PaddingLeft16: ViewStyle = {paddingLeft: 16} as const;

export const PaddingLeft8: ViewStyle = {paddingTop: 8} as const;

export const PaddingVertical24: ViewStyle = {paddingVertical: 24} as const;

export const PaddingVertical16: ViewStyle = {paddingTop: 16} as const;

export const PaddingVertical8: ViewStyle = {paddingVertical: 8} as const;

export const PaddingHorizontal24: ViewStyle = {paddingHorizontal: 24} as const;

export const PaddingHorizontal16: ViewStyle = {paddingLeft: 16} as const;

export const PaddingHorizontal8: ViewStyle = {
  paddingHorizontal: 8,
} as const;

export const PaddingAll8: ViewStyle = {padding: 8} as const;

export const PaddingAll16: ViewStyle = {padding: 16} as const;

export const PaddingAll24: ViewStyle = {padding: 24} as const;

export const PaddingAll32: ViewStyle = {padding: 32} as const;

export const PaddingAllCounter8: ViewStyle = {padding: -8} as const;

export const PaddingAllCounter16: ViewStyle = {padding: -16} as const;

export const PaddingAllCounter24: ViewStyle = {padding: -24} as const;

export const PaddingAllCounter32: ViewStyle = {padding: -32} as const;

export const PaddingTop16Percent: ViewStyle = {paddingTop: '16%'} as const;

export const PaddingTop24Percent: ViewStyle = {paddingTop: '24%'} as const;

export const PaddingTop32Percent: ViewStyle = {paddingTop: '32%'} as const;

export const PositionAbsolute: ViewStyle = {position: 'absolute'} as const;

export const SquareBox90px: ViewStyle = {width: 90, height: 90} as const;

export const SquareBox60px: ViewStyle = {width: 60, height: 60} as const;

export const SquareBox80px: ViewStyle = {width: 80, height: 80} as const;

export const SquareBox250px: ViewStyle = {width: 250, height: 250} as const;

export const ShadowLight: ViewStyle = {
  shadowColor: 'grey',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 0.4,
  shadowRadius: 8,
} as const;

export const TextInputSpace: ViewStyle = {
  ...Width90Percent,
  ...BackgroundColorWhite,
  ...PaddingHorizontal8,
  ...PaddingVertical16,
  ...MarginTop8,
  borderRadius: 4,
} as const;

export const Width100Percent: ViewStyle = {width: '100%'} as const;

export const Width90Percent: ViewStyle = {width: '90%'} as const;

export const Width80Percent: ViewStyle = {width: '80%'} as const;

export const Width70Percent: ViewStyle = {width: '70%'} as const;

export const Width20Percent: ViewStyle = {width: '20%'} as const;
