import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import axios, { Axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { FaBeer1, FaRegUser } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaBeer2, FaMinus } from "react-icons/fa";
import { FaBeer3, FaPlus } from "react-icons/fa";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import NumericInput from "react-numeric-input";

export default function Clicks(id) {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState([]);
  const [imgChange, setImgChange] = useState("");
  const [max, setMax] = useState(100);

  const handleClose = () => setShow(false);

  const { t } = useTranslation();

  const windowLoc = (evt) => {
    window.location.replace("http://localhost:3000/login");
  };

  const handleShow = (evt) => {
    setShow(true);
  };

  const imageChange = (evt) => {
    setImgChange(evt.target.value);
  };
  let x = 0;
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        rect: {},
      };
    }

    componentDidMount() {
      this.setState({
        rect: ReactDOM.findDOMNode(this).getBoundingClientRect(),
      });
    }

    render() {
      return (
        <div className="container">
          <Button parentRect={this.state.rect} />
        </div>
      );
    }
  }

  class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isClicked: false,
        rect: {
          top: 0,
          right: 0,
        },
      };
    }

    clickHandler = () => {
      this.setState({
        isClicked: true,
      });
    };

    componentDidMount() {
      this.state.rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    }

    render() {
      const { isClicked, rect } = this.state;
      const { parentRect } = this.props;
      const btnClass = `btn btn-primary ${
        isClicked ? "btn-move-clicked" : "btn-move"
      }`;
      const discClass = `moving-disc ${isClicked ? "moving-disc-clicked" : ""}`;
      const top = `${rect.top}px`;
      const right = `${rect.right - parentRect.width / 2 + 15}px`;
      const discStyle = { top, right };
      return (
        <div>
          <button className={btnClass} onClick={this.clickHandler}>
            Add to cart
          </button>
          <MovingDiscWrapper>
            <div className={discClass} style={discStyle}></div>
          </MovingDiscWrapper>
        </div>
      );
    }
  }

  const MovingDiscWrapper = ({ children }) => {
    return ReactDOM.createPortal(
      children,
      document.getElementById("movingDisc-root")
    );
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
            size="xl"
          >
            <Modal.Header closeButton className={style.button1}>
              <div className={`col-sm-5 ${style.prodName}`}>{id.name}</div>
            </Modal.Header>

            <Modal.Body className={`${style.moreBody} container`}>
              <Modal.Title className={`${style.itemName} d-flex`}>
                <div className="col-sm-6">
                  {id.file.map((items) => {
                    if (items.prodId == id.id && imgChange == items.id) {
                      return (
                        <div className="col-sm-7" key={items.id}>
                          <div
                            className={`${style.boxImageChange} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        </div>
                      );
                    }
                    if (items.prodId == id.id && imgChange == "" && x == 0) {
                      x++;
                      return (
                        <div className="col-sm-7" key={items.id}>
                          <div
                            className={`${style.boxImageChange} container`}
                            style={{
                              backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                            }}
                          ></div>
                        </div>
                      );
                    }
                  })}
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="col-sm-9"
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
                    {id.file.map((items) => {
                      if (items.prodId == id.id) {
                        return (
                          <SwiperSlide
                            key={items.id}
                            className={`d-flex flex-column align-items-center ${style.boxSize}`}
                          >
                            <div className="col-sm-9">
                              <div
                                className={`${style.box1} container`}
                                style={{
                                  backgroundImage: `url("http://barmatoys.loc/storage/uploads/${items.image}")`,
                                }}
                              >
                                <button
                                  value={items.id}
                                  onClick={imageChange}
                                  className={style.imageChangeBtn}
                                ></button>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      }
                    })}
                  </Swiper>
                </div>
                <div className="col-sm-6 d-flex justify-content-center">
                  <div className={style.cradlesBigBox}>
                    <NumericInput
                      mobile
                      className={`form-control ${style.cradlesBox}`}
                      strict
                      value={1}
                      min={1}
                      max={max}
                      editable="true"
                      textColor="#B0228C"
                      iconstyle={{
                        color: "white",
                        justifycontent: "space-between",
                        alignitems: "center",
                      }}
                      rightbuttonbackgroundcolor="#eaeaea00"
                    />
                  </div>
                  <div>
                    <Button className={style.saveBasket} variant="primary">
                      {t("Addtobasket")}
                    </Button>

                    <div class="cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564
         2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0
         .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9
         7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"
                        />
                      </svg>
                    </div>
                    <div id="movingDisc-root"></div>
                    <div id="root"></div>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Body>
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
