import { useState } from "react";
import Images from "../../../constant/Images.js";

const Profile = () => {

  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex justify-end gap-2 items-center my-6 z-10 ">
          <p className="cursor-pointer">حسابى</p>
          <div className="arrow cursor-pointer">
            <img
              src={Images.rightArrow}
              alt="right arrow"
              className="w-5 h-4"
            />
          </div>
        </div>
<div className="flex justify-end">
<div className="flex gap-4 items-center" >
<div className="details">
    <h3 className="text-right">أية عمر</h3>
    <h5 className="text-[#B2B2B2]">01000000000</h5>
</div>
<div className="images">

        <img
          className="w-[80px] h-[80px] border rounded-full border-[#A9BCC0]"
          src={Images.Auth_Img}
          alt=""
        />
</div>
</div>
</div>

        <div className="bg-[#FBEDEA] flex items-center justify-around w-full h-20 my-5">
<div className="border-r w-[33.3%]">
    <h3 className="text-sm text-[#555555] text-center">الاعلانات</h3>
    <h2 className="text-center text-2xl">5</h2>
</div>

<div className="border-r w-[33.3%] ">
    <h3 className="text-sm text-[#555555] text-center">حراجى</h3>
    <h2 className="text-center text-2xl">10</h2>
</div>

<div className="w-[33.3%]">
    <h3 className="text-sm text-[#555555] text-center">الطلبات</h3>
    <h2 className="text-center text-2xl">30</h2>
</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
