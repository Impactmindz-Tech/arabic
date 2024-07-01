import React from 'react'
import Images from '../../constant/Images'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Dashboard = () => {
    return (
        <>
            <div className='border border-lightGrey-300 px-3 py-3 w-full text-right rounded-xl flex items-center gap-2'>
                <input type="text" placeholder='ابحث عن منتجك' className='outline-none w-full text-right' name="" id="" />
                <img src={Images.search_Img} alt="" />
            </div>
            <div>
                <Carousel
                autoPlay={true}
                >
                    <div>
                        <img src="assets/1.jpeg" />
                        <img src={Images.slider_Img} alt="" />
                    </div>
                    <div>
                        <img src="assets/1.jpeg" />
                        <img src={Images.slider_Img} alt="" />
                    </div>
                    <div>
                        <img src="assets/1.jpeg" />
                        <img src={Images.slider_Img} alt="" />
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Dashboard