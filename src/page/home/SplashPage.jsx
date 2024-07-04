import Images from "../../constant/Images";

function SplashPage() {
  return (
    <div className="w-full h-screen bg-lightGrey">
      <div className="h-full  m-auto w-[720px] relative sm:w-[100%]">
        <div className="flex items-center justify-center h-[90vh]">
          <img src={Images.Auth_Img} alt="logo-img" className="sm:w-[130px] sm:h-[130px]"/>
        </div>

        <div className="absolute bottom-2 left-0 flex justify-center w-full items-center">
          <img src={Images.sponsor} alt="Images sponsor" />
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
