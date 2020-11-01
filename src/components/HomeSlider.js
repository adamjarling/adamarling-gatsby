import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import HomeHero from "./heros/Home";
import FurbabyHero from "./heros/Furbaby";
import StageHero from "./heros/Stage";

SwiperCore.use([Autoplay, Navigation]);

function HomeSlider(props) {
  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      autoplay={{ delay: 5000 }}
      navigation
      slidesPerView={1}
      speed={1000}
    >
      <SwiperSlide>
        <HomeHero />
      </SwiperSlide>
      <SwiperSlide>
        <FurbabyHero />
      </SwiperSlide>
      <SwiperSlide>
        <StageHero />
      </SwiperSlide>
    </Swiper>
  );
}

HomeSlider.propTypes = {};

export default HomeSlider;
