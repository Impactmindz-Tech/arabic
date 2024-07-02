import { Link } from "react-router-dom";
import Header from "../../../components/Header";
import Images from "../../../constant/Images";
import BackButtonMenu from "../../../layout/BackButtonMenu";
function VendorsPage() {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <BackButtonMenu text="المتجر" link={"/"} />

      <nav className="flex justify-end space-x-8 my-4 ">
        <Link to="#" className=" border-red-600 pb-1">
          ماركت
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1"
        >
          ساعات
        </Link>
        <Link
          to="#"
          className="text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1"
        >
          ملابس
        </Link>
        <Link
          to="#"
          className="text-red-600 border-b-2 text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1"
        >
          الكل
        </Link>
      </nav>

      <div className="flex gap-3 flex-wrap justify-between">
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
        <div className="w-[30%]">
          <img src={Images.car} alt="car" className="object-fit w-[100%] " />
        </div>
      </div>
    </div>
  );
}

export default VendorsPage;
