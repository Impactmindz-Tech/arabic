import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
import { IoMdStar } from "react-icons/io";
import { useState } from "react";
import VendorProfileModal from "../../../components/modal/VendorProfileReviewModal";
import VendorProfileCard from "../../../components/cards/VendorProfileCard/VendorProfileCard";

function VendorProfilePage() {
    const [open,handleClose]=useState(false)
  return (
    <div className=" sm:w-[100%] pb-10">
      <Header />
      <div className="banner w-[100%] bg-red-600 h-50 my-5 relative">
        <div className="flex justify-end gap-2 items-center my-6 z-10 absolute top-0 right-3 sm:my-1 sm:right-1">
          <p className="cursor-pointer text-white font-bold">
            {" "}
            <Link to={"/dashboard/profile"}> حساب التاجر </Link>
          </p>  
          <Link to={"/dashboard/profile"}>
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

      <div className="flex flex-wrap  gap-4 sm:gap-2">
       <VendorProfileCard />
       <VendorProfileCard />
       <VendorProfileCard />
       <VendorProfileCard />

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
