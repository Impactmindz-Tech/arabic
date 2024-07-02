import Images from "../../../constant/Images.js";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import { IoAddOutline } from "react-icons/io5";
import AddressPopModal from "../../../components/modal/AddressPopModal.jsx";
import { useState } from "react";
const AddressPage = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-[90%] m-auto relative h-[70vh] ">
        <Header />
        <BackButtonMenu text="العناوين" link="/" />
        <div className="links">
          <div className="border-b border-[#DADADA] flex justify-end py-7 items-center">
            <div className="flex gap-2">
              <p className="text-[#555555]"> الرياض - السعودية</p>
              <div className="imgs">
                <img src={Images.location} alt="map" />
              </div>
            </div>
          </div>

          <div className="border-b border-[#DADADA] flex justify-end py-7 items-center">
            <div className="flex gap-2">
              <p className="text-[#555555]"> الرياض - السعودية </p>
              <div className="imgs">
                <img src={Images.location} alt="map" />
              </div>
            </div>
          </div>

          <div className="border-b border-[#DADADA] flex justify-end py-7 items-center">
            <div className="flex gap-2">
              <p className="text-[#555555]"> الرياض - السعودية </p>
              <div className="imgs">
                <img src={Images.location} alt="map" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#205960] absolute bottom-0 left-0 p-1 rounded-full cursor-pointer">
            <IoAddOutline className="text-2xl text-white" onClick={()=>setOpen(true)}/>
        </div>


        <AddressPopModal open={open} setOpen={setOpen}/>
      </div>



    </>
  );
};

export default AddressPage;
