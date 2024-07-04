import Images from '../constant/Images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='py-2'>
            <div className='flex items-center justify-between'>
            <div className="relative">
            <div className="absolute -top-1 -right-1 p-0 px-[5px] text-xs sm:p-0 sm:-right-1 sm:-top-0  sm:px-[5px] text-white  bg-[#205960] rounded-full">
          2
        </div>

              <Link to="/dashboard/notification"> <img src={Images.bell_Img} alt="" /></Link> 
            </div>
                <Link to="/dashboard/home"><div className='flex items-center gap-5'>
                    <h2>مرحبا , أية عمر</h2>
                    <img src={Images.client_Img} alt="" />
                </div></Link>
            </div>
        </header>
    )
}

export default Header