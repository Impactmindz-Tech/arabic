import Images from "../../constant/Images";

function SplashPage() {
  return (
    <div className="w-full h-screen bg-lightGrey">
      <div className="h-full  m-auto w-[720px] relative sm:w-[100%]">
        <div className="flex items-center justify-center h-[90vh]">
          <img src={Images.Auth_Img} alt="logo-img" className="sm:w-[130px] sm:h-[130px]"/>
        </div>

        <div className="bottomMenuBar flex justify-center fixed bottom-0 left-50">
          <img src={Images.sponsor} alt="Images sponsor" />
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
