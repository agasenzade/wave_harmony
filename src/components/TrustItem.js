import React from "react";
import trustSwip from "../assets/trust-swiper.png";
import trustSwip2 from "../assets/trust-swipper-img.png";
import trustSwip3 from "../assets/trust-swipper-img2.png";
import trustSwip4 from "../assets/trust-swipper-img3.png";
import Button from "./Button";
import "./TrustItem.css";

const TrustItem = ({ name }) => {
  return (
    <div className="trust-item-container">
      <div className="trust-item-left-card">
        <img src={trustSwip} alt="swip" />
      </div>
      <div className="trust-item-right-card">
        <div className="trust-item-right-name">
          <p>{name}</p>
        </div>
        <div className="trust-item-mail">
          <a href="@reginatodorenko">@reginatodorenko</a>
          <p>8.5 million subscribers</p>
        </div>
        <div className="right-item-card-desc">
          <p>
            Blogger, TV presenter, singer, host of the Eagle and Tails program,
            a young mother and just a super charismatic person, catching a wave
            with Wave Harmony
          </p>
        </div>
        <div className="right-item-card-footer">
          <a href="#" className="left-ahref">
            Read review
          </a>
          <a href="#">Regina's video</a>
        </div>
      </div>
    </div>
  );
};

export default TrustItem;
