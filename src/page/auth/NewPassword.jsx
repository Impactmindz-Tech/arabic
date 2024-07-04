import  { useState } from "react";
import Images from "../../constant/Images";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileValidation } from "../../utils/FormValidation";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const NewPassword = () => {
  const [passwordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileValidation) });
  const onSubmit = (data) => {};
  return (
    <>
      <div className="sm:min-w-[90%] w-full max-w-[270px] mx-auto h-full flex flex-col gap-2">
        <img
          className="w-[150px] mx-auto h-[130px] sm:w-[80px] sm:h-auto"
          src={Images.Auth_Img}
          alt=""
        />
        <form
          className="flex flex-col mt-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="mt-3">
            <label
              className="2xl:text-sm text-right block bg-white text-input-label -top-2 left-5 text-[11px] px-1"
              htmlFor="password"
            >
              كلمة المرور الجديدة
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
                placeholder="ادخل كلمة المرور  "
                className="w-full text-right outline-none text-[12px] text-input-placeholder"
                type={passwordVisible ? "text" : "password"}
                id="password"
                {...register("password")}
              />
            </div>
          </div>
          <div className="mt-3">
            <label
              className="2xl:text-sm text-right block bg-white text-input-label -top-2 left-5 text-[11px] px-1"
              htmlFor="confirm_password"
            >
              تأكيد كلمة المرور
            </label>
            <div className="2xl:p-4 border mt-1 border-input-placeholder border-[#000E2F70] flex gap-x-2 rounded-xl p-3 relative">
              <div
                onClick={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                {" "}
                {confirmPasswordVisible ? (
                  <VisibilityOffIcon sx={{ color: "#747474" }} />
                ) : (
                  <VisibilityIcon sx={{ color: "#747474" }} />
                )}
              </div>
              <input
                placeholder="ادخل كلمة المرور  "
                className="w-full text-right outline-none text-[12px] text-input-placeholder"
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirm_password"
                {...register("password")}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 bg-red-900 text-white text-[12px] px-12 py-3 rounded-lg"
          >
            تأكيد
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPassword;
