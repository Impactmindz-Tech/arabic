import React from 'react'
import Images from '../../constant/Images'
import SwiperSlider from '../../components/slider/SwiperSlider'
import imagesslider from '../../constant/sliderImage'
import chairImages from '../../constant/catgeroryiages'

const Dashboard = () => {
    return (
        <>
            <div className='border border-lightGrey-300 px-3 py-3 w-full text-right rounded-xl flex items-center gap-2'>
                <input type="text" placeholder='ابحث عن منتجك' className='outline-none w-full text-right' name="" id="" />
                <img src={Images.search_Img} alt="" />
            </div>
            <div className='pt-5'>
                <SwiperSlider imagesslider={imagesslider} />
            </div>
            <div className='pt-5'>
                <SwiperSlider category={true} imagesslider={chairImages} />
            </div>
        </>
    )
}

export default Dashboard