import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";
import Swiper, { A11y, Navigation, Pagination, Scrollbar } from "swiper";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);

  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = (evt) => {
    window.location.replace("http://localhost:3000/login");
  };

  const handleShow = (evt) => {
    console.log(id.image);

    setShow(true);
  };

  return (
    <div id="asdasdasd">
      <button
        onClick={handleShow}
        className={style.basketButtonBasket}
      ></button>

      {localStorage.getItem("loginEmail") ? (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className="col-sm-5">Զամբյուղի մեջ</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={style.itemName}>
                {/* <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  position={"center"}
                  navigation
                  slidesPerView={1}
                >
                  <SwiperSlide
                    className={`d-flex flex-column align-items-center ${style.boxSize}`}
                  >
                    <div
                      key={id.prodId}
                      className={`${style.box} container`}
                      style={{
                        backgroundImage: `url("http://barmatoys.loc/storage/uploads/${id.image}")`,
                      }}
                    ></div>
                  </SwiperSlide>
                </Swiper> */}
                <div
                  key={id.prodId}
                  className={`${style.box} container`}
                  style={{
                    backgroundImage: `url("http://barmatoys.loc/storage/uploads/${id.image}")`,
                  }}
                ></div>
              </Modal.Title>
            </Modal.Body>
            <Modal.Footer className={style.footer}>
              <Button
                className={style.cancel}
                variant="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className={style.save} variant="primary">
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            className={style.more}
            show={show}
            onHide={handleClose}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className="col-sm-5">{t("AddtoFavorites")}</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <div className="text-center">
                <FaRegUser
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "relative",
                    color: "#444",
                  }}
                />
              </div>
              <Modal.Title className={style.itemName}>
                {t("PleaseLogin")}
              </Modal.Title>
            </Modal.Body>
            <Modal.Footer className={style.footer}>
              <Button
                className={style.cancel}
                variant="secondary"
                onClick={handleClose}
              >
                {t("Cancel")}
              </Button>
              <Button
                onClick={windowLoc}
                className={style.save}
                variant="primary"
              >
                {t("Login")}
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}
