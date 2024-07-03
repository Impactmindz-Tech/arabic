import React from 'react'
import Images from '../../../constant/Images'

function CategoryDashboardCard() {
  return (
    <div className="w-[22%]  sm:w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
  )
}

export default CategoryDashboardCard;
