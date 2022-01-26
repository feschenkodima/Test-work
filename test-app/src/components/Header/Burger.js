import { scaleDown as Menu } from "react-burger-menu";
import classes from "../../styles/header.module.scss";
import "./burger.css";

function BurgerMenu() {
  return (
    <div className={classes.burger_menu}>
      <Menu right noOverlay fallDown>
        <a className="menu-item" href="/">
          Все пользователи
        </a>
        <a className="menu-item" href="/favorite">
          Выбранные пользователи
        </a>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
