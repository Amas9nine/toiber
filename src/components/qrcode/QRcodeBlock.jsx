import scss from "./qcode.module.scss";
import { db } from "../../firebase";
import { useState } from "react";
import { useEffect } from "react";

function QRcodeBlock() {
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
                  <p className={scss.bonus}>БОНУС</p>
                  <p className={scss.discount}>СКИДКА</p>
                  <p className={scss.minusTen}>-10%</p>
                </div>
              </div>
            </div>
            <div className={scss.qcodeBlock}>
              <div>
                <div>
                  <p>Выберите ресторан из нашей побдорки хитов и получи промокод</p>
                </div>
              </div>
              <div className={scss.qr__block}>
                <img
                  className={scss.qr__code}
                  src="http://qrcoder.ru/code/?
                    https%3A%2F%2Fabout.google%2Fintl%2Fru_TJ&10&0"
                />
              </div>
            </div>
            <div className={scss.qcodeBlock__DropDown}>
              <img
                className={scss.qr__code}
                src="http://qrcoder.ru/code/?
                    https%3A%2F%2Fabout.google%2Fintl%2Fru_TJ&10&0"
              />
              <div>
                <div>
                  <p>Выберите ресторан из нашей побдорки хитов и получи промокод</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={scss.aside}>
          <div className={scss.section}>
            <span className={scss.upperText}>ПРЕИМУЩЕСТВА</span>
            <div className={scss.text}>
              {card.map((item) => (
                <div>
                  <img src={item.img} alt="content" />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
            <div className={scss.text__DropDown}>
              {card.map((item) => (
                <div>
                  <img src={item.img} alt="content" />
                  <span>{item.title}</span>
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
