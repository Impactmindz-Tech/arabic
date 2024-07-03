import Slider from "../../../components/DetailsProductSlider/Slider.jsx";
import { FaRegEdit } from "react-icons/fa";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import { Link } from "react-router-dom";
function DetailsMyProduct() {
  return (
    <div className="w-[90%] m-auto pb-20">
     <Header />
        <BackButtonMenu text="تفاصيل المنتج" link="/" />

      <p className="flex justify-end">
        <Link to="/dashboard/edit_product"><FaRegEdit className="text-[#D24325] cursor-pointer text-2xl" /></Link>
      </p>
      <div className="flex w-[100%] h-[250px] m-auto my-2 py-5">
        <Slider />
      </div>

      <div className="flex justify-between">
        <div className="text-red-600 font-semibold">500 ريال</div>
        <div className="text-green-900">“مستعمل”تيشيرت</div>
      </div>
      <p className="text-red-600 font-semibold text-right my-2">ملابس</p>
      <p className="text-[#373737] font-light text-right w-[80%] float-right my-2">
        طقم أطفال يلبس لحد سن 5 سنوات عبارة عن قميص وبنطلون ومتوفر بجميع الالوان
        سارع بالحجز للحصول عليه
      </p>
      <button className="btnSubmit w-full my-4">تم البيع</button>
    </div>
  );
}

export default DetailsMyProduct;
