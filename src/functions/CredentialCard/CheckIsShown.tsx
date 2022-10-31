import { Primary, White } from "../../styles";

export const CheckIsShown = (isShownLocal: boolean) => {
  if (isShownLocal) {
    return Primary.primary_blue;
  }

  return White;
};

export default CheckIsShown;
