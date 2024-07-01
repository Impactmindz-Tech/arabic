import React from 'react'
import Images from '../constant/Images'

const Header = () => {
    return (
        <header className='py-2'>
            <div className='flex items-center justify-between'>
                <img src={Images.bell_Img} alt="" />
                <div className='flex items-center gap-5'>
                    <h2>مرحبا , أية عمر</h2>
                    <img src={Images.client_Img} alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header