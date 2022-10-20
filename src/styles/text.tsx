import { TextStyle } from "react-native";

export const fontBasic = (
  size: number,
  weight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900",
  color?: string,
  opacity?: number,
  style?: "normal" | "italic",
  lineHeight?: number
) => {
  const obj: TextStyle = {
    fontSize: size,
    fontWeight: weight,
    color: color,
    opacity: opacity,
    fontStyle: style,
    lineHeight: lineHeight,
  };
  return obj;
};

export const fontSizeDynamic = (x: number) => {
  return { fontSize: x };
};

export const fontWeightDynamic = (x: string) => {
  return { fontWeight: x };
};

export const fontColorDynamic = (x: string) => {
  return { color: x };
};

export const fontStyleDynamic = (x: string) => {
  return { fontStyle: x };
};

export const letterSpacingDynamic = (x: number) => {
  return { letterSpacing: x };
};

export const lineHeightDynamic = (x: number) => {
  return { lineHeight: x };
};

export const textAlignDynamic = (x: string) => {
  return { textAlign: x };
};

export const textTransformDynamic = (x: string) => {
  return { textTransform: x };
};
