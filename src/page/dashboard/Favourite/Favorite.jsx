import Images from "../../../constant/Images.js";
import { FaHeart } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
function Favorite() {
  return (
    <div className="w-[90%] m-auto">
<div className="flex justify-end gap-2 items-center my-6 z-10">
          <p> المفضلة</p>
          <div className="arrow">
            <img
              src={Images.rightArrow}
              alt="right arrow"
              className="w-5 h-4"
            />
          </div>
        </div>
      

      {/* product section */}
      <div className="flex flex-wrap  justify-end gap-4">
<div className="cardShadow min-w-[31%] py-5 relative">
<div className="p-3 flex justify-center relative">

<div className="absolute right-4 cursor-pointer text-[#D24325] top-0">
  <FaHeart />
</div>
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<div className="flex justify-between my-2 gap-2">
<div className="flex px-2 items-center gap-1">
<TiStar className="text-[#F3C124]"/> 
<span>4.5</span>
</div>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>
</div>

<div className="cardShadow min-w-[31%] py-5 relative">
<div className="p-3 flex justify-center relative">

<div className="absolute right-4 cursor-pointer text-[#D24325] top-0">
  <FaHeart />
</div>
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<div className="flex justify-between my-2 gap-2">
<div className="flex px-2 items-center gap-1">
<TiStar className="text-[#F3C124]"/> 
<span>4.5</span>
</div>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>
</div>


<div className="cardShadow min-w-[31%] py-5 relative">
<div className="p-3 flex justify-center relative">

<div className="absolute right-4 cursor-pointer text-[#D24325] top-0">
  <FaHeart />
</div>
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<div className="flex justify-between my-2 gap-2">
<div className="flex px-2 items-center gap-1">
<TiStar className="text-[#F3C124]"/> 
<span>4.5</span>
</div>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>
</div>


<div className="cardShadow min-w-[31%] py-5 relative">
<div className="p-3 flex justify-center relative">

<div className="absolute right-4 cursor-pointer text-[#D24325] top-0">
  <FaHeart />
</div>
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<div className="flex justify-between my-2 gap-2">
<div className="flex px-2 items-center gap-1">
<TiStar className="text-[#F3C124]"/> 
<span>4.5</span>
</div>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>
</div>


      </div>
    </div>
  )
}

export default Favorite
