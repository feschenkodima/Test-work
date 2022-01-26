export let addToFavoriteArray = (value) => ({
  type: "ADD_ITEM_TO_FAVORITE",
  payload: value,
});
export let removeAllFavorite = (value) => ({
  type: "REMOVE_ALL_FAVORITES",
  payload: value,
});
export let removeFromFavorite = (value) => ({
  type: "REMOVE_ITEM_FROM_FAVORITE",
  payload: value,
});
// export const setFavorite = (id) => ({
//   type: "ADD_ITEM_TO_FAVORITE",
//   payload: id,
// });
