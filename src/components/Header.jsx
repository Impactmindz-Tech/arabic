import Images from '../constant/Images'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='py-2'>
            <div className='flex items-center justify-between'>
              <Link to="/dashboard/notification"> <img src={Images.bell_Img} alt="" /></Link> 
                <Link to="/dashboard/home"><div className='flex items-center gap-5'>
                    <h2>مرحبا , أية عمر</h2>
                    <img src={Images.client_Img} alt="" />
                </div></Link>
            </div>
        </header>
    )
}

export default Header