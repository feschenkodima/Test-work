let initialState = JSON.parse(localStorage.getItem("test_store")) || {
  favorites: [],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_ITEM_FROM_FAVORITE":
      return {
        favorites: [
          ...state.favorites.filter((favorite) => favorite !== action.payload),
        ],
      };
    case "REMOVE_ALL_FAVORITES":
      return {
        favorites: [],
      };
    default:
      return {
        ...state,
      };
  }
}
export default reducer;
