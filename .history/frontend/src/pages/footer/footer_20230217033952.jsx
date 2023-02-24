import React from "react";
import style from "./footer.module.scss";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import TwitterLogo from "../../assets/images/TwitterLogo.png";
import TIKTOK from "../../assets/images/TIKTOK.png";
import InstagramLogo from "../../assets/images/InstagramLogo.png";
import YouTubeLogo from "../../assets/images/YouTubeLogo.png";

function Footer() {
  return (
    <>
      <div
        className={`${style.footerBg} d-flex align-items-start justify-content-evenly`}
      >
        <div>
          <h3>Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Help Centre</li>
            <li>Product Safety Notices</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3>About The Entertainer</h3>
          <ul>
            <li>About us</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3>Useful links</h3>
        </div>
        <div>
          <h3>Other Information</h3>
        </div>
        <div className={style.follow}>
          <h3>Follow us on</h3>
          <a href="https://www.facebook.com/"><img src={FacebookLogo} alt="" /></a>
          <a href=""><img src={TwitterLogo} alt="" /></a>
          <a href=""><img src={TIKTOK} alt="" /></a>
          <a href=""><img src={InstagramLogo} alt="" /></a>
          <a href=""><img src={YouTubeLogo} alt="" /></a>
        </div>
      </div>
    </>
  );
}

export default Footer;
