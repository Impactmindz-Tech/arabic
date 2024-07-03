import Images from "../../../constant/Images.js";
import { Link } from "react-router-dom";
import Header from "../../../components/Header.jsx";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
const MessagesPage = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Header />
        <BackButtonMenu text="الرسائل" link={"/"} />

        <div className="menus my-5 gap-y-5">
          <div className="flex w-full cursor-pointer  items-center border-b border-[#DADADA] justify-between py-5">
            <div className="text-[#555555]">2:12 AM</div>
            <div className="flex gap-3 items-center">
              <div className="font-medium text-[#545454]"> الملف الشخصى</div>
              <div className="icon relative">
                {" "}
                <img src={Images.grayChair} alt="grayChair" />
                <div className="bg-[#205960] rounded-full font-semibold  flex items-center justify-center absolute top-8 -left-2 px-2 text-white">
                  2
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full cursor-pointer  items-center border-b border-[#DADADA] justify-between py-5">
            <div className="text-[#555555]">2:12 AM</div>
            <div className="flex gap-3 items-center">
              <div className="font-medium text-[#545454]"> الملف الشخصى</div>
              <div className="icon relative">
                {" "}
                <img src={Images.grayChair} alt="grayChair" />
              </div>
            </div>
          </div>

          <div className="flex w-full cursor-pointer  items-center border-b border-[#DADADA] justify-between py-5">
            <div className="text-[#555555]">السبت</div>
            <div className="flex gap-3 items-center">
              <div className="font-medium text-[#545454]"> الملف الشخصى</div>
              <div className="icon relative">
                {" "}
                <img src={Images.grayChair} alt="grayChair" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
