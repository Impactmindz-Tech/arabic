import { Link } from "react-router-dom";
import OnBoardingSlider from "../../components/slider/OnBoardingSlider";
import Images from "../../constant/Images";

function OnBoardingPage() {
  return (
    <div className="w-full h-screen bg-lightGrey py-16 sm:py-2">
      <div className="pb-20 m-auto w-[720px] relative sm:w-[100%] ">
        <OnBoardingSlider />

        {/* next */}
        <div className="btn mt-5 flex flex-wrap justify-center">
        <Link to="/choice_login_page" className="RedBtnSubmit w-[50%] p-2 outline-none flex justify-center">

          <button >التالى</button>
        </Link>
        </div>
        {/* skip */}
        <div className="btn flex mt-3 flex-wrap justify-center">
        <Link to="/login" className="p-2 text-center text-[#D24325] cursor-pointer flex justify-center">

          <p >تخطى</p>
</Link>
        </div>

        <div className="absolute bottom-0 left-0 flex justify-center w-full items-center sm:bottom-3">
          <img src={Images.sponsor} alt="Images sponsor" />
        </div>
      </div>
    </div>
  );
}

export default OnBoardingPage;
