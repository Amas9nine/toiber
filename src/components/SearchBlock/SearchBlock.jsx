import React from "react";
import Slider from "react-slick";
import scss from "./SearchBlock.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

function SearchBlock() {
  // const { t } = useTranslation();
  const [restor, setRestor] = useState(false);
  const [film, setFilm] = useState(false);
  const [decor, setDecor] = useState(false);
  const [stage, setStage] = useState(false);
  const [leading, setLeading] = useState(false);
  const [wardrobe, setWardrobe] = useState(false);
  const [cortage, setCortage] = useState(false);
  const [active, setActive] = useState(false);
  const [burger, setBurger] = useState(false);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000
  };
  const editSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section>
        <div className={scss.container}>
          <div className={scss.image_cont}>
            <div className={scss.all_need}>
              <img src="./images/slide/3.png" alt="#" />
              <h1>Всё, что вам нужно, уже здесь!</h1>
            </div>
            <Slider {...settings}>
              <img src="./images/slide/1.jpg" alt="photo" />
              <img src="./images/slide/2.jpg" alt="photo" />
            </Slider>
          </div>
          <nav className={scss.navbar}>
            {active ? (
              <div className={scss.nav_form}>
                <form onSubmit={editSubmit}>
                  <input className={scss.input_search} type="text" placeholder="Поиск..." />
                  <button>Найти</button>
                  <button onClick={() => setActive(!active)} className={scss.back_arrow}>
                    <span></span>
                  </button>
                </form>
              </div>
            ) : (
              <div className={scss.navigate}>
                <div
                  onClick={() => setBurger(!burger)}
                  className={burger ? scss.burger_active : scss.header_burger}
                >
                  <span></span>
                </div>
                <div className={burger ? scss.main_burger : scss.main_nav}>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setRestor(() => {
                          setRestor(!restor);
                          setFilm(false);
                          setDecor(false);
                          setStage(false);
                          setLeading(false);
                          setWardrobe(false);
                          setCortage(false);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Рестораны</h3>
                      <span className={restor ? scss.down : scss.up}></span>
                    </div>
                    <ul className={restor ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Кафе</Link>
                      </li>
                      <li>
                        <Link to="#">Чайхана</Link>
                      </li>
                      <li>
                        <Link to="#">Караоке бар</Link>
                      </li>
                      <li>
                        <Link to="#">Детские кафе</Link>
                      </li>
                      <li>
                        <Link to="#">Банкетный зал</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setFilm(() => {
                          setRestor(false);
                          setFilm(!film);
                          setDecor(false);
                          setStage(false);
                          setLeading(false);
                          setWardrobe(false);
                          setCortage(false);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Съемки</h3>
                      <span className={film ? scss.down : scss.up}></span>
                    </div>
                    <ul className={film ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Видео съемка</Link>
                      </li>
                      <li>
                        <Link to="#">Фото съемка</Link>
                      </li>
                      <li>
                        <Link to="#">Слайд-шоу</Link>
                      </li>
                      <li>
                        <Link to="#">Аэро съемка</Link>
                      </li>
                      <li>
                        <Link to="#">Лайф-съемка</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setDecor(() => {
                          setRestor(false);
                          setFilm(false);
                          setDecor(!decor);
                          setStage(false);
                          setLeading(false);
                          setWardrobe(false);
                          setCortage(false);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Оформление</h3>
                      <span className={decor ? scss.down : scss.up}></span>
                    </div>
                    <ul className={decor ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Флористика</Link>
                      </li>
                      <li>
                        <Link to="#">Стенды</Link>
                      </li>
                      <li>
                        <Link to="#">Кондитерные изделия</Link>
                      </li>
                      <li>
                        <Link to="#">Салюты</Link>
                      </li>
                      <li>
                        <Link to="#">Драпировка</Link>
                      </li>
                      <li>
                        <Link to="#">Гирлянды</Link>
                      </li>
                      <li>
                        <Link to="#">Тематические наборы</Link>
                      </li>
                      <li>
                        <Link to="#">Подарки гостям</Link>
                      </li>
                      <li>
                        <Link to="#">Свечи</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setStage(() => {
                          setRestor(false);
                          setFilm(false);
                          setDecor(false);
                          setStage(!stage);
                          setLeading(false);
                          setWardrobe(false);
                          setCortage(false);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Эстрада</h3>
                      <span className={stage ? scss.down : scss.up}></span>
                    </div>
                    <ul className={stage ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Танцоры</Link>
                      </li>
                      <li>
                        <Link to="#">Аниматоры</Link>
                      </li>
                      <li>
                        <Link to="#">Фокусники</Link>
                      </li>
                      <li>
                        <Link to="#">Певцы</Link>
                      </li>
                      <li>
                        <Link to="#">Известные</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setLeading(() => {
                          setRestor(false);
                          setFilm(false);
                          setDecor(false);
                          setStage(false);
                          setLeading(!leading);
                          setWardrobe(false);
                          setCortage(false);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Ведущие</h3>
                      <span className={leading ? scss.down : scss.up}></span>
                    </div>
                    <ul className={leading ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Актуальные</Link>
                      </li>
                      <li>
                        <Link to="#">Блогеры</Link>
                      </li>
                      <li>
                        <Link to="#">Тамада</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setWardrobe(() => {
                          setRestor(false);
                          setFilm(false);
                          setDecor(false);
                          setStage(false);
                          setLeading(false);
                          setWardrobe(!wardrobe);
                          setCortage(false);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Гардероб</h3>
                      <span className={wardrobe ? scss.down : scss.up}></span>
                    </div>
                    <ul className={wardrobe ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Свадебные наряды</Link>
                      </li>
                      <li>
                        <Link to="#">Тематические костюмы</Link>
                      </li>
                      <li>
                        <Link to="#">Костюмы</Link>
                      </li>
                      <li>
                        <Link to="#">Платья</Link>
                      </li>
                    </ul>
                  </div>
                  <div className={scss.dropdown}>
                    <div
                      onClick={() =>
                        setCortage(() => {
                          setRestor(false);
                          setFilm(false);
                          setDecor(false);
                          setStage(false);
                          setLeading(false);
                          setWardrobe(false);
                          setCortage(!cortage);
                        })
                      }
                      className={scss.btn}
                    >
                      <h3>Картеж</h3>
                      <span className={cortage ? scss.down : scss.up}></span>
                    </div>
                    <ul className={cortage ? scss.list : scss.active}>
                      <li>
                        <Link to="#">Лимузин</Link>
                      </li>
                      <li>
                        <Link to="#">Лошади</Link>
                      </li>
                      <li>
                        <Link to="#">Мотоциклы</Link>
                      </li>
                      <li>
                        <Link to="#">Лодки</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div onClick={() => setActive(!active)} className={scss.search}>
                  <img src="./images/slide/search.svg" alt="search" />
                </div>
              </div>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}

export default SearchBlock;
