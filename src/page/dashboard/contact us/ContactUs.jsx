import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
import Images from "../../../constant/Images.js";

const EditProduct = () => {
  return (
    <>
      <div className="pb-20">
        <Header />
        <BackButtonMenu text="تواصل معنا" link="/dashboard/home" />

        {/* note image */}
        <div className="flex justify-center">
          <div className="flex justify-center">
            <img
              src={Images.notes}
              alt={Images.notes}
              className="w-40 h-40 object-contain"
            />
          </div>
        </div>
        <form className="flex flex-col mt-6 gap-y-2" noValidate>
          <label
            className="2xl:text-sm text-right font-bold bg-white text-input-label -top-2 left-5 text-[11px] px-1"
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
            className="2xl:text-sm text-right font-bold bg-white text-input-label -top-2 left-5 text-[11px] px-1"
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
            className="2xl:text-sm text-right font-bold bg-white text-input-label -top-2 left-5 text-[11px] px-1"
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
            className="2xl:text-sm text-right font-bold bg-white text-input-label -top-2 left-5 text-[11px] px-1"
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
