import { Link } from "react-router-dom";
import CartCard from "../../../components/Cart/CartCard";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
function CartPage() {
  return (
    <div className="pb-20">
      <Header />
      <div className="flex justify-end gap-2 items-center my-6 z-10 sm:my-0">
        <p className="cursor-pointer text-[#525252] font-bold">السلة</p>
      </div>

      <div className="border border-[#D24325] relative w-[100%] my-20 rounded-2xl flex flex-wrap py-10  sm:mt-10">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF]  py-2 px-5  fixedTopAbsolute">
          <h2 className="font-bold">محلات كيدز </h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="p-4 w-full my-1">
          <CartCard />
          <CartCard />

          <div className="flex justify-between  m-auto mt-6">
            <span className="font-bold"> 300 ريال</span>
            <span className="font-bold">الاجمالى</span>
          </div>
        </div>
      </div>


      <div className="border border-[#D24325] relative w-[100%] my-20 rounded-2xl flex flex-wrap py-10  sm:mt-10">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF]  py-2 px-5  fixedTopAbsolute">
          <h2 className="font-bold">محلات كيدز </h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>
        <div className="p-4 w-full my-1">
          <CartCard />
          <CartCard />

          <div className="flex justify-between  m-auto mt-6">
            <span className="font-bold"> 300 ريال</span>
            <span className="font-bold">الاجمالى</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between my-4 mb-9 ">
        <div className="">الكل</div>
        <div className="font-bold text-[#205960]">المتجر </div>
      </div>

      <div className="flex justify-between gap-2">
        <Link to="/dashboard/complete_order">
          <button className="GreenBtnSubmit p-2 px-10 sm:px-5">
            اكمال الطلب{" "}
          </button>
        </Link>
        <Link to="/dashboard/details_product_haraj">
          <button className="RedBtnSubmit p-2 px-10 sm:px-5"> الغاء</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
