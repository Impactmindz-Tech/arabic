import { TiStar } from "react-icons/ti";
import Images from "../../../constant/Images";
function ProductCard() {
  return (
    <div className="cardShadow py-5 sm:py-3 relative m-2 sm:m-0 sm:w-[46%] w-[30%] cursor-pointer">
    <div className="flex justify-center relative">
      <img
        src={Images.jacket}
        alt={Images.jacket}
        className="w-30 object-contain sm:w-20"
      />
    </div>
    <div className="text-right pr-4">
      <h3 className="">تيشيرت </h3>
      <div className="flex justify-between my-2 gap-2">
        <div className="flex px-2 items-center gap-1">
          <TiStar className="text-[#F3C124]" />
          <span>4.5</span>
        </div>
        <p className="text-[#D96951]">200 ريال</p>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
