import { useState } from "react";
import Images from "../../../constant/Images.js";
import { FileUploader } from "react-drag-drop-files";
import { IoImagesOutline } from "react-icons/io5";
const fileTypes = ["JPG", "PNG", "GIF"];
const EditProduct = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex justify-end gap-2 items-center my-6 z-10">
          <p> تواصل معنا </p>
          <div className="arrow">
            <img
              src={Images.rightArrow}
              alt="right arrow"
              className="w-5 h-4"
            />
          </div>
        </div>

{/* note image */}
<div className="flex justify-center">
<div className="flex justify-center w-40 h-40">

  <img src={Images.notes} alt={Images.notes} className="w-[100%] h-[100%] object-contain" />
</div>
</div>
        <form className="flex flex-col mt-6 gap-y-2" noValidate>
          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="names"
          >
            الاسم
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <input
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
              type="text"
              id="names"
              placeholder="aya omar"
            />
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="mobile"
          >
            رقم الجوال
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <input
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
              type="text"
              id="mobile"
              placeholder="0100000000000"
            />
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="topic"
          >
            الموضوع
          </label>
          <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <input
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
              type="text"
              id="topic"
              placeholder="ادخل رقم الجوال"
            />
          </div>

          <label
            className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
            htmlFor="message"
          >
            الرسالة{" "}
          </label>
          <div className="2xl:p-4  border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative ">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="resize-none row-10  w-full text-right outline-none text-[12px] text-input-placeholder"
            >
              اكتب رسالتك
            </textarea>
          </div>

          <input type="submit" value="ارسال" className="btnSubmit" />
        </form>
      </div>
    </>
  );
};

export default EditProduct;
