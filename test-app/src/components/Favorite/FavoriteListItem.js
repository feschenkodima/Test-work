import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdFavorite } from "react-icons/md";
import classes from "../../styles/users.module.scss";
import { removeFromFavorite } from "../../store/actions";
import { AiFillHtml5 } from "react-icons/ai";
import { SiEventbrite } from "react-icons/si";
function FavoriteListItem({ item }) {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const deleteFromFavorite = (value) => {
    dispatch(removeFromFavorite(value));
  };
  return (
    <div className={classes.users_item}>
      <img
        src={item.avatar_url}
        alt={item.login}
        className={classes.users_item__img}
      />

      <div className={classes.users_item__text}>
        <h3>{item.login}</h3>
        <span>ID:{item.id}</span>
        <button
          onClick={() => {
            isActive ? setActive(false) : setActive(true);
          }}
        >
          CLick for more
        </button>
        {isActive ? (
          <div className={classes.show_more__wrapper}>
            <p>{item.type}</p>
            <a href={item.events_url}>
              <SiEventbrite />
            </a>
            <a href={item.html_url}>
              <AiFillHtml5 />
            </a>
          </div>
        ) : (
          ""
        )}
        <MdFavorite
          style={{ color: "red", fontSize: "40px" }}
          onClick={() => {
            deleteFromFavorite(item);
          }}
        />
      </div>
    </div>
  );
}
export default FavoriteListItem;
