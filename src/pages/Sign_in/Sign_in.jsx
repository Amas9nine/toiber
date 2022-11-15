import React from "react";
import scss from "./Sign_in.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Sign_in() {
  const { t } = useTranslation();
  return (
    <>
      <section className={scss.sign_main}>
        <div className={scss.left_ornament}></div>
        <div className={scss.right_ornament}></div>
        <div className={scss.container}>
          <div className={scss.sign}>
            <img clasname={scss.Logo} src="./images/signIn/logo.svg" alt="logo" />
            <form>
              <input type="email" placeholder={t("sign_in.email")} />
              <input type="password" placeholder={t("sign_in.password")} />
            </form>
            <Link to="#" className={scss.forgot}>
              {t("sign_in.forgot")}
            </Link>
            <button>
              <h3>{t("sign_in.sign_in")}</h3>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sign_in;
