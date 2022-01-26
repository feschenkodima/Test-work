import React, { useState } from "react";
import classes from "../../styles/users.module.scss";
import { MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToFavoriteArray } from "../../store/actions";
import { AiFillHtml5 } from "react-icons/ai";
import { SiEventbrite } from "react-icons/si";

function UsersListItem({ item }) {
  const dispath = useDispatch();
  const [isActive, setActive] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const addToFavorite = (value) => {
    dispath(addToFavoriteArray(value));
    setFavorite(true);
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

        {!isFavorite ? (
          <MdFavorite
            style={{ fontSize: "40px" }}
            onClick={() => {
              addToFavorite(item);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default UsersListItem;
