import { useState } from "react";
import Images from "../../../constant/Images.js";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import BackButtonMenu from "../../../layout/BackButtonMenu.jsx";
import Header from "../../../components/Header.jsx";
const EditProfile = () => {
  const [passwordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <div className="pb-20">
        <Header />
        <BackButtonMenu text="تعديل الحساب" link="/dashboard/profile" />

        <img
          className="w-[80px] mx-auto h-[80px] border rounded-full border-[#A9BCC0]"
          src={Images.Auth_Img}
          alt=""
        />

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
              placeholder="Aya Omar "
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

          <div className="mt-3">
            <label
              className="2xl:text-sm text-right font-bold block bg-white text-input-label -top-2 left-5 text-[11px] px-1"
              htmlFor="new_password"
            >
              كلمة المرور الجديدة{" "}
            </label>
            <div className="2xl:p-4 border mt-1 border-input-placeholder border-[#000E2F70] flex gap-x-2 rounded-xl p-3 relative">
              <div onClick={() => setIsPasswordVisible(!passwordVisible)}>
                {" "}
                {passwordVisible ? (
                  <VisibilityOffIcon sx={{ color: "#747474" }} />
                ) : (
                  <VisibilityIcon sx={{ color: "#747474" }} />
                )}
              </div>
              <input
                placeholder="ادخل كلمة المرور "
                className="w-full text-right outline-none text-[12px] text-input-placeholder"
                type={passwordVisible ? "text" : "password"}
                id="new_password"
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="2xl:text-sm text-right block font-bold bg-white text-input-label -top-2 left-5 text-[11px] px-1"
              htmlFor="confirm_password"
            >
              {" "}
              تأكيد كلمة المرور
            </label>
            <div className="2xl:p-4 border mt-1 border-input-placeholder border-[#000E2F70] flex gap-x-2 rounded-xl p-3 relative">
              <div onClick={() => setIsPasswordVisible(!passwordVisible)}>
                {" "}
                {passwordVisible ? (
                  <VisibilityOffIcon sx={{ color: "#747474" }} />
                ) : (
                  <VisibilityIcon sx={{ color: "#747474" }} />
                )}
              </div>
              <input
                placeholder=" تأكيد كلمة المرور"
                className="w-full text-right outline-none text-[12px] text-input-placeholder"
                type={passwordVisible ? "text" : "password"}
                id="confirm_password"
              />
            </div>
          </div>

          <input type="submit" value="تحديث" className="btnSubmit my-5" />
        </form>
      </div>
    </>
  );
};

export default EditProfile;
