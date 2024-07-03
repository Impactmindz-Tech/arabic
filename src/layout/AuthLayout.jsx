import Images from "../constant/Images"

const AuthLayout = ({ children }) => {
    return (
        <section className='w-full h-screen bg-lightGrey p-8 sm:p-0'>
            <div className='w-full h-full bg-white rounded-3xl p-8 sm:p-0 flex gap-x-6 '>
                <div className="sm:hidden flex flex-1 items-center justify-center border border-blue-900 rounded-3xl">
                    <img className='2xl:w-50' src={Images.Auth_Img} alt="logo-img" />
                </div>
                <div className="flex-1 self-center sm:flex ">
                    {children}
                </div>
            </div>
        </section>
    )
};

export default AuthLayout;