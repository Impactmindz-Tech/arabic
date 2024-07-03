import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const breakPoints = {
  // when window width is >= 320px
  200: {
    slidesPerView: 3,
    spaceBetween: 2,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 6,
    spaceBetween: 1,
  },
};
const CategoryImageSlider = ({ imagesslider, category }) => {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={category ? 6 : 1}
      breakpoints={breakPoints}
    >
      {imagesslider?.map((item, index) => {
        return (
         
            <SwiperSlide key={index}>
              <img className="w-full" src={item.img} alt="" />
            </SwiperSlide>
        
        );
      })}
    </Swiper>
  );
};

export default CategoryImageSlider;
