import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const breakPoints = {
  // when window width is >= 320px
  200: {
    slidesPerView: 4,
    spaceBetween: 2,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 4,
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
            <div className="">
              <img className="sm:h-[20vw] sm:w-[20vw] w-24 h-24" src={item.img} alt="" />
              <p className="font-semibold pt-3 pl-7 sm:pl-2 sm:font-normal">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategoryImageSlider;
