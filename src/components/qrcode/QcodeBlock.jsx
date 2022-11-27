// import QRCode from "react-qr-code";
import scss from "./qcode.module.scss";
import dataContent from "./data/dataContent";

function QcodeBlock() {
  return (
    <>
      <div className={scss.container}>
        <div className={scss.mainBlock}>
          <div className={scss.starsBlock}>
            <div className={scss.yellowBlock}>
              <div>
                <div>
                  <div className={scss.bonus}>БОНУС</div>
                  <div className={scss.discount}>СКИДКА</div>
                  <div className={scss.minusTen}>-10%</div>
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
                {/* 
                1) ЭТО ОПЦИЯ ТОЖЕ ЕСТЬ НО НЕ РАБОАТЕТ ПРИ НАВЕДЕНИИ СКАНЕРА НА ЭКРАН
                2) А ВОТ ВТОРАЯ ВЕРСИЯ С IMG РАБОТАЕТ НА УРА !
                 <QRCode
                  className={scss.qr__code}
                  value="http://qrcoder.ru/code/?
                  https%3A%2F%2Fabout.google%2Fintl%2Fru_TJ&10&0"
                /> 
                */}
                <img
                  className={scss.qr__code}
                  src="http://qrcoder.ru/code/?
                    https%3A%2F%2Fabout.google%2Fintl%2Fru_TJ&10&0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={scss.aside}>
          <div className={scss.section}>
            <div>ПРЕИМУЩЕСТВА</div>
            <div className={scss.text}>
              {dataContent.map((item) => (
                <div>
                  <div>
                    <img src={item.img} alt="content" />
                  </div>
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

export default QcodeBlock;
