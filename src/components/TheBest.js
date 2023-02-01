import React from "react";
import "./TheBest.css";
import { TheBestIcon } from "../assets/theBestIcon";
import DecoreWave from "../assets/decore wave.png";
import BestGirl from "../assets/the-best-girl.png";

const TheBest = () => {
  return (
    <div className="the-best">
      <div className="the-best-container">
        <div className="the-best-header">
          <h3>The best surf clothes and other water sports</h3>
          <div className="the-best-right-head">
            <div className="right-head-icon">
              <TheBestIcon />
            </div>
            <div className="right-head-title">
              <p className="best-head">
                People are like waves - unique in nature.
              </p>

              <p className="best-middle">
                Our lycra is produced in limited quantities, it helps to
                emphasize your individuality.
              </p>

              <p className="best-end">
                Catch your wave with the Wave Harmony swimwear.
              </p>
            </div>
          </div>
        </div>
        <div className="the-best-content">
          <div className="the-best-left-card">
            <div className="left-card-imgWave">
              <img src={DecoreWave} alt="decore" />
            </div>
            <div className="left-card-all">
              <div className="left-card-flex">
                <div className="left-card-info">
                  <div className="left-card-info-title">
                    <p>Certified item</p>
                  </div>
                  <div className="left-card-info-desc">
                    <p>
                      All of our products are certified and manufactured in
                      accordance with
                    </p>
                  </div>
                </div>
                <div className="left-card-info">
                  <div className="left-card-info-title">
                    <p>Unique Design</p>
                  </div>
                  <div className="left-card-info-desc">
                    <p>
                      All of our products are certified and manufactured in
                      accordance with
                    </p>
                  </div>
                </div>
                <div className="left-card-info">
                  <div className="left-card-info-title">
                    <p>Accessories from SBS</p>
                  </div>
                  <div className="left-card-info-desc">
                    <p>
                      All of our products are certified and manufactured in
                      accordance with
                    </p>
                  </div>
                </div>
              </div>
              <div className="left-card-flex2">
                <div className="left-card-info">
                  <div className="left-card-info-title">
                    <p>Delivery in Russia and the World</p>
                  </div>
                  <div className="left-card-info-desc">
                    <p>
                      All of our products are certified and manufactured in
                      accordance with
                    </p>
                  </div>
                </div>
                <div className="left-card-info">
                  <div className="left-card-info-title">
                    <p>Sun protection SPF 50+</p>
                  </div>
                  <div className="left-card-info-desc">
                    <p>
                      All of our products are certified and manufactured in
                      accordance with
                    </p>
                  </div>
                </div>
                <div className="left-card-info">
                  <div className="left-card-info-title">
                    <p>Tailoring to your measurements</p>
                  </div>
                  <div className="left-card-info-desc">
                    <p>
                      All of our products are certified and manufactured in
                      accordance with
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="the-best-right-card">
            <img src={BestGirl} alt="girl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBest;
