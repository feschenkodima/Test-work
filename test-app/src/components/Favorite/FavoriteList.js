import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../styles/users.module.scss";
import { removeAllFavorite } from "../../store/actions";
import FavoriteListItem from "./FavoriteListItem";
function FavoriteList() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const favorites = store.favorites;
  const favoritesItems = favorites.map((user, index) => {
    return <FavoriteListItem item={user} key={index} />;
  });
  return (
    <section>
      <h1 className={classes.users_title}>Favorite users</h1>
      <div className={classes.users_container}>{favoritesItems}</div>
      <div className={classes.users_favorite__deleteAll}>
        {favorites.length === 0 ? (
          ""
        ) : (
          <button
            className={classes.users_favorite__deleteAll_button}
            onClick={() => {
              dispatch(removeAllFavorite());
            }}
          >
            Delete all favorites
          </button>
        )}
      </div>
    </section>
  );
}
export default FavoriteList;
