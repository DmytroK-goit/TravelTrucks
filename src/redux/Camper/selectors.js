export const campersSelectors = {
  selectCampers: (state) => state.campers.items || [],
  selectCampersTotal: (state) => state.campers.total,
  selectCamperId: (state) => state.campers.itemId || null,
};
