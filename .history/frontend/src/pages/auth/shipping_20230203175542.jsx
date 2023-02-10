import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import style from "./shipping.module.scss";

export default function Shipping() {
  const [email, setemail] = useState("");


  const emailChange = (e) => {
    setemail(e.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>Customer Info</h2>
        <div
          className={`d-flex flex-row align-items-center mb-4 ${style.md_textbox1}`}
        >
          <MDBIcon fas icon="envelope me-3" size="lg" />
          <input
            onChange={emailChange}
            className={`${email ? `${style.has_value}` : ""}`}
            id="textbox2"
            type="email"
            // value={email}
          />
          <label htmlFor="textbox2">Your Email</label>
        </div>
      </div>
    </>
  );
}