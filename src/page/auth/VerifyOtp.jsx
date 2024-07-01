import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import Images from '../../constant/Images';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  return (
    <div className='text-center'>
      <div className='text-right pb-24'>
        <p className='font-semibold'>ادخل الكود التأكيدى <EastIcon /></p>
        <p>تم ارسال كود تأكيدى على رقم الجوال الخاص بك قم بادخاله لاستعادة كلمة المرور</p>
      </div>
      <div className='mb-24'>
        <img className='w-[150px] mx-auto h-[130px]' src={Images.Auth_Img} alt="" />
      </div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        containerStyle="gap-10 justify-center"
        inputStyle="verify_input outline-none text-2xl"
        // renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
      />
      <Link to={"/"}><button type="submit" className="mt-16 bg-red-900 text-white text-[12px] px-12 py-3 rounded-lg">
        {/* <span>Sign In</span> */}
        التالى
        {/* {loading && <span className="loader"></span>} */}
      </button>
      </Link>
    </div>
  )
}

export default VerifyOtp