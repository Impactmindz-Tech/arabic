import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { IoImagesOutline } from "react-icons/io5";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
const fileTypes = ["JPG", "PNG", "GIF"];
const EditProduct = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div className="w-[90%] m-auto pb-20 sm:w-[100%]">
      <Header />
        <BackButtonMenu text="تعديل المنتج" link="/" />

        <div className="border rounded-md border-lightGrey-400">
          <div className="title bg-[#FDD7CF] rounded-t-md text-right p-3 font-bold">
          صور المنتج
          </div>
          <div className="p-4">
            <div className="product_image">
              <FileUploader
                handleChange={handleChange}
                multiple={true}
                name="file"
                types={fileTypes}
              >
                <div className="rounded-md border-2 border-dashed border-lightGrey-400 w-full min-h-[20vh] flex flex-col items-center justify-center">
                  <i className="">
                    <IoImagesOutline className="text-[#D24325] text-3xl" />
                  </i>
                  <p className=" text-lightGrey-400">images</p>
                </div>
              </FileUploader>
            </div>
          </div>
        </div>
        <form className="flex flex-col mt-6 gap-y-2" noValidate>
          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="product_name"
          >
         اسم المنتج
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <input
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
              type="text"
              id="product_name"
              placeholder="تيشيرت رصاصى"
            />
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="product_price"
          >
          السعر
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <input
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
              type="text"
              id="product_price"
              placeholder="400 ريال"
            />
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="category"
          >
       الفئة
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <select
              name="category"
              id="category"
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
            >
              <option value="ملابس">ملابس </option>
            </select>
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="sub_category"
          >
            الفئة الفرعية
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <select
              name="sub_category"
              id="sub_category"
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
            >
              <option value="رجالى">رجالى </option>
            </select>
          </div>


          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="product_details"
          >
             تفاصيل المنتج    </label>
          <div className="2xl:p-4  border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <textarea name="product_details" id="product_details" rows={4}  placeholder="طقم أطفال يلبس لحد سن 5 سنوات عبارة عن قميص وبنطلون ومتوفر بجميع الالوان سارع بالحجز للحصول عليه" className="resize-none row-10  w-full text-center outline-none text-[12px] text-input-placeholder"
           >
            
           </textarea>

          </div>

          <input type="submit" value="اضافة" className="btnSubmit"/>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
