import { useState } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import Images from "../../../constant/Images.js";
import { LiaWalletSolid, LiaCoinsSolid } from "react-icons/lia";
const CoinPage = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex justify-end gap-2 items-center my-6 z-10 ">
          <p className="cursor-pointer">نقاطى</p>
          <div className="arrow cursor-pointer">
            <img
              src={Images.rightArrow}
              alt="right arrow"
              className="w-5 h-4"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="wallet px-8 py-5">
            <h1 className="text-right">نقاطى</h1>
            <div className="flex gap-7 mt-6 items-center">
              <h2 className="text-right "> 500 نقطة </h2>
              <div className="bg-[#205960] rounded-full p-2 text-white ">
                <LiaCoinsSolid className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 gap-y-5 flex flex-wrap justify-end">
          <div className="wallet w-full flex  justify-end pr-3">
            <div className="flex py-5 gap-5 ">
              <div className="text-right">
                <h5 className="font-bold text-[#205960]">عيدك عندنا</h5>
                <h5>
                  تخفيضات على كل ملابس الاطفال, الرجالى والحريمى تصل حتى 30%
                </h5>
                <h5 className="font-bold text-[#205960]">
                  النقاط المكتسبة . 120 نقطة
                </h5>
              </div>
              <div className="icon">
                <img
                  src={Images.chair_Img}
                  alt="chair img"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>

          <div className="wallet w-full flex flex-wrap justify-end pr-3">
            <div className="flex py-5 gap-5 ">
              <div className="text-right">
                <h5 className="font-bold text-[#205960]">عيدك عندنا</h5>
                <h5>
                  تخفيضات على كل ملابس الاطفال, الرجالى والحريمى تصل حتى 30%
                </h5>
                <h5 className="font-bold text-[#205960]">
                  النقاط المكتسبة . 120 نقطة
                </h5>
              </div>
              <div className="icon">
                <img
                  src={Images.chair_Img}
                  alt="chair img"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinPage;
