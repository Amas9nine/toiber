import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import scss from "./SearchBlock.module.scss";

function SearchBlock() {
  const { t } = useTranslation();
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
              <img src="./images/slide/3.png" alt="backgraund_images" />
              <h1>{t("search_block.all")}</h1>
            </div>
            <Slider {...settings}>
              <img src="./images/slide/1.jpg" alt="wedding_photo" />
              <img src="./images/slide/2.jpg" alt="holiday_photo" />
            </Slider>
          </div>
          <nav className={scss.navbar}>
            <div className={scss.clik}>
              <h2>{t("search_block.clik")}</h2>
            </div>
            {active ? (
              <div className={scss.nav_form}>
                <form onSubmit={editSubmit}>
                  <input
                    className={scss.input_search}
                    type="text"
                    placeholder={t("search_block.search")}
                  />
                  <button>{t("search_block.find")}</button>
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
                      <h3>{t("search_block.restor.restor")}</h3>
                      <span className={restor ? scss.down : scss.up}></span>
                    </div>
                    <ul className={restor ? scss.list : scss.active}>
                      <li>
                        <Link to="/kafe">{t("search_block.restor.kafe")}</Link>
                      </li>
                      <li>
                        <Link to="/tea-house">{t("search_block.restor.chai")}</Link>
                      </li>
                      <li>
                        <Link to="/karaoke">{t("search_block.restor.karaoke")}</Link>
                      </li>
                      <li>
                        <Link to="/children's_cafes">{t("search_block.restor.child")}</Link>
                      </li>
                      <li>
                        <Link to="/banquet_hall">{t("search_block.restor.banket")}</Link>
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
                      <h3>{t("search_block.film.film")}</h3>
                      <span className={film ? scss.down : scss.up}></span>
                    </div>
                    <ul className={film ? scss.list : scss.active}>
                      <li>
                        <Link to="/video_shooting">{t("search_block.film.video")}</Link>
                      </li>
                      <li>
                        <Link to="/photo_shooting">{t("search_block.film.photo")}</Link>
                      </li>
                      <li>
                        <Link to="/slideshow">{t("search_block.film.slide")}</Link>
                      </li>
                      <li>
                        <Link to="/aerial_survey">{t("search_block.film.aero")}</Link>
                      </li>
                      <li>
                        <Link to="life_shooting">{t("search_block.film.laif")}</Link>
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
                      <h3>{t("search_block.decor.decor")}</h3>
                      <span className={decor ? scss.down : scss.up}></span>
                    </div>
                    <ul className={decor ? scss.list : scss.active}>
                      <li>
                        <Link to="/floristics">{t("search_block.decor.flor")}</Link>
                      </li>
                      <li>
                        <Link to="/stands">{t("search_block.decor.stend")}</Link>
                      </li>
                      <li>
                        <Link to="/confectionery">{t("search_block.decor.sweet")}</Link>
                      </li>
                      <li>
                        <Link to="/fireworks">{t("search_block.decor.salute")}</Link>
                      </li>
                      <li>
                        <Link to="/drapery">{t("search_block.decor.drap")}</Link>
                      </li>
                      <li>
                        <Link to="/garlands">{t("search_block.decor.garland")}</Link>
                      </li>
                      <li>
                        <Link to="/thematic_sets">{t("search_block.decor.sets")}</Link>
                      </li>
                      <li>
                        <Link to="/gift_for_guests">{t("search_block.decor.presents")}</Link>
                      </li>
                      <li>
                        <Link to="/candle">{t("search_block.decor.candles")}</Link>
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
                      <h3>{t("search_block.stage.stage")}</h3>
                      <span className={stage ? scss.down : scss.up}></span>
                    </div>
                    <ul className={stage ? scss.list : scss.active}>
                      <li>
                        <Link to="/dancers">{t("search_block.stage.dancers")}</Link>
                      </li>
                      <li>
                        <Link to="/animators">{t("search_block.stage.animator")}</Link>
                      </li>
                      <li>
                        <Link to="/magicians">{t("search_block.stage.magician")}</Link>
                      </li>
                      <li>
                        <Link to="/singers">{t("search_block.stage.singer")}</Link>
                      </li>
                      <li>
                        <Link to="/celebrity">{t("search_block.stage.celebrity")}</Link>
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
                      <h3>{t("search_block.leading.leading")}</h3>
                      <span className={leading ? scss.down : scss.up}></span>
                    </div>
                    <ul className={leading ? scss.list : scss.active}>
                      <li>
                        <Link to="/relevant">{t("search_block.leading.topical")}</Link>
                      </li>
                      <li>
                        <Link to="/bloggers">{t("search_block.leading.bloger")}</Link>
                      </li>
                      <li>
                        <Link to="/toastmaster">{t("search_block.leading.toastmaster")}</Link>
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
                      <h3>{t("search_block.wardrobe.wardrobe")}</h3>
                      <span className={wardrobe ? scss.down : scss.up}></span>
                    </div>
                    <ul className={wardrobe ? scss.list : scss.active}>
                      <li>
                        <Link to="/wedding_dresses">{t("search_block.wardrobe.weddres")}</Link>
                      </li>
                      <li>
                        <Link to="/themed_costumes">{t("search_block.wardrobe.temcostume")}</Link>
                      </li>
                      <li>
                        <Link to="/costumes">{t("search_block.wardrobe.costume")}</Link>
                      </li>
                      <li>
                        <Link to="/dress">{t("search_block.wardrobe.dress")}</Link>
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
                      <h3>{t("search_block.cortage.cortage")}</h3>
                      <span className={cortage ? scss.down : scss.up}></span>
                    </div>
                    <ul className={cortage ? scss.list : scss.active}>
                      <li>
                        <Link to="/limousine">{t("search_block.cortage.limousins")}</Link>
                      </li>
                      <li>
                        <Link to="/horse">{t("search_block.cortage.horse")}</Link>
                      </li>
                      <li>
                        <Link to="/motorbikes">{t("search_block.cortage.bike")}</Link>
                      </li>
                      <li>
                        <Link to="/boat">{t("search_block.cortage.boats")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div onClick={() => setActive(!active)} className={scss.search}>
                  <img src="./images/slide/search.svg" alt="search_icon" />
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
