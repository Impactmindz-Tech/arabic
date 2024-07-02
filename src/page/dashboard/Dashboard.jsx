import Images from "../../constant/Images";
import SwiperSlider from "../../components/slider/SwiperSlider";
import imagesslider from "../../constant/sliderImage";
import chairImages from "../../constant/catgeroryiages";
import { FaRegEye } from "react-icons/fa";

import RateCardSwiper from "../../components/slider/RateCardSwiper";
const Dashboard = () => {
  return (
    <>
      <div className="border border-lightGrey-300 px-3 py-3 w-full text-right rounded-xl flex items-center gap-2">
        <input
          type="text"
          placeholder="ابحث عن منتجك"
          className="outline-none w-full text-right"
          name=""
          id=""
        />
        <img src={Images.search_Img} alt="" />
      </div>
      <div className="pt-5">
        <SwiperSlider imagesslider={imagesslider} />
      </div>
      <div className="pt-5">
        <div className="flex justify-between my-4 mb-9 ">
          <div className="text-[#D24325]">الكل</div>
          <div className="font-bold text-[#205960]">التصنيفات</div>
        </div>
        <SwiperSlider category={true} imagesslider={chairImages} />
        <div className="flex justify-between my-4 mb-9 ">
          <div className="text-[#D24325]">الكل</div>
          <div className="font-bold text-[#205960]">الاعلانات</div>
        </div>
      </div>

      <div className="banner">
        <div className="w-full">
          <img
            src={Images.banner}
            alt="banner"
            className="object-contain w-[100%]"
          />
        </div>

        <div className="details py-2 flex justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[#B2B2B2]">10</div>
            <div className="text-[#B2B2B2]">
              <FaRegEye />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="text-right">
              <h3 className="text-[#205960] font-bold">عيدك عندنا</h3>
              <p>تخفيضات على كل ملابس الاطفال, الرجالى والحريمى تصل حتى 30%</p>
              <h3 className="text-[#205960] font-bold">اعلان . متجر الاصيل</h3>
            </div>
            <div className="icon">
              <img
                src={Images.chair_Img}
                alt="chair_Img"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-4 mb-9 ">
        <div className="text-[#D24325]">الكل</div>
        <div className="font-bold text-[#205960]">الأكثر مبيعا</div>
      </div>

      <div className="flex flex-wrap  justify-end gap-4">
        <RateCardSwiper />
      </div>

      <div className="flex justify-between my-4 mb-9 ">
        <div className="text-[#D24325]">الكل</div>
        <div className="font-bold text-[#205960]">المتجر </div>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <div className="w-[22%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[22%]">
          <img
            src={Images.watch}
            alt="watch"
            className="object-fit w-[100%] "
          />
        </div>
        <div className="w-[22%]">
          <img
            src={Images.mall2}
            alt="mall2"
            className="object-fit w-[100%] "
          />
        </div>
        <div className="w-[22%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[22%]">
          <img src={Images.shoe} alt="shoe" className="object-fit w-[100%] " />
        </div>

        <div className="w-[22%]">
          <img
            src={Images.mall1}
            alt="mall1"
            className="object-fit w-[100%] "
          />
        </div>
        <div className="w-[22%]">
          <img
            src={Images.watch}
            alt="watch"
            className="object-fit w-[100%] "
          />
        </div>
        <div className="w-[22%]">
          <img
            src={Images.mall2}
            alt="mall2"
            className="object-fit w-[100%] "
          />
        </div>
      </div>

      <div className="flex justify-between my-4 mb-9 ">
        <div className="text-[#D24325]">الكل</div>
        <div className="font-bold text-[#205960]">الحراج </div>
      </div>
      <div className="flex flex-wrap  justify-end gap-4">
        <RateCardSwiper />
      </div>

      <div className="flex justify-between my-4 mb-9 ">
        <div className="text-[#D24325]">الكل</div>
        <div className="font-bold text-[#205960]">المنتجات </div>
      </div>
      <div className="flex flex-wrap  justify-end gap-4">
        <RateCardSwiper />
      </div>
    </>
  );
};

export default Dashboard;
