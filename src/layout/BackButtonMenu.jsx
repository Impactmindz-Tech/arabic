import { Link } from "react-router-dom";
import Images from "../constant/Images.js";
function BackButtonMenu({text,link}) {
  return (
    <div className="flex justify-end gap-2 items-center my-6 z-10">
   
    <p className="cursor-pointer"> <Link to={link}> {text} </Link></p>
    <Link to={link}><div className="arrow cursor-pointer">
     <img
        src={Images.rightArrow}
        alt="right arrow"
        className="w-5 h-4"
      />
   
    </div> </Link>
  </div>
  )
}

export default BackButtonMenu
