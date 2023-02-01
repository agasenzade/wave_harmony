import React, { useRef, useState } from "react";
import trustSwip from "../assets/trust-swiper.png";
import trustSwip2 from "../assets/trust-swipper-img.png";
import trustSwip3 from "../assets/trust-swipper-img2.png";
import trustSwip4 from "../assets/trust-swipper-img3.png";
import Button from "./Button";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Trust.css";

import TrustItem from "./TrustItem";

const Trust = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  return (
    <div className="trust">
      <div className="trust-header">
        <h3>We are trusted</h3>
        <Button text="Load more" variant="stroke" />
      </div>
      <div className="swiper-container">
        <Swiper
          className="my-swiper-trust-thumbnail"
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <img src={trustSwip} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trustSwip2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trustSwip3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={trustSwip4} alt="" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="my-swiper-trust"
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          <SwiperSlide>
            <TrustItem name="Regina" />
          </SwiperSlide>
          <SwiperSlide>
            <TrustItem name="Anna" img={trustSwip2} alt="anna" />
          </SwiperSlide>
          <SwiperSlide>
            <TrustItem name="Alina" />
          </SwiperSlide>
          <SwiperSlide>
            <TrustItem name="Victoria" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trust;
