import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperSlider = ({ imagesslider, category }) => {
    return (
        <Swiper
            spaceBetween={1}
            slidesPerView={category ? 6 : 1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                imagesslider?.map((item, index) => {
                
                    return (
                        <>
                            {
                                !category ?
                                    <SwiperSlide key={index}>
                                        <img className='w-full' src={item.img} alt="" />
                                    </SwiperSlide>
                                    :
                                    <SwiperSlide key={index}>
                                        <div className=''>
                                            <img className='w-24 h-24' src={item.img} alt="" />
                                            <p className='font-semibold pt-3 pl-5'>{item.title}</p>
                                        </div>
                                    </SwiperSlide>
                            }
                        </>

                    )
                })
            }
        </Swiper>
    )
}

export default SwiperSlider