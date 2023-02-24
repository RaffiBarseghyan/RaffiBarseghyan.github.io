import style from "./sliderGoal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useTranslation } from "react-i18next";
import AddBasket from "../AddBasket";

function SliderGoal({ data, file, text }) {
  const { t } = useTranslation();

  return (
    <>
      <h2 className={style.swiperTitle}>{t(text)}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        position={"center"}
        navigation
        slidesPerView={4}
        breakpoints={{
          1200: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          990: {
            spaceBetween: 0,
            slidesPerView: 3,
          },
          700: {
            spaceBetween: 0,
            slidesPerView: 2,
          },
          200: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        <div className="d-flex">
          {data.map((item) => {
            let x = 0;
            return (
              <SwiperSlide
                className={`d-flex flex-column align-items-center ${style.boxSize}`}
              >
                {file.map((items) => {
                  if (items.prodId == item.id && x == 0) {
                    x++;
                    return (
                      <div
                        key={item.prodId}
                        className={`${style.box} container`}
                        style={{
                          backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                        }}
                      ></div>
                    );
                  }
                })}
                <h2 className={style.boxH2}>{item.name}</h2>
                <p className={style.boxP}>
                  {item.gin}
                  {t("taradram")}
                </p>
                <button className={style.boxButton}>
                  <AddBasket data={item.id item} />
                </button>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
}

export default SliderGoal;
