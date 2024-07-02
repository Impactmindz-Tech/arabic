import { useState } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import Images from "../../../constant/Images.js";
import { LiaWalletSolid } from "react-icons/lia";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
const WalletPage = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Header />
        <BackButtonMenu text="محفظتى" link="/" />

        <div className="flex justify-center">
          <div className="wallet px-8 py-5">
            <h1 className="text-right">محفظتى</h1>
            <div className="flex gap-7 mt-6 items-center">
              <h2 className="text-right ">  100 ريال</h2>
              <div className="bg-[#D24325] rounded-full p-2 text-white ">
                <LiaWalletSolid className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-6 gap-y-5 flex flex-wrap justify-end">
          <div className="wallet w-full flex  justify-end pr-3">
            <div className="flex py-5 gap-5 ">
              <div className="text-right">
               
                <h5 >
                تم سحب 20 ريال للسلة لشراء طلب من متجر ملابس
                </h5>
                <h5 className="font-bold text-[#205960]">
                منذ 5 أيام
                </h5>
              </div>
              <div className="icon">
                <img
                  src={Images.money}
                  alt="money img"
                  className="w-10 h-15"
                />
              </div>
            </div>
          </div>

       
          <div className="wallet w-full flex  justify-end pr-3">
            <div className="flex py-5 gap-5 ">
              <div className="text-right">
               
                <h5 >
                تم سحب 20 ريال للسلة لشراء طلب من متجر ملابس
                </h5>
                <h5 className="font-bold text-[#205960]">
                منذ 1/3/2024
                </h5>
              </div>
              <div className="icon">
                <img
                  src={Images.money}
                  alt="money img"
                  className="w-10 h-15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
