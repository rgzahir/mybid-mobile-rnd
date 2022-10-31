import { FunctionComponent } from "react";

export const CheckActiveFilter: FunctionComponent<TCheckActiveFilterProps> = (
  currentFilter,
  item
) => {
  if (item === currentFilter) return { marginRight: 12, fontWeight: "bold" };
  else return { marginRight: 12, opacity: 0.5 };
};
