import { White } from "../../styles";

export const CheckIsShown = (isShownLocal: boolean) => {
  if (isShownLocal) {
    // return Primary.primary_blue;
    return "#181818";
  }

  return White;
};

export default CheckIsShown;
