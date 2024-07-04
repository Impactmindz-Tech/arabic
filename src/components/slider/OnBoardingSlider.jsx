import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import Images from "../../constant/Images";

const OnBoardingSlider = () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="pb-20 m-auto w-[720px] relative sm:w-[100vw] py-2">
          <div className="flex items-center justify-center">
            <img
              src={Images.boarding1}
              alt="boarding1"
              className="sm:w-[70vw] "
            />
          </div>
          <h1 className="text-center font-bold text-2xl py-2">تطبيقنا</h1>
          <p className="text-center font-bold text-[#272727] py-2">
            تطبيق شامل كل اللى انت محتاجه فى تطبيق واحد
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-20 m-auto w-[720px] relative sm:w-[100vw] py-2">
          <div className="flex items-center justify-center">
            <img
              src={Images.boarding2}
              alt="boarding1"
              className="sm:w-[70vw] "
            />
          </div>
          <h1 className="text-center font-bold text-2xl py-2">شاهد وأكسب!</h1>
          <p className="text-center font-bold text-[#272727] py-2">
            مشاهدتك معنا تكسب معلومة جديدة ونقاطك تزيد تقدر تحولها الي نقود
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="pb-20 m-auto w-[720px] relative sm:w-[100vw] py-2">
          <div className="flex items-center justify-center">
            <img
              src={Images.boarding3}
              alt="boarding3"
              className="sm:w-[70vw] "
            />
          </div>
          <h1 className="text-center font-bold text-2xl py-2">
            {" "}
            جديد أو مستعمل!
          </h1>
          <p className="text-center font-bold text-[#272727] py-2">
            بيع واشترى منتجاتك جديدة أو مستعمل واكسب بسهولة مع أدباى
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OnBoardingSlider;
