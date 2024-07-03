import { TiStar } from "react-icons/ti";
import Images from "../../../constant/Images";
import { Link } from "react-router-dom";
function RateCards() {
  return (
    <div className="cardShadow py-5 sm:py-1 relative m-2 ">
      <Link to="/dashboard/details_product">
        <div className="sm:p-1 p-3 flex justify-center relative">
          <img
            src={Images.jacket}
            alt={Images.jacket}
            className="w-30 object-contain sm:w-auto"
          />
        </div>
        <div className="text-right pr-4">
          <h3 className="">تيشيرت </h3>
          <div className="flex justify-between my-2 gap-2 ">
            <div className="flex px-2 items-center gap-1">
              <TiStar className="text-[#F3C124]" />
              <span>4.5</span>
            </div>
            <p className="text-[#D96951]">200 ريال</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RateCards;
