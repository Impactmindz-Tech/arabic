import React, { useState } from 'react'
import Images from '../../constant/Images';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { profileValidation } from '../../utils/FormValidation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
    const [passwordVisible, setIsPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(profileValidation) });
    const onSubmit = (data) => {
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
    }
    return (
        <div className='2xl:max-w-[335px] w-full max-w-[270px] mx-auto h-full flex flex-col gap-2'>
            <img className='w-[150px] mx-auto h-[130px]' src={Images.Auth_Img} alt="" />
            <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='text-right'>
                    <label className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="name">ادخل الأسم</label>
                    <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2">
                        {/* <img src={EmailIcon} alt="email-svg" width={12} /> */}
                        <input placeholder='ادخل الأسم' className="w-full text-right outline-none text-[12px] text-input-placeholder" type="text" id="name" {...register("email")} />
                    </div>
                </div>
                <div className='text-right'>
                    <label className="2xl:text-sm text-right  bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="mobile">رقم الجوال</label>
                    <div className="2xl:p-4 border border-input-placeholder border-[#000E2F70] flex items-center gap-x-2 rounded-xl p-3 relative mt-2">
                        <input placeholder=' ادخل رقم الجوال ' className="w-full text-right outline-none text-[12px] text-input-placeholder" type="text" id="mobile" {...register("email")} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className="2xl:text-sm text-right block bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="password">كلمة المرور</label>
                    <div className="2xl:p-4 border mt-1 border-input-placeholder border-[#000E2F70] flex gap-x-2 rounded-xl p-3 relative">
                        <div onClick={() => setIsPasswordVisible(!passwordVisible)}>  {passwordVisible ? <VisibilityOffIcon sx={{ color: "#747474" }} /> : <VisibilityIcon sx={{ color: "#747474" }} />}</div>
                        <input placeholder="ادخل كلمة المرور" className="w-full text-right outline-none text-[12px] text-input-placeholder" type={passwordVisible ? 'text' : 'password'} id="password" {...register('password')} />
                    </div>
                </div>
                <div className='mt-3'>
                    <label className="2xl:text-sm text-right block bg-white text-input-label -top-2 left-5 text-[11px] px-1" htmlFor="confirm_password">كلمة المرور</label>
                    <div className="2xl:p-4 border mt-1 border-input-placeholder border-[#000E2F70] flex gap-x-2 rounded-xl p-3 relative">
                        <div onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>  {confirmPasswordVisible ? <VisibilityOffIcon sx={{ color: "#747474" }} /> : <VisibilityIcon sx={{ color: "#747474" }} />}</div>
                        <input placeholder="ادخل كلمة المرور" className="w-full text-right outline-none text-[12px] text-input-placeholder" type={confirmPasswordVisible ? 'text' : 'password'} id="confirm_password" {...register('password')} />
                    </div>
                </div>
                <button type="submit" className="mt-6 bg-red-900 text-white text-[12px] px-12 py-3 rounded-lg">
                    انشاء حساب
                </button>
            </form>
        </div>
    )
}

export default SignUp