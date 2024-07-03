import { RiArrowLeftWideLine } from "react-icons/ri";
import Images from '../../../constant/Images'

function OrderCardPage() {
  return (
    <div className="border border-[#D24325] rounded-2xl p-4 my-4 sm:p-2 ">
    {/* top */}
    <div className="flex justify-between my-3 sm:my-1">
      <div className="font-bold">#4984200</div>
      <div className="flex gap-2">
        <div className="token">رقم الطلب</div>
        <div className="images">
          <img src={Images.orderNumber} alt="order number" />
        </div>
      </div>
    </div>
    {/* middle */}

    <div className="flex justify-between my-6">
     
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

    {/* bottom */}
    <div className="flex justify-between my-3 sm:gap-3">
      <div className="flex items-center cursor-pointer">
        <div className="text-[#D24325] text-2xl">
          <RiArrowLeftWideLine />
        </div>
        <div className="text font-bold text-[#D24325]">التفاصيل</div>
      </div>

      <div className="flex gap-2">
        <div className="token text-right"> الاجمالى : 600 ريال</div>
        <div className="images">
          <img src={Images.cart} alt="cart" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default OrderCardPage
