import css from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HelpLinks, ServiceLinks } from "../../constants/FooterLinks";
function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className={css.container}>
          <div className={css.Wrapper}>
            <div className={css.FooterLinks}>
              <div className={css.HelpLink}>
                <p>{t("footer.Help")}</p>
                {HelpLinks.map((items) => (
                  <Link to="#" key={items.id}>
                    {t("footer." + items.title)}
                  </Link>
                ))}
              </div>
              <div className={css.ServiceLink}>
                <p>{t("footer.Service")}</p>
                {ServiceLinks.map((items) => (
                  <Link to="#" key={items.id}>
                    {t("footer." + items.title)}
                  </Link>
                ))}
              </div>
            </div>
            <div className={css.FooterInfo}>
              <div className={css.LogoImg}>
                <img src="./images/footer/logo.svg" alt="logo" />
              </div>
              <span>{t("footer.Info")}</span>
              <p>{t("footer.Social")}</p>
              <div className={css.Social}>
                <img className={css.img} src="./images/footer/instagram.svg" alt="instagram" />
                <img className={css.img} src="./images/footer/facebook.svg" alt="facebook" />
                <img className={css.img} src="./images/footer/twitter.svg" alt="twitter" />
                <img className={css.img} src="./images/footer/pinterest.svg" alt="pinterest" />
              </div>
            </div>
          </div>
          <div className={css.Text}>
            <p>@{t("footer.Reserv")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
