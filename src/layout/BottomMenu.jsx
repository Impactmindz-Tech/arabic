import { Link } from "react-router-dom";
import Images from "../constant/Images";
import MenuModals from "../components/modal/MenuModals";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function BottomMenu() {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  return (
    //
    <div className="sm:w-[98%] bottomMenuBar sm:left-1 fixed bottom-0 left-50 p-2 bg-[#205960] z-50 rounded-full">
      <div className="flex justify-evenly items-center">
        <div className="icon cursor-pointer" onClick={() => setOpenModal(true)}>
          <div className="hover:bg-red-900 p-2 rounded-full">
            <img
              src={Images.menu}
              alt="menu"
              className="sm:w-4 sm:h-4 w-7 h-7 object-cover"
            />
          </div>
        </div>

        <div className="icon cursor-pointer">
          <Link to="/dashboard/cart">
            <div
              className={`hover:bg-red-900 p-2 rounded-full ${
                location.pathname == "/dashboard/cart" ? "bg-red-900" : ""
              }`}
            >
              <img
                src={Images.cartWhite}
                alt="cart white"
                className="sm:w-4 sm:h-4 w-7 h-7 object-cover "
              />
            </div>
          </Link>
        </div>

        <div className="icon cursor-pointer">
          <Link to="/dashboard/coins">
            <div
              className={`hover:bg-red-900 p-2 rounded-full ${
                location.pathname == "/dashboard/coins" ? "bg-red-900" : ""
              }`}
            >
              <img
                src={Images.giftRed}
                alt=" giftRed"
                className="sm:w-4 sm:h-4 w-7 h-7 object-cover"
              />
            </div>
          </Link>
        </div>

        <div className="icon">
          <Link to="/dashboard/home">
            <div
              className={`hover:bg-red-900 p-2 rounded-full ${
                location.pathname == "/dashboard/home" ? "bg-red-900" : ""
              }`}
            >
              <img
                src={Images.home}
                alt="home"
                className=" sm:w-4 sm:h-4 w-7 h-7 object-cover"
              />
            </div>
          </Link>
        </div>
      </div>

      <MenuModals openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default BottomMenu;
