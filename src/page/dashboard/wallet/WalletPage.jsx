import Images from "../../../constant/Images.js";
import { LiaWalletSolid } from "react-icons/lia";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
const WalletPage = () => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <BackButtonMenu text="محفظتى" link="/dashboard/profile" />

        <div className="flex justify-center">
          <div className="wallet px-8 py-5 sm:px-2 sm:py-2 sm:w-[50%]">
            <h1 className="text-right">محفظتى</h1>
            <div className="flex gap-7 mt-6 items-center sm:justify-end">
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
               
              <div className="flex justify-end">
            <h5 className="w-[90%] my-2 text-right">
            تم سحب 20 ريال للسلة لشراء طلب من متجر ملابس
            </h5>
          </div>
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
               
              <div className="flex justify-end">
            <h5 className="w-[90%] my-2 text-right">
            تم سحب 20 ريال للسلة لشراء طلب من متجر ملابس
            </h5>
          </div>
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
