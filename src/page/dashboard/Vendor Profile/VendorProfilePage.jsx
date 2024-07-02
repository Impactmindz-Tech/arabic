import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import VendorProfileModal from "../../../components/modal/VendorProfileReviewModal";

function VendorProfilePage() {
    const [open,handleClose]=useState(false)
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <div className="banner w-[100%] bg-red-600 h-50 my-5 relative">
        <div className="flex justify-end gap-2 items-center my-6 z-10 absolute top-0 right-3">
          <p className="cursor-pointer text-white font-bold">
            {" "}
            <Link to={"/"}> حساب التاجر </Link>
          </p>
          <Link to={"/"}>
            <div className="arrow cursor-pointer">
              <img
                src={Images.whiteArrowRight}
                alt="right arrow"
                className="w-5 h-5"
              />
            </div>{" "}
          </Link>
        </div>
        <img
          src={Images.banner2}
          alt="banner 2"
          className="blurBanner w-[100vw] h-[100%] "
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img
            src={Images.call}
            alt="call"
            className="w-8 h-8 cursor-pointer"
          />
          <img
            src={Images.message}
            alt="message"
            className="w-8 h-8 cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="details">
            <h3 className="font-bold text-[#205960] text-right">محلات كيدز</h3>
            <div className="flex text-2xl">
              <IoMdStar className="text-[#B2B2B2]" />
              <IoMdStar className="text-[#FFB800]" />
              <IoMdStar className="text-[#FFB800]" />
              <IoMdStar className="text-[#FFB800]" />
              <IoMdStar className="text-[#FFB800]" />
            </div>
          </div>
          <div className="images">
            <img
              src={Images.chair_Img}
              alt="chair_Img"
              className="rounded-full w-[50px] h-[50px]"
            />
          </div>
        </div>
      </div>

      <nav className="flex justify-end space-x-8 my-6">
        <Link to="#" className=" border-red-600 pb-1">
          أطفال
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-red-600 hover:border-red-600 pb-1"
        >
          حريمى
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-red-600 hover:border-red-600 pb-1"
        >
          رجالى
        </Link>
        <Link
          to="#"
          className="text-red-600  text-gray-600 hover:text-red-600 hover:border-red-600 pb-1"
        >
          الكل
        </Link>
      </nav>

      <div className="flex flex-wrap  justify-center gap-4">
        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className="">تيشيرت </h3>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.child}
              alt={Images.child}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className=""> طقم ولادى</h3>
            <p className="text-[#D96951]">400 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.child}
              alt={Images.child}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className=""> طقم ولادى</h3>
            <p className="text-[#D96951]">400 ريال</p>
          </div>
        </div>
        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className="">تيشيرت </h3>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.child}
              alt={Images.child}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className=""> طقم ولادى</h3>
            <p className="text-[#D96951]">400 ريال</p>
          </div>
        </div>

        <div className="cardShadow min-w-[31%] py-5">
          <div className="p-3 flex justify-center">
            <img
              src={Images.jacket}
              alt={Images.jacket}
              className="w-30 object-contain"
            />
          </div>
          <div className="text-right pr-4">
            <h3 className="">تيشيرت </h3>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>
      </div>

      <button className="RedBtnSubmit w-full my-5 flex justify-center gap-3 py-4 items-center" onClick={()=>handleClose(true)}>
        <div className="text">تقييم التاجر</div>
        <div className="icon">
          <img src={Images.whiteStar} alt="white star" />
        </div>
      </button>

      <VendorProfileModal open={open} handleClose={handleClose}/>
    </div>
  );
}

export default VendorProfilePage;
