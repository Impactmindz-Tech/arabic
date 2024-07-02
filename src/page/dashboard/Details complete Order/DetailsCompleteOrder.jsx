import Header from "../../../components/Header";
import Images from "../../../constant/Images";
import BackButtonMenu from "../../../layout/BackButtonMenu";
import { RiArrowLeftWideLine } from "react-icons/ri";

function DetailsCompleteOrder() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <BackButtonMenu text="تفاصيل الطلب" link={"/"} />

      <div className="my-2">
        <div className="border border-[#D24325] rounded-2xl p-4 my-4 bg-[#FFF4F1]">
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
      </div>

      <div className="border border-[#D24325] relative w-[100%] rounded-2xl flex flex-wrap gap-y-4 py-10 mt-[80px]">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF] w-[30%] py-2 absolute -top-6 left-[15vw]">
          <h2 className="font-bold">محلات كيدز</h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>

        <div className="cardShadow w-[96%] m-auto flex justify-between items-center p-3 mt-[30px]">
          <div className="price font-bold text-[#D96951] p-2">200 ريال</div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <h3>تيشيرت رصاصى</h3>
              <div className="flex justify-end">
                <h3 className="font-bold">2</h3>
                <p>عدد:</p>
              </div>
            </div>
            <div className="img">
              <img src={Images.jacket} alt="jacket" className="w-[80px]" />
            </div>
          </div>
        </div>

        <div className="cardShadow w-[96%] m-auto flex justify-between items-center p-3">
          <div className="price font-bold text-[#D96951] p-2">100 ريال</div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <h3>تيشيرت رصاصى</h3>
              <div className="flex justify-end">
                <h3 className="font-bold">1</h3>
                <p>عدد:</p>
              </div>
            </div>
            <div className="img">
              <img src={Images.jacket} alt="jacket" className="w-[80px]" />
            </div>
          </div>
        </div>

        <div className="flex justify-between w-[94%] m-auto">
          <div className="font-bold">300 ريال</div>
          <div className="font-bold">الاجمالى</div>
        </div>
      </div>

      <div className="border border-[#D24325] relative w-[100%] rounded-2xl flex flex-wrap gap-y-4 py-10 mt-[80px]">
        <div className="flex gap-2 justify-center  border rounded-full border-[#D24325] bg-[#FDD7CF] w-[30%] py-2 absolute -top-6 left-[15vw]">
          <h2 className="font-bold">محلات كيدز</h2>
          <img
            src={Images.mall1}
            alt="mall1"
            className="rounded-full w-8 h-8"
          />
        </div>

        <div className="cardShadow w-[96%] m-auto flex justify-between items-center p-3 mt-[30px]">
          <div className="price font-bold text-[#D96951] p-2">200 ريال</div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <h3>تيشيرت رصاصى</h3>
              <div className="flex justify-end">
                <h3 className="font-bold">2</h3>
                <p>عدد:</p>
              </div>
            </div>
            <div className="img">
              <img src={Images.jacket} alt="jacket" className="w-[80px]" />
            </div>
          </div>
        </div>

        <div className="cardShadow w-[96%] m-auto flex justify-between items-center p-3">
          <div className="price font-bold text-[#D96951] p-2">100 ريال</div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <h3>تيشيرت رصاصى</h3>
              <div className="flex justify-end">
                <h3 className="font-bold">1</h3>
                <p>عدد:</p>
              </div>
            </div>
            <div className="img">
              <img src={Images.jacket} alt="jacket" className="w-[80px]" />
            </div>
          </div>
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
        <button className="RedBtnSubmit w-full py-4 mt-10">اعادة الطلب</button>
      </div>
    </div>
  );
}

export default DetailsCompleteOrder;
