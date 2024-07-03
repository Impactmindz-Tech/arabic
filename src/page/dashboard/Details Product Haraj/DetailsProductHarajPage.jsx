import Slider from "../../../components/DetailsProductSlider/Slider.jsx";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import Images from "../../../constant/Images.js";
import { FaHeart } from "react-icons/fa";
function DetailsProductHarajPage() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <BackButtonMenu text="تفاصيل المنتج " link="/" />

      <p className="flex justify-end">
        <FaHeart className="text-[#B2B2B2] cursor-pointer text-2xl" />
      </p>
      <div className="flex w-[100%] h-[250px] m-auto my-2 py-5">
        <Slider />
      </div>

      <div className="flex justify-between">
        <div className="text-red-600 font-semibold">500 ريال</div>
        <div className="text-green-900">“مستعمل”تيشيرت</div>
      </div>
      <p className="text-red-600 font-semibold text-right my-2">ملابس</p>
      <div className="flex justify-end mb-5">
        <p className="text-[#373737] font-light  w-[80%]  text-right my-2 ">
          طقم أطفال يلبس لحد سن 5 سنوات عبارة عن قميص وبنطلون ومتوفر بجميع
          الالوان سارع بالحجز للحصول عليه
        </p>
      </div>

      {/* review */}
      <div className="reviews min-w-[100%]">
        <div className="cardShadow flex justify-between w-full p-3 items-center">
          <div className="flex gap-3 pl-4">
            <img src={Images.call} alt="call" className=" cursor-pointer" />
            <img
              src={Images.message}
              alt="message"
              className=" cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <h4 className="font-bold text-[#205960] text-right">
                محمد عبدالله
              </h4>
            </div>
            <div className="images">
              <img
                src={Images.chair_Img}
                alt="chair_Img"
                className="rounded-full w-[80px] h-[80px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between my-9">
        <div className="text-red-600 font-semibold"> الكل</div>
        <div className="text-green-900">التعليقات</div>
      </div>

      <div className="reviews min-w-[100%] flex flex-col gap-y-4">
        <div className="cardShadow flex justify-between w-full p-3 items-center">
          <div className="pl-4 font-bold text-[#205960]">
            <h4> 5 أيام</h4>
            <h4>رد</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <h4 className="font-bold text-[#205960] text-right">أية عمر</h4>
              <p className="text-[#555555]">أريد شراء هذا المنتج</p>
            </div>
            <div className="images">
              <img
                src={Images.userBlue}
                alt="userBlue"
                className="rounded-full w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>

        <div className="cardShadow flex justify-between w-full p-3 items-center">
          <div className="pl-4 font-bold text-[#205960]">
            <h4> 5 أيام</h4>
            <h4>رد</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <h4 className="font-bold text-[#205960] text-right">أية عمر</h4>
              <p className="text-[#555555]">أريد شراء هذا المنتج</p>
            </div>
            <div className="images">
              <img
                src={Images.userBlue}
                alt="userBlue"
                className="rounded-full w-[50px] h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="buttonInput flex justify-between my-[10vh] items-center">
        <div className="left">
          <img
            src={Images.sendBtn}
            alt="sendBtn"
            className="rounded-full w-[40px] h-[40px] cursor-pointer"
          />
        </div>
        <div className="w-[80%]">
          <input
            type="text"
            placeholder="اكتب تعليقك"
            className="font-bold outline-none text-right bg-[#F1F1F1] rounded-lg w-[100%] p-4"
          />
        </div>
        <div className="icon">
          <img
            src={Images.userBlue}
            alt="userBlue"
            className="rounded-full w-[50px] h-[50px]"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsProductHarajPage;
