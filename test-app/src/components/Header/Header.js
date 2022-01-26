import React from "react";
import BurgerMenu from "./Burger";
import classes from "../../styles/header.module.scss";
import { FiSearch } from "react-icons/fi";
function Header(props) {
  const { onChange } = props;
  return (
    <header className={classes.header_wrapper}>
      <div className={classes.header_logo}>
        <a href="/" className={classes.header_logo__item}>
          <img
            src="http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png"
            alt=""
            className={classes.header_logo__img}
          />
        </a>
      </div>
      <form className={classes.header__form}>
        <input
          type="text"
          placeholder="Search on document..."
          className={classes.header__form_input}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
        <FiSearch className={classes.header__form_icon} />
      </form>
      <BurgerMenu />
    </header>
  );
}
export default Header;
