import scss from "./qcode.module.scss";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function QRcodeBlock() {
  const { t } = useTranslation(["discountBlock"]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    db.collection("dataContent")
      .orderBy("id", "desc")
      .get()
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setCard(items);
      });
  }, []);
  return (
    <>
      <div className={scss.container}>
        <div className={scss.mainBlock}>
          <div className={scss.starsBlock}>
            <div className={scss.yellowBlock}>
              <div>
                <div>
                  <p className={scss.bonus}>{t("qrBlock.bonus")}</p>
                  <p className={scss.discount}>{t("qrBlock.discount")}</p>
                  <p className={scss.minusTen}>-10%</p>
                </div>
              </div>
            </div>
            <div className={scss.qcodeBlock}>
              <div>
                <div>
                  <p>{t("qrBlock.promocode")}</p>
                </div>
              </div>
              <div className={scss.qrBlock}>
                <img
                  className={scss.qrCode}
                  src="http://qrcoder.ru/code/?
                    https%3A%2F%2Fabout.google%2Fintl%2Fru_TJ&10&0"
                  alt="QRcode"
                />
              </div>
            </div>
            <div className={scss.qcodeDropDown}>
              <img
                className={scss.qrCode}
                src="http://qrcoder.ru/code/?
                    https%3A%2F%2Fabout.google%2Fintl%2Fru_TJ&10&0"
                alt="QRcode"
              />
              <div>
                <div>
                  <p>{t("qrBlock.promocode")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.aside}>
          <div className={scss.section}>
            <p className={scss.upperText}>{t("qrBlock.advantage")}</p>
            <div className={scss.text}>
              {card.map((item) => (
                <div>
                  <img src={item.img} alt="img" />
                  <div className={scss.title}>{t(item.title)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QRcodeBlock;
