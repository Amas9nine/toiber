import scss from "./Header.module.scss";
import "../../App.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className={scss.overlay}>
        <div className="container">
          <div className={scss.header__content}>
            <button
              onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
              className={scss.burger__menu}
            >
              <img src="./images/header/BurgerMenu.svg" alt="BurgerMenuIcon" />
            </button>
            <div className={scss.left__content}>
              <Link to="/">
                <img src="./images/header/Logo.svg" alt="LogoImage" />
              </Link>
              <nav>
                <Link to="#">{t("header.Perfomers")}</Link>
                <Link to="#">{t("header.Restorans")}</Link>
                <Link to="#">{t("header.Cooperation")}</Link>
              </nav>
            </div>
            <div className={scss.right__content}>
              <Link to="#">{t("header.SignUp")}</Link>
              <Link to="#">{t("header.SignIn")}</Link>
            </div>
          </div>
        </div>
        {openBurgerMenu && (
          <div onClick={() => setOpenBurgerMenu(false)} className={scss.burger__menu__container}>
            <div onClick={(e) => e.stopPropagation()} className={scss.burger__menu__content}>
              <div>
                <Link to="#">{t("header.Perfomers")}</Link>
              </div>

              <div>
                <Link to="#">{t("header.Restorans")}</Link>
              </div>

              <div>
                <Link to="#">{t("header.Cooperation")}</Link>
              </div>
              <div>
                <Link to="#">{t("header.SignUp")}</Link>
              </div>
              <div>
                <Link to="#">{t("header.SignIn")}</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
