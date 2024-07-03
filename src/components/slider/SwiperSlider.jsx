import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperSlider = ({ imagesslider, category }) => {
    return (
        <Swiper
            spaceBetween={1}
            slidesPerView={category ? 6 : 1}
           
        >
            {
                imagesslider?.map((item, index) => {
                
                    return (
                        <div key={index}>
                            {
                                !category ?
                                    <SwiperSlide key={index}>
                                        <img className='w-full' src={item.img} alt="" />
                                    </SwiperSlide>
                                    :
                                    <SwiperSlide key={index}>
                                        <div className=''>
                                            <img className='sm:h-10 w-24 h-24' src={item.img} alt="" />
                                            <p className='font-semibold pt-3 pl-5 sm:pl-0 sm:font-normal'>{item.title}</p>
                                        </div>
                                    </SwiperSlide>
                            }
                        </div>

                    )
                })
            }
        </Swiper>
    )
}

export default SwiperSlider