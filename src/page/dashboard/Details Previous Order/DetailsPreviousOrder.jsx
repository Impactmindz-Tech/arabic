import Header from "../../../components/Header";
import DetailsOrderCompleteCard from "../../../components/cards/Details Order Complete Card/DetailsOrderCompleteCard";
import OrderCardPage from "../../../components/cards/OrderCard/OrderCardPage";
import Images from "../../../constant/Images";
import BackButtonMenu from "../../../layout/BackButtonMenu";

function DetailsPreviousOrder() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <BackButtonMenu text=" " link={"/"} />

      <div className="my-2">
        <OrderCardPage />
      </div>

      <div className="border border-[#D24325] relative w-[100%] rounded-2xl flex flex-wrap gap-y-4 py-10 mt-[80px]">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF] w-[30%] py-2 absolute -top-6 left-[16vw] sm:w-[50vw]">
          <h2 className="font-bold">محلات كيدز</h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2 w-full">
          <DetailsOrderCompleteCard />
          <DetailsOrderCompleteCard />
        </div>

        <div className="flex justify-between w-[94%] m-auto">
          <div className="font-bold">300 ريال</div>
          <div className="font-bold">الاجمالى</div>
        </div>
      </div>


      <div className="border border-[#D24325] relative w-[100%] rounded-2xl flex flex-wrap gap-y-4 py-10 mt-[80px]">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF] w-[30%] py-2 absolute -top-6 left-[16vw] sm:w-[50vw]">
          <h2 className="font-bold">محلات كيدز</h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2 w-full">
          <DetailsOrderCompleteCard />
          <DetailsOrderCompleteCard />
        </div>

        <div className="flex justify-between w-[94%] m-auto">
          <div className="font-bold">300 ريال</div>
          <div className="font-bold">الاجمالى</div>
        </div>
      </div>
      <div className="bg-[#D9D9D9] my-10 rounded-t-3xl p-8">
        <div className="flex justify-between my-5">
          <div className="font-bold">900 ريال</div>
          <div className="font-bold">الاجمالى </div>
        </div>
        <button className="GrayBtn w-full py-4 mt-10">فى انتظار اكمال طلبك من التاجر </button>
      </div>
    </div>
  );
}

export default DetailsPreviousOrder;
