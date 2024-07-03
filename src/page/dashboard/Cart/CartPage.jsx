import CartCard from "../../../components/Cart/CartCard";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
function CartPage() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <div className="flex justify-end gap-2 items-center my-6 z-10">
        <p className="cursor-pointer text-[#525252] font-bold">السلة</p>
      </div>

      <div className="border border-[#D24325] relative w-[100%] rounded-2xl flex flex-wrap py-10 mt-[80px]">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF] w-[30%] py-2 absolute -top-6 left-[16vw]">
          <h2 className="font-bold">محلات كيدز </h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>

        <CartCard />
        <CartCard />

        <div className="flex justify-between w-[94%] m-auto mt-6">
          <div className="font-bold"> 300 ريال</div>
          <div className="font-bold">الاجمالى</div>
        </div>
      </div>

      <div className="border border-[#D24325] relative w-[100%] rounded-2xl flex flex-wrap py-10 mt-[80px]">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF] w-[30%] py-2 absolute -top-6 left-[16vw]">
          <h2 className="font-bold">محلات كيدز </h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>

        <CartCard />
        <CartCard />

        <div className="flex justify-between w-[94%] m-auto mt-6">
          <div className="font-bold"> 300 ريال</div>
          <div className="font-bold">الاجمالى</div>
        </div>
      </div>

      <div className="flex justify-between my-4 mb-9 ">
        <div className="">الكل</div>
        <div className="font-bold text-[#205960]">المتجر </div>
      </div>

      <div className="flex justify-between">
        <button className="GreenBtnSubmit p-2 px-10">اكمال الطلب</button>
        <button className="RedBtnSubmit p-2 px-10"> الغاء</button>
      </div>
    </div>
  );
}

export default CartPage;
