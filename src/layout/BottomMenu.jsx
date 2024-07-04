import { Link } from "react-router-dom"
import Images from "../constant/Images"

function BottomMenu() {
  return (
   // 
    <div className="sm:w-[98%] bottomMenuBar sm:left-1 fixed bottom-0 left-50  p-4 bg-[#205960] z-50 rounded-full">
        <div className="container flex justify-evenly">
            <div className="icon">
               <Link to="">
               <img src={Images.menu} alt="menu" className="sm:w-4 sm:h-4 w-7 h-7 object-cover"/>
               </Link> 
            </div>

            <div className="icon">
               <Link to="/dashboard/cart">
               <img src={Images.cartWhite} alt="cart white" className="sm:w-4 sm:h-4 w-7 h-7 object-cover"/>
               </Link> 
            </div>


            <div className="icon">
               <Link to="/dashboard/coins">
               <img src={Images.giftRed} alt=" giftRed" className="sm:w-4 sm:h-4 w-7 h-7 object-cover"/>
               </Link> 
            </div>

            <div className="icon">
               <Link to="/dashboard/home">
               <img src={Images.home} alt="home" className=" sm:w-4 sm:h-4 w-7 h-7 object-cover"/>
               </Link> 
            </div>
        </div>
    </div>
  )
}

export default BottomMenu
