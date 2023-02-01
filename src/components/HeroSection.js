import React from "react";
import mobileWave from "../assets/wave-mobile.png";
import desktopWave from "../assets/wave-desktop.png";
import girlMain from "../assets/hero-girl-main.png";
import girlSwipper from "../assets/hero-swipper.png";
import girlSwipper2 from "../assets/hero-swipper2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./HeroSection.css";

import { Pagination } from "swiper";

const HeroSection = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay:5000,
          disableOnInteraction:false
        }

        }
        
        className="hero-swipper"
        initialSlide={1}
      >
        <SwiperSlide>
          {" "}
          <section className="hero">
            <div className="hero-container">
              <div className="hero-images">
                <img className="waveDesktop" src={desktopWave} alt="wave" />
                <img className="waveMobile" src={mobileWave} alt="wave" />
              </div>
              <div className="hero-content">
                <div className="hero-content-text">
                  <h1 className="hero-title">Ocean</h1>
                  <p className="hero-subtitle">with long sleeves</p>
                  <Link to="/catalog">
                    <Button text="Buy Ocean" variant="random" />
                  </Link>
                </div>

                <div className="hero-content-img">
                  <img src={girlMain} alt="girl" />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section className="hero">
            <div className="hero-container">
              <div className="hero-images">
                <img className="waveDesktop" src={desktopWave} alt="wave" />
                <img className="waveMobile" src={mobileWave} alt="wave" />
              </div>
              <div className="hero-content">
                <div className="hero-content-text">
                  <h1 className="hero-title">Sea</h1>
                  <p className="hero-subtitle">with long sleeves</p>

                  <Link to="/catalog">
                    <Button text="Buy Sea" variant="random" />
                  </Link>
                </div>

                <div className="hero-content-img">
                  <img src={girlSwipper} alt="girl" />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section className="hero">
            <div className="hero-container">
              <div className="hero-images">
                <img className="waveDesktop" src={desktopWave} alt="wave" />
                <img className="waveMobile" src={mobileWave} alt="wave" />
              </div>
              <div className="hero-content">
                <div className="hero-content-text">
                  <h1 className="hero-title">Beach</h1>
                  <p className="hero-subtitle">with long sleeves</p>

                  <Link to="/catalog">
                    <Button text="Buy Beach" variant="random" />
                  </Link>
                </div>

                <div className="hero-content-img">
                  <img src={girlSwipper2} alt="girl" />
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
