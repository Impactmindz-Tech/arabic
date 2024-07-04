import Header from "../../../components/Header";
import DetailsOrderCompleteCard from "../../../components/cards/Details Order Complete Card/DetailsOrderCompleteCard";
import DetailsOrderPageCard from "../../../components/cards/DetailsOrderPage/DetailsOrderPageCard";
import Images from "../../../constant/Images";
import BackButtonMenu from "../../../layout/BackButtonMenu";

function DetailsPreviousOrder() {
  return (
    <div className="m-auto">
      <Header />
      <BackButtonMenu text=" " link={"/dashboard/home"} />

      <div className="my-2">
        <DetailsOrderPageCard />
      </div>

      <div className="border border-[#D24325] relative w-[100%] my-20 rounded-2xl flex flex-wrap py-10  sm:mt-10">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF]  py-2 px-5  fixedTopAbsolute">
          <h2 className="font-bold">محلات كيدز  </h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="p-4 w-full my-1">
          <DetailsOrderCompleteCard />
          <DetailsOrderCompleteCard />

          <div className="flex justify-between  m-auto mt-6">
            <span className="font-bold"> 300 ريال</span>
            <span className="font-bold">الاجمالى</span>
          </div>
        </div>
      </div>
      <div className="border border-[#D24325] relative w-[100%] my-20 rounded-2xl flex flex-wrap py-10  sm:mt-10">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF]  py-2 px-5  fixedTopAbsolute">
          <h2 className="font-bold">محلات كيدز  </h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="p-4 w-full my-1">
          <DetailsOrderCompleteCard />
          <DetailsOrderCompleteCard />

          <div className="flex justify-between  m-auto mt-6">
            <span className="font-bold"> 600 ريال</span>
            <span className="font-bold">الاجمالى</span>
          </div>
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
