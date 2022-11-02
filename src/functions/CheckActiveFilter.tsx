export const CheckActiveFilter: ICheckActiveFilterProps = (
  currentFilter,
  item
) => {
  if (item.includes(currentFilter))
    return { marginRight: 12, fontWeight: "bold" };
  else return { marginRight: 12, opacity: 0.5 };
};
