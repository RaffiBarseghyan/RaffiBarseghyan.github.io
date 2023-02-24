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
      <div className={`${style.footerBg}>
        <div>
          <h3>Help</h3>
        </div>
        <div>
          <h3>About The Entertainer</h3>
        </div>
        <div>
          <h3>Useful links</h3>
        </div>
        <div>
          <h3>Other Information</h3>
        </div>
        <div>
          <h3>Follow us on</h3>
          <img src={FacebookLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
