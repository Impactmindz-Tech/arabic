import Images from "../../../constant/Images.js";
import { Link } from "react-router-dom";
import Header from "../../../components/Header.jsx";
const MenuPage = () => {
  return (
    <>
      <div className="w-[90%] m-auto pb-20">
        <Header />
        <div className="flex justify-end gap-2 items-center my-6 z-10">
          <p className="cursor-pointer text-[#525252] font-bold">القائمة</p>
        </div>

        <div className="w-full bg-[#F6D9D3] rounded-lg p-4 text-right text-[#D24325] font-bold">
          بياناتى
        </div>

        <div className="menus my-5 gap-y-5">
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> الملف الشخصى</div>
              <div className="icon">
                {" "}
                <img src={Images.user} alt="user" />
              </div>
            </div>
          </div>

          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> رسائلى </div>
              <div className="icon">
                {" "}
                <img src={Images.msg} alt="msg" />
              </div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> اضافة حراج </div>
              <div className="icon">
                {" "}
                <img src={Images.monitor} alt="monitor" />
              </div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> المفضلة </div>
              <div className="icon">
                {" "}
                <img src={Images.heart} alt="heart" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-[#D24325] bg-[#F6D9D3] my-6 rounded-lg p-4 text-right  font-bold">
          الاعدادات
        </div>

        <div className="menus my-5 gap-y-5">
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> تواصل معنا </div>
              <div className="icon">
                {" "}
                <img src={Images.callus} alt="callus" />
              </div>
            </div>
          </div>

          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> عن التطبيق </div>
              <div className="icon">
                {" "}
                <img src={Images.info} alt="info" />
              </div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]">
                {" "}
                الشروط والأحكام{" "}
              </div>
              <div className="icon">
                {" "}
                <img src={Images.correct} alt="correct" />
              </div>
            </div>
          </div>
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> مشاركة التطبيق </div>
              <div className="icon">
                {" "}
                <img src={Images.share} alt="share" />
              </div>
            </div>
          </div>

          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> تقييم التطبيق </div>
              <div className="icon">
                {" "}
                <img src={Images.click} alt="click" />
              </div>
            </div>
          </div>

          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium text-[#545454]"> تسجيل خروج </div>
              <div className="icon">
                {" "}
                <img src={Images.logout} alt="logout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
