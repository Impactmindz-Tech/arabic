import Images from "../../../constant/Images.js";

function MyProduct() {
  return (
    <div className="w-[90%] m-auto">
<div className="flex justify-end gap-2 items-center my-6 z-10">
          <p> حراجى</p>
          <div className="arrow">
            <img
              src={Images.rightArrow}
              alt="right arrow"
              className="w-5 h-4"
            />
          </div>
        </div>
      

      {/* product section */}
      <div className="flex flex-wrap  justify-center gap-4">
<div className="cardShadow min-w-[31%] py-5">
<div className="p-3 flex justify-center">
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>


<div className="cardShadow min-w-[31%] py-5">
<div className="p-3 flex justify-center">
<img src={Images.child} alt={Images.child}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className=""> طقم ولادى</h3>
<p className="text-[#D96951]">400 ريال</p>
</div>
</div>


<div className="cardShadow min-w-[31%] py-5">
<div className="p-3 flex justify-center">
<img src={Images.child} alt={Images.child}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className=""> طقم ولادى</h3>
<p className="text-[#D96951]">400 ريال</p>
</div>
</div>
<div className="cardShadow min-w-[31%] py-5">
<div className="p-3 flex justify-center">
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>

<div className="cardShadow min-w-[31%] py-5">
<div className="p-3 flex justify-center">
<img src={Images.child} alt={Images.child}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className=""> طقم ولادى</h3>
<p className="text-[#D96951]">400 ريال</p>
</div>
</div>


<div className="cardShadow min-w-[31%] py-5">
<div className="p-3 flex justify-center">
<img src={Images.jacket} alt={Images.jacket}   className="w-30 object-contain"  />
</div>
<div className="text-right pr-4">

<h3 className="">تيشيرت </h3>
<p className="text-[#D96951]">200 ريال</p>
</div>
</div>
      </div>
    </div>
  )
}

export default MyProduct
