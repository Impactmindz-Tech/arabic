import Images from "../../../constant/Images.js";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import { LiaWalletSolid, LiaCoinsSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <BackButtonMenu text="حسابى" link="/dashboard/home" />

        <div className="flex justify-end">
          <div className="flex gap-4 items-center">
            <div className="details">
              <h3 className="text-right">أية عمر</h3>
              <h5 className="text-[#B2B2B2]">01000000000</h5>
            </div>
            <div className="images">
              <img
                className="w-[80px] h-[80px] border rounded-full border-[#A9BCC0]"
                src={Images.Auth_Img}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="bg-[#FBEDEA] flex items-center justify-around w-full h-20 my-5">
          <div className="border-r w-[33.3%]">
            <h3 className="text-sm text-[#555555] text-center">الاعلانات</h3>
            <h2 className="text-center text-2xl">5</h2>
          </div>

          <div className="border-r w-[33.3%] ">
            <h3 className="text-sm text-[#555555] text-center">حراجى</h3>
            <h2 className="text-center text-2xl">10</h2>
          </div>

          <div className="w-[33.3%]">
            <h3 className="text-sm text-[#555555] text-center">الطلبات</h3>
            <h2 className="text-center text-2xl">30</h2>
          </div>
        </div>

        <div className="flex justify-between sm:gap-2">
          <div className="wallet px-10 py-5 sm:px-2 sm:py-2 sm:w-[49%]">
            <Link to="/dashboard/wallet">
              <h1 className="text-right">محفظتى</h1>
              <div className="flex gap-7 mt-6 items-center sm:justify-end">
                <h2 className="text-right "> 100 ريال</h2>
                <div className="bg-[#D24325] rounded-full p-2 text-white ">
                  <LiaWalletSolid className="text-2xl" />
                </div>
              </div>
            </Link>
          </div>

          <div className="wallet px-10 py-5 sm:px-2 sm:py-2 sm:w-[49%] cursor-pointer">
            <Link to="/dashboard/coins">
              <h1 className="text-right">نقاطى</h1>
              <div className="flex gap-7 mt-6 items-center sm:justify-end">
                <h2 className="text-right "> 500 نقطة </h2>
                <div className="bg-[#205960] rounded-full p-2 text-white ">
                  <LiaCoinsSolid className="text-2xl" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="menus my-5 gap-y-5">
          <div className="flex w-full cursor-pointer border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium">حراجى</div>
              <div className="icon">
                {" "}
                <img src={Images.gift} alt="gift" />
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer w-full border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium">العناوين</div>
              <div className="icon">
                {" "}
                <img src={Images.location} alt="location" />
              </div>
            </div>
          </div>

          <div className="flex cursor-pointer w-full border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium"> تعديل الحساب</div>
              <div className="icon">
                {" "}
                <img src={Images.editIcon} alt="editIcon" />
              </div>
            </div>
          </div>
          <div className="flex cursor-pointer w-full border-b border-[#DADADA] justify-between py-5">
            <div className="text-3xl">
              <img src={Images.leftarrow} alt={Images.leftarrow} />
            </div>
            <div className="flex gap-3">
              <div className="font-medium"> حذف الحساب</div>
              <div className="icon">
                {" "}
                <img src={Images.deleteIcon} alt="deleteIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
