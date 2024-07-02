import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RateCards from "../cards/RateCard/RateCards";

const RateCardSwiper = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <RateCards />
      </SwiperSlide>
      <SwiperSlide>
        <RateCards />
      </SwiperSlide>
      <SwiperSlide>
        <RateCards />
      </SwiperSlide>
      <SwiperSlide>
        <RateCards />
      </SwiperSlide>
    </Swiper>
  );
};

export default RateCardSwiper;
