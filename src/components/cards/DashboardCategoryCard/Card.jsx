import React from 'react'
import Images from '../../../constant/Images'

function CategoryDashboardCard() {
  return (
    <div className="w-[23%]  sm:w-[30%] cursor-pointer">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
          <div className="text-center text-[#205960] font-sm">صالح للسيارات</div>
        </div>
  )
}

export default CategoryDashboardCard;
