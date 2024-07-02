import { FaHeart } from "react-icons/fa";
import Images from "../../../constant/Images";
function ForesterCard() {
  return (
    <div className="cardShadow py-5 relative m-2 w-[40%] cursor-pointer">
      <div className="p-3 flex justify-center relative">
        <div className="absolute right-4 cursor-pointer text-[#D24325] top-0">
          <FaHeart />
        </div>
        <img
          src={Images.jacket}
          alt={Images.jacket}
          className="w-30 object-contain"
        />
      </div>
      <div className="text-right pr-4">
        <h3 className="">تيشيرت </h3>
        <div className="flex justify-end my-2 gap-2">
          <p className="text-[#D96951] font-bold">200 ريال</p>
        </div>
      </div>
    </div>
  );
}

export default ForesterCard;
