import Images from "../../../constant/Images.js";
import { Link } from "react-router-dom";
import Header from "../../../components/Header.jsx";
const MessagePage = () => {
  return (
    <>
      <div className="w-[90%] m-auto pb-20 sm:w-[100%]">
        <Header />
        <div className="bottomBoxShadow p-2 flex justify-end items-center gap-2 my-2">
          <div className="flex justify-end flex-col text-right text-[#525252]">
            <h4 className="font-bold ">أية عمر</h4>
            <p>متاح . منذ 1 دقيقة</p>
          </div>
          <div className="profile">
            <img src={Images.userBlue} alt="user blue" />
          </div>
          <div className="arrow cursor-pointer">
            <img src={Images.rightArrow} alt="rightArrow" />
          </div>
        </div>

        <div className="chatContainer my-5 min-h-[55vh] ">



          <div className="left ">
            <div className="ShapesLeft">محتوى الشات محتوى الشات</div>
            <div className="text-right w-[100%] text-[#555555] pr-5 py-1">
              2:12 AM
            </div>
          </div>

          {/* right */}
          <div className="right">
            <div className="ShapesRight">محتوى الشات محتوى الشات</div>
            <div className="text-left w-[100%] text-[#555555] pl-5 py-1">
              2:12 AM
            </div>
          </div>
        </div>

        <div className="relative m-auto w-[90%] my-[3vh]">
          <div className="sendBtn">
            <img
              src={Images.sendBtn}
              alt="send btn"
              className="absolute top-2 left-4 cursor-pointer sm:w-8 sm:top-2 sm:left-2"
            />
          </div>
          <input
            type="text"
            name="message"
            placeholder="اكتب رسالتك"
            className="bg-[#F1F1F1] w-full sm:p-3 p-4 text-right rounded-lg outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default MessagePage;
