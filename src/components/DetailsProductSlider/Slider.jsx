import Images from "../../constant/Images";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="m-auto  flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-[150px]  object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-auto  flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-[150px] object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-auto  flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-[150px] object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
