import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { profileValidation, verifyOtp } from "../../utils/FormValidation";
import Images from "../../constant/Images";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(verifyOtp) });
  const onSubmit = (data) => {
    navigate("/verify_otp");
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
        className="sm:w-[80px] sm:h-auto w-[150px] mx-auto h-[130px]"
        src={Images.Auth_Img}
        alt=""
      />
      <form
        className="flex flex-col mt-10"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label
          className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1"
          htmlFor="email"
        >
          رقم الجوال
        </label>
        <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2">
          <input
            placeholder="ادخل رقم الجوال"
            className="w-full text-right outline-none text-[12px] text-input-placeholder"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>
        <p className="text-[red] text-[12px]">{errors.email?.message}</p>
        <p
          className="text-[11px] my-2 mr-2 text-input-placeholder w-max ml-auto"
          to="/auth/forgot-password"
        >
          نسيت كلمة المرور
        </p>
        <button
          type="submit"
          className="mt-6 bg-red-900 text-white text-[12px] px-12 py-3 rounded-lg"
        >
          {/* <span>Sign In</span> */}
          ارسال
          {/* {loading && <span className="loader"></span>} */}
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
