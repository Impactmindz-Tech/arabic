import { useState } from "react";
import Header from "../../../components/Header.jsx";

import { FileUploader } from "react-drag-drop-files";
import { AiOutlineCloudUpload } from "react-icons/ai";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Images from "../../../constant/Images.js";
const fileTypes = ["JPG", "PNG", "GIF"];
const AddProduct = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div className="w-[90%] m-auto">
    <Header/>
    
     <BackButtonMenu text="اضافة حراج" link="/dashboard/my_product"/>

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
                    <AiOutlineCloudUpload className="text-[#D24325] text-3xl" />
                  </i>
                  <p className=" text-lightGrey-400">Upload images</p>
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
            />
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="category"
          >
            الفئة
          </label>
          <div className=" 2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <div className="absolute top-5 left-5">
              <img src={Images.arrowDown} alt="arrowDown" className="w-3 h-2"/>
            </div>
        <select
              name="category"
              id="category"
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
            >
              <option value="اختر الفئة">اختر الفئة</option>
            </select>
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="sub_category"
          >
            الفئة الفرعية
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
          <div className="absolute top-5 left-5">
              <img src={Images.arrowDown} alt="arrowDown" className="w-3 h-2"/>
            </div>
            <select
              name="sub_category"
              id="sub_category"
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
            >
              <option value="اختر الفئة">اختر الفئة</option>
            </select>
          </div>


          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="product_details"
          >
            تفاصيل المنتج    </label>
          <div className="2xl:p-4  border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <textarea name="product_details" id="product_details" rows={4}  className="resize-none row-10 w-full text-right outline-none text-[12px] text-input-placeholder"
           ></textarea>

          </div>

          <input type="submit" value="اضافة" className="btnSubmit"/>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
