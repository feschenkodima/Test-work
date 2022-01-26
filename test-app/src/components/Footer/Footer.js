import React from "react";
import classes from "../../styles/footer.module.scss";

function Footer() {
  return (
    <footer className={classes.footer_wrapper}>
      <div className={classes.footer_logo__wrapper}>
        <a href="/" className={classes.footer_logo__item}>
          <img
            src="http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png"
            alt=""
            className={classes.footer_logo__img}
          />
        </a>
      </div>
      <div className={classes.footer_buttons}>
        <a href="/">Home</a>
        <a href="/favorite">Favourite users</a>
      </div>
    </footer>
  );
}
export default Footer;
