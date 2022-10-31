import { Accent, White } from "../../styles";

export const UpdateTextColor = (
  isShownLocal: boolean | undefined,
  setTextColor_1: any,
  setTextColor_2: any
) => {
  if (isShownLocal) {
    setTextColor_1(Accent.accent_blue_10);
    setTextColor_2(Accent.accent_blue_5);
  } else {
    setTextColor_1(White);
    setTextColor_2(White);
  }
};

export default UpdateTextColor;
