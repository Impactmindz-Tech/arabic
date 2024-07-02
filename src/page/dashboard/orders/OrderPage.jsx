import Header from "../../../components/Header";
import Images from "../../../constant/Images";
import { RiArrowLeftWideLine } from "react-icons/ri";
function OrderPage() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <div className="flex justify-end gap-2 items-center my-6 z-10">
        <p className="cursor-pointer text-[#525252] font-bold">الطلبات</p>
      </div>

      <div className="flex justify-between">
        <button className="GrayBtnSubmit px-5 w-[48%] py-3">
          الطلبات الجديدة
        </button>
        <button className="RedBtnSubmit px-5 w-[48%]"> الطلبات المكتملة</button>
      </div>

      <div className=" my-2">
        <div className="border border-[#D24325] rounded-2xl p-4 my-4">
          {/* top */}
          <div className="flex justify-between my-3">
            <div className="font-bold">#4984200</div>
            <div className="flex gap-2">
              <div className="token">رقم الطلب</div>
              <div className="images">
                <img src={Images.orderNumber} alt="order number" />
              </div>
            </div>
          </div>
          {/* middle */}

          <div className="flex justify-end my-6">
            <div className="flex gap-[200px]">
              <div className="flex items-center cursor-pointer gap-3">
                <div className="text">03:23 pm</div>
                <div className="text-[#D24325] text-2xl">
                  <img src={Images.clock} alt="clock" />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="token"> 03/03/2024</div>
                <div className="images">
                  <img src={Images.cal} alt="cal" />
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex justify-between my-3">
            <div className="flex items-center cursor-pointer">
              <div className="text-[#D24325] text-2xl">
                <RiArrowLeftWideLine />
              </div>
              <div className="text font-bold text-[#D24325]">التفاصيل</div>
            </div>

            <div className="flex gap-2">
              <div className="token"> الاجمالى : 600 ريال</div>
              <div className="images">
                <img src={Images.cart} alt="cart" />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#D24325] rounded-2xl w-full p-4 my-4">
          {/* top */}
          <div className="flex justify-between my-3">
            <div className="font-bold">#4984200</div>
            <div className="flex gap-2">
              <div className="token">رقم الطلب</div>
              <div className="images">
                <img src={Images.orderNumber} alt="order number" />
              </div>
            </div>
          </div>
          {/* middle */}

          <div className="flex justify-end my-6">
            <div className="flex gap-[200px]">
              <div className="flex items-center cursor-pointer gap-3">
                <div className="text">03:23 pm</div>
                <div className="text-[#D24325] text-2xl">
                  <img src={Images.clock} alt="clock" />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="token"> 03/03/2024</div>
                <div className="images">
                  <img src={Images.cal} alt="cal" />
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex justify-between my-3">
            <div className="flex items-center cursor-pointer">
              <div className="text-[#D24325] text-2xl">
                <RiArrowLeftWideLine />
              </div>
              <div className="text font-bold text-[#D24325]">التفاصيل</div>
            </div>

            <div className="flex gap-2 ">
              <div className="token"> الاجمالى : 600 ريال</div>
              <div className="images">
                <img src={Images.cart} alt="cart" />
              </div>
            </div>
          </div>
        </div>


        <div className="border border-[#D24325] rounded-2xl w-full p-4 my-4">
          {/* top */}
          <div className="flex justify-between my-3">
            <div className="font-bold">#4984200</div>
            <div className="flex gap-2">
              <div className="token">رقم الطلب</div>
              <div className="images">
                <img src={Images.orderNumber} alt="order number" />
              </div>
            </div>
          </div>
          {/* middle */}

          <div className="flex justify-end my-6">
            <div className="flex gap-[200px]">
              <div className="flex items-center cursor-pointer gap-3">
                <div className="text">03:23 pm</div>
                <div className="text-[#D24325] text-2xl">
                  <img src={Images.clock} alt="clock" />
                </div>
              </div>

              <div className="flex gap-2">
                <div className="token"> 03/03/2024</div>
                <div className="images">
                  <img src={Images.cal} alt="cal" />
                </div>
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex justify-between my-3">
            <div className="flex items-center cursor-pointer">
              <div className="text-[#D24325] text-2xl">
                <RiArrowLeftWideLine />
              </div>
              <div className="text font-bold text-[#D24325]">التفاصيل</div>
            </div>

            <div className="flex gap-2 ">
              <div className="token"> الاجمالى : 600 ريال</div>
              <div className="images">
                <img src={Images.cart} alt="cart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
