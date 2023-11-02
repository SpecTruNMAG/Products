import Logo from "@/assets/svg/logo.svg";
import Order from "@/assets/svg/order.svg";
import Menu from "@/assets/svg/menu.svg";
import User from "@/assets/svg/user.svg";
import style from "@/components/ui/Header/header.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__logo}>
          <Logo
            className={style.header__logo__item}
            width="60px"
            height="60px"
          />
        </div>

        <div className={style.header__items}>
          <Order
            className={style.header__item__item}
            width="40px"
            height="40px"
          />
          <User
            className={style.header__item__item}
            width="40px"
            height="40px"
          />
          <Menu
            className={style.header__item__item}
            width="40px"
            height="40px"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
