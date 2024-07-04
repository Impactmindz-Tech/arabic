import { LiaCoinsSolid } from "react-icons/lia";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import CoinPageCard from "../../../components/cards/CoinPageCard/CoinPageCard.jsx";
const CoinPage = () => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <BackButtonMenu text="محفظتى" link="/dashboard/profile" />
        <div className="flex justify-center">
          <div className="wallet px-8 py-5 sm:px-2 sm:py-2 sm:w-[50%]">
            <h1 className="text-right">نقاطى</h1>
            <div className="flex gap-7 mt-6 items-center sm:justify-end">
              <h2 className="text-right "> 500 نقطة </h2>
              <div className="bg-[#205960] rounded-full p-2 text-white ">
                <LiaCoinsSolid className="text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 gap-y-5 flex flex-wrap justify-end">
        <CoinPageCard />
        <CoinPageCard />
        </div>
      </div>
    </>
  );
};

export default CoinPage;
