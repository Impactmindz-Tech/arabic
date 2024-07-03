import Header from "../../../components/Header";
import OrderCardPage from "../../../components/cards/OrderCard/OrderCardPage";

function OrderPage() {
  return (
    <div className="w-[90%] m-auto pb-20">
      <Header />
      <div className="flex justify-end gap-2 items-center my-6 z-10">
        <p className="cursor-pointer text-[#525252] font-bold">الطلبات</p>
      </div>

      <div className="flex justify-between">
        <button className="GrayBtnSubmit px-5 w-[48%] py-3 sm:py-1 sm:px-1">
          الطلبات الجديدة
        </button>
        <button className="RedBtnSubmit px-5 w-[48%] sm:px-1"> الطلبات المكتملة</button>
      </div>

      <div className=" my-2">
        <OrderCardPage />
        <OrderCardPage />
        <OrderCardPage />
       


        
      </div>
    </div>
  );
}

export default OrderPage;
