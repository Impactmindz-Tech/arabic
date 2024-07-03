import React, { useState } from "react";
import { profileValidation } from "../../utils/FormValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Images from "../../constant/Images";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setIsPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileValidation) });

  const onSubmit = (data) => {
    navigate("/dashboard/home");
    // try {
    //     const resData = await LoginAdmin(loginData);
    //     console.log(resData, 'res data')
    //     if (resData) {
    //         dispatch(setUser(resData));
    //         setLocalStorage('admin', resData);
    //         setLocalStorage('token', resData.token);
    //         // setAuthToken()
    //         navigate('/admin/dashboard');
    //     } else {
    //         console.log('login faild')
    //     }
    // } catch (error) {
    //     console.log('Login error:', error)
    // }
  };
  return (
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
        <label
          className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1 capitalize"
          htmlFor="mobile"
        >
          {" "}
          رقم الجوال
        </label>
        <div className=" 2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2">
          <input
            placeholder="ادخل رقم الجوال"
            className="w-full text-right outline-none text-[12px] text-input-placeholder capitalize"
            type="text"
            id="mobile"
            {...register("email")}
          />
        </div>
        <p className="text-[red] text-[12px]">{errors.email?.message}</p>
        <div className="mt-3">
          <label
            className="2xl:text-sm text-right block bg-white text-input-label -top-2 left-5 text-[11px] px-1 capitalize"
            htmlFor="password"
          >
            {" "}
            كلمة المرور
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
              placeholder="ادخل كلمة المرور"
              className="w-full text-right outline-none text-[12px] text-input-placeholder"
              type={passwordVisible ? "text" : "password"}
              id="password"
              {...register("password")}
            />
          </div>
        </div>
        <p className="text-[red] text-[12px]">{errors.password?.message}</p>
        <Link to={"/forgetpassword"}>
          <p
            className="text-[11px] my-2 mr-2 text-input-placeholder w-max ml-auto"
            to="/auth/forgot-password"
          >
            نسيت كلمة المرور
          </p>
        </Link>
        <button
          type="submit"
          className="mt-6 bg-red-900 text-white text-[12px] px-12 py-3 rounded-lg"
        >
          {/* <span>Sign In</span> */}
          تسجيل الدخول
          {/* {loading && <span className="loader"></span>} */}
        </button>
      </form>
    </div>
  );
};

export default Login;
