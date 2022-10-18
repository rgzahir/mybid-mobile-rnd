export const CheckActiveFilter = (item, currentFilter) => {
  if (item === currentFilter) return {marginRight: 12, fontWeight: 'bold'};
  else return {marginRight: 12, opacity: 0.5};
};

export default CheckActiveFilter;
