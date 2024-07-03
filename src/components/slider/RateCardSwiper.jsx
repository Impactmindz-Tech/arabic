import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RateCards from "../cards/RateCard/RateCards";


const breakPoints={
  // when window width is >= 320px
  200: {
    slidesPerView: 1,
    spaceBetween: 0
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 10
  }
};
const RateCardSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      breakpoints={breakPoints}

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
