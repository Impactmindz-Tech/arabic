import Slider from "../../../components/DetailsProductSlider/Slider.jsx";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import Images from "../../../constant/Images.js";
import { IoMdStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
function DetailsProduct() {
  const [whishListState,setWhishListState]=useState(false);
  return (
    <div className="m-auto pb-20">
      <Header />
      <BackButtonMenu text="تفاصيل المنتج " link="/dashboard/product" />

      <p className="flex justify-end">
        <FaHeart className={`${whishListState?'text-[#D96951]':'text-[#B2B2B2]'} cursor-pointer text-2xl sm:w-20`} onClick={()=>setWhishListState(!whishListState)}/>
      </p>
      <div className="flex w-[100%] h-[250px] m-auto my-2 py-5">
        <Slider />
      </div>

      <div className="flex justify-between">
        <div className="text-red-600 font-semibold"> 400 ريال</div>
        <div className="text-green-900">طقم ولادى “جديد”</div>
      </div>
      <p className="text-red-600 font-semibold text-right my-2">ملابس أطفال</p>
      <div className="flex justify-end mb-5">
        <p className="text-[#373737] font-light  w-[90%]  text-right my-2 ">
        طقم أطفال يلبس لحد سن 5 سنوات عبارة عن قميص وبنطلون ومتوفر بجميع الالوان سارع بالحجز للحصول عليه
        </p>
      </div>

      {/* review */}
      <div className="reviews min-w-[100%]">
        <div className="cardShadow flex justify-between w-full p-4 sm:p-2">
          <div className="flex gap-3 items-end sm:gap-1">
           <Link to="">
            <img src={Images.call} alt="call" className="cursor-pointer sm:w-[6vw] sm:h-auto sm:object-cover"  />
           </Link>
           <Link to="/dashboard/details_product_haraj">
            <img
              src={Images.message}
              alt="message"
              className="cursor-pointer sm:w-[6vw] sm:h-auto sm:object-cover"
            />
           </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <h4 className="font-bold text-[#205960] text-right">
                محلات كيدز
              </h4>
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
                src={Images.mall1}
                alt="mall"
                className="rounded-full w-[100px] h-[100px] sm:w-[15vw] sm:h-[15vw]"
              />
            </div>
          </div>
        </div>
      </div>

     <Link to="/dashboard/cart">

      <div className="btnSubmit my-10 text-center">أضف الى السلة</div></Link>
    </div>
  );
}

export default DetailsProduct;
